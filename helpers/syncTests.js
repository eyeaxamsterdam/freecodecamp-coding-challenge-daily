#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const {
  fetchAssertBlocks,
  resolveChallenge,
  buildJsTestTail,
  buildPythonTestTail,
  findSplitPoint,
} = require("./dailyChallenge");
const { parseArgs, pad, monthFolderName, EXTENSIONS } = require("./cliArgs");

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

// Matched by MM-DD prefix rather than the exact slug, so a file still gets
// found even if freeCodeCamp has since tweaked the challenge title.
function findExistingFile(challengesDir, language, month, day, ext) {
  const monthPadded = pad(month);
  const dayPadded = pad(day);
  const monthDir = path.join(challengesDir, language, monthFolderName(month));
  if (!fs.existsSync(monthDir)) return null;
  const prefix = `${monthPadded}-${dayPadded}-`;
  const match = fs.readdirSync(monthDir).find((f) => f.startsWith(prefix) && f.endsWith(`.${ext}`));
  return match ? path.join(monthDir, match) : null;
}

async function syncFile(year, month, day, language, challengesDir) {
  let resolved;
  try {
    resolved = await resolveChallenge(year, month, day, language);
  } catch (err) {
    console.log(`⚠️  Couldn't reach freeCodeCamp to resolve the ${language} challenge (${err.message}).`);
    return;
  }

  if (!resolved) {
    console.log(`⚠️  No freeCodeCamp ${language} challenge for that date — nothing to sync against.`);
    return;
  }

  const ext = EXTENSIONS[language];
  const filePath = findExistingFile(challengesDir, language, month, day, ext);

  if (!filePath) {
    console.log(`⚠️  No ${language} file for that date yet — run createDayFiles.js first.`);
    return;
  }
  const fileName = path.basename(filePath);

  const content = fs.readFileSync(filePath, "utf8");

  let fetched;
  try {
    fetched = await fetchAssertBlocks(year, month, day, language);
  } catch (err) {
    console.log(`⚠️  Couldn't fetch ${language} challenge for ${fileName} (${err.message}).`);
    return;
  }

  if (!fetched) {
    console.log(`⚠️  No freeCodeCamp ${language} challenge for that date — nothing to sync against.`);
    return;
  }
  const { assertBlocks, canonicalFnName } = fetched;

  const split = findSplitPoint(content, language, canonicalFnName);

  if (!split) {
    console.log(`⚠️  Couldn't locate the test call or function definition in ${fileName} — skipping.`);
    return;
  }
  const { fnName, splitIndex, needsImport } = split;
  const head = content.slice(0, splitIndex);

  const newTail =
    language === "python"
      ? buildPythonTestTail(fnName, assertBlocks, { needsImport })
      : buildJsTestTail(fnName, assertBlocks, { needsImport });
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
  const challengesDir = path.join(repoRoot, "challenges");

  for (const language of languages) {
    await syncFile(year, month, day, language, challengesDir);
  }
}

main();
