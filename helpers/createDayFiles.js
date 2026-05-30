#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function pad(n) {
  return String(n).padStart(2, "0");
}

async function main() {
  console.log("\n📅  Monthly File Generator\n");

  const input = await prompt('Enter month and year (e.g. "June 2026"): ');
  rl.close();

  // Parse input — accepts "June 2026", "jun 2026", "6 2026", "06/2026", etc.
  const cleaned = input.trim();
  let month, year;

  // Try "Month YYYY" or "Mon YYYY"
  const namedMatch = cleaned.match(/^([a-zA-Z]+)\s+(\d{4})$/);
  // Try "M YYYY" or "MM YYYY" or "MM/YYYY" or "MM-YYYY"
  const numericMatch = cleaned.match(/^(\d{1,2})[\s\/\-](\d{4})$/);

  if (namedMatch) {
    const monthNames = [
      "january", "february", "march", "april", "may", "june",
      "july", "august", "september", "october", "november", "december",
    ];
    const monthStr = namedMatch[1].toLowerCase();
    // Allow full name or 3-letter abbreviation
    month = monthNames.findIndex(
      (m) => m === monthStr || m.startsWith(monthStr.slice(0, 3))
    ) + 1;
    year = parseInt(namedMatch[2], 10);
  } else if (numericMatch) {
    month = parseInt(numericMatch[1], 10);
    year = parseInt(numericMatch[2], 10);
  }

  if (!month || month < 1 || month > 12 || !year || year < 1) {
    console.error(
      '\n❌  Could not parse input. Try something like "June 2026" or "6 2026".\n'
    );
    process.exit(1);
  }

  const monthPadded = pad(month);
  const yearShort = String(year).slice(-2);
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const monthName = monthNames[month - 1];
  const totalDays = getDaysInMonth(month, year);

  // Create output folder  e.g.  "2026-06-June"
  const folderName = `${year}-${monthPadded}-${monthName}`;
  const folderPath = path.join(process.cwd(), folderName);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`\n📁  Created folder: ${folderName}`);
  } else {
    console.log(`\n📁  Using existing folder: ${folderName}`);
  }

  // Generate one file per day
  for (let day = 1; day <= totalDays; day++) {
    const dayPadded = pad(day);
    const fileName = `${monthPadded}-${dayPadded}-${yearShort}.js`;
    const filePath = path.join(folderPath, fileName);

    const date = new Date(year, month - 1, day);
    const weekday = date.toLocaleDateString("en-US", { weekday: "long" });

    const content = `// ${monthName} ${day}, ${year} — ${weekday}\n\n`;

    fs.writeFileSync(filePath, content, "utf8");
  }

  console.log(`✅  Generated ${totalDays} files for ${monthName} ${year}\n`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});