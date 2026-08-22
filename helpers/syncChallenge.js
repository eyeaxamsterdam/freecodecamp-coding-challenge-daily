#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const {
  fetchSyncData,
  resolveChallenge,
  buildJsHeader,
  buildPythonHeader,
  buildJsTestTail,
  buildPythonTestTail,
  findHeaderEnd,
  findSplitPoint,
} = require("./dailyChallenge");
const { parseArgs, findChallengeFile } = require("./cliArgs");

const HELP_TEXT = `
Usage: node helpers/syncChallenge.js [date] [language]

Re-fetches a challenge's tests and header comment (title, description,
Link) from freeCodeCamp and refreshes a file you already have, in case
freeCodeCamp has updated either since you generated it. Your solution code
is never touched, only the header comment and the test block are replaced.

Date and language args work exactly like createDayFile.js (see its --help).

Examples:
  node helpers/syncChallenge.js               # today, JavaScript
  node helpers/syncChallenge.js 07-25 python
  node helpers/syncChallenge.js both
`;

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

  const filePath = findChallengeFile(challengesDir, language, month, day);

  if (!filePath) {
    console.log(`⚠️  No ${language} file for that date yet — run createDayFile.js first.`);
    return;
  }
  const fileName = path.basename(filePath);

  const content = fs.readFileSync(filePath, "utf8");

  let fetched;
  try {
    fetched = await fetchSyncData(year, month, day, language);
  } catch (err) {
    console.log(`⚠️  Couldn't fetch ${language} challenge for ${fileName} (${err.message}).`);
    return;
  }

  if (!fetched) {
    console.log(`⚠️  No freeCodeCamp ${language} challenge for that date — nothing to sync against.`);
    return;
  }
  const { title, description, link, assertBlocks, canonicalFnName } = fetched;

  const split = findSplitPoint(content, language, canonicalFnName);

  if (!split) {
    console.log(`⚠️  Couldn't locate the test call or function definition in ${fileName} — skipping.`);
    return;
  }
  const { fnName, splitIndex, needsImport } = split;

  // The header (title/description/Link) and the test tail are both
  // regenerated; everything in between, the user's actual solution, is
  // sliced out of the original content untouched and spliced back in as-is.
  const headerEnd = findHeaderEnd(content, language);
  const oldHeader = headerEnd === null ? "" : content.slice(0, headerEnd);
  const middle = content.slice(headerEnd === null ? 0 : headerEnd, splitIndex);

  const newHeader =
    headerEnd === null
      ? oldHeader
      : language === "python"
        ? buildPythonHeader({ title, description, link })
        : buildJsHeader({ title, description, link });

  const newTail =
    language === "python"
      ? buildPythonTestTail(fnName, assertBlocks, { needsImport })
      : buildJsTestTail(fnName, assertBlocks, { needsImport });
  const newContent = newHeader + middle + newTail;

  if (newContent === content) {
    console.log(`✅  ${fileName} is already up to date (${assertBlocks.length} tests).`);
    return;
  }

  const changed = [];
  if (headerEnd !== null && newHeader !== oldHeader) changed.push("description");
  if (newTail !== content.slice(splitIndex)) changed.push(`${assertBlocks.length} tests`);
  if (headerEnd === null) {
    console.log(`⚠️  Couldn't locate the header comment in ${fileName}, left it untouched.`);
  }

  fs.writeFileSync(filePath, newContent, "utf8");
  console.log(`🔄  ${fileName} synced, ${changed.join(" and ")} refreshed from freeCodeCamp.`);
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
