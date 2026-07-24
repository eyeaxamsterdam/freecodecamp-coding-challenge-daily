#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const {
  fetchAssertBlocks,
  buildJsTestTail,
  buildPythonTestTail,
  JS_TAIL_MARKER,
  PY_TAIL_MARKER,
} = require("./dailyChallenge");
const { parseArgs, pad, EXTENSIONS } = require("./cliArgs");

const HELP_TEXT = `
Usage: node helpers/syncTests.js [date] [language]

Re-fetches a challenge's tests from freeCodeCamp and refreshes a file you
already have, in case freeCodeCamp has updated the test cases since you
generated it. Your function implementation and the description comment are
left untouched — only the test block is replaced.

Date and language args work exactly like createDayFiles.js (see its --help).

Examples:
  node helpers/syncTests.js               # today, JavaScript
  node helpers/syncTests.js 07-25 python
  node helpers/syncTests.js both
`;

async function syncFile(year, month, day, language, folderName, folderPath) {
  const monthPadded = pad(month);
  const dayPadded = pad(day);
  const ext = EXTENSIONS[language];
  const fileName = `${year}-${monthPadded}-${dayPadded}.${ext}`;
  const filePath = path.join(folderPath, fileName);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${fileName} doesn't exist yet — run createDayFiles.js first.`);
    return;
  }

  const content = fs.readFileSync(filePath, "utf8");
  const marker = language === "python" ? PY_TAIL_MARKER : JS_TAIL_MARKER;
  const markerIndex = content.indexOf(marker);

  if (markerIndex === -1) {
    console.log(`⚠️  ${fileName} doesn't look like a generated file (no test harness found) — skipping.`);
    return;
  }

  const head = content.slice(0, markerIndex);
  const fnMatch =
    language === "python" ? head.match(/def\s+(\w+)\s*\(/) : head.match(/function\s+(\w+)\s*\(/);

  if (!fnMatch) {
    console.log(`⚠️  Couldn't find a function definition in ${fileName} — skipping.`);
    return;
  }
  const fnName = fnMatch[1];

  let assertBlocks;
  try {
    assertBlocks = await fetchAssertBlocks(year, month, day, language);
  } catch (err) {
    console.log(`⚠️  Couldn't fetch ${language} challenge for ${fileName} (${err.message}).`);
    return;
  }

  if (!assertBlocks) {
    console.log(`⚠️  No freeCodeCamp ${language} challenge for that date — nothing to sync against.`);
    return;
  }

  const newTail =
    language === "python"
      ? buildPythonTestTail(fnName, assertBlocks)
      : buildJsTestTail(fnName, assertBlocks);
  const newContent = head + newTail;

  if (newContent === content) {
    console.log(`✅  ${fileName} is already up to date (${assertBlocks.length} tests).`);
    return;
  }

  fs.writeFileSync(filePath, newContent, "utf8");
  console.log(`🔄  ${fileName} synced — ${assertBlocks.length} tests refreshed from freeCodeCamp.`);
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
    await syncFile(year, month, day, language, folderName, folderPath);
  }
}

main();
