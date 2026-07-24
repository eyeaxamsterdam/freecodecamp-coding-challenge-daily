#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { fetchDailyChallenge } = require("./dailyChallenge");
const { parseArgs, pad, EXTENSIONS } = require("./cliArgs");

const HELP_TEXT = `
Usage: node helpers/createDayFiles.js [date] [language]

Pulls freeCodeCamp's daily coding challenge into a ready-to-solve file.

Date (optional):
  YYYY-MM-DD   a specific date, e.g. 2026-07-25
  MM-DD        a specific date in the current year, e.g. 07-25
  (omitted)    defaults to today

Language (optional):
  js, javascript   JavaScript only (default)
  py, python       Python only
  both, all        both languages
  py js            both languages (two separate args work too, any order)

Examples:
  node helpers/createDayFiles.js
  node helpers/createDayFiles.js 07-25
  node helpers/createDayFiles.js python
  node helpers/createDayFiles.js 2026-07-25 both
  node helpers/createDayFiles.js py js 07-25

See also: node helpers/syncTests.js --help
`;

async function createFile(year, month, day, language, folderName, folderPath) {
  const monthPadded = pad(month);
  const dayPadded = pad(day);
  const ext = EXTENSIONS[language];
  const fileName = `${year}-${monthPadded}-${dayPadded}.${ext}`;
  const filePath = path.join(folderPath, fileName);

  if (fs.existsSync(filePath)) {
    console.log(`\n⚠️  ${fileName} already exists — leaving it untouched.\n`);
    return;
  }

  let content = "";
  try {
    const fetched = await fetchDailyChallenge(year, month, day, language);
    if (fetched) {
      content = fetched;
      console.log(`📥  Pulled today's ${language} challenge from freeCodeCamp`);
    } else {
      console.log(`⚠️  No freeCodeCamp ${language} challenge for that date — created a blank file`);
    }
  } catch (err) {
    console.log(`⚠️  Couldn't fetch ${language} challenge (${err.message}) — created a blank file`);
  }

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`📁  Created folder: ${folderName}`);
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✅  Created ${path.join(folderName, fileName)}\n`);
}

async function main() {
  const argv = process.argv.slice(2);

  if (argv.includes("-h") || argv.includes("--help")) {
    console.log(HELP_TEXT);
    return;
  }

  const { year, month, day, languages } = parseArgs(argv);

  const repoRoot = path.join(__dirname, "..");
  const monthPadded = pad(month);
  const folderName = `${year}-${monthPadded}`;
  const folderPath = path.join(repoRoot, String(year), folderName);

  for (const language of languages) {
    await createFile(year, month, day, language, folderName, folderPath);
  }
}

main();
