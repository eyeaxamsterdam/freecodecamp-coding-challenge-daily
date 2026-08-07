#!/usr/bin/env node

const path = require("path");
const { spawnSync } = require("child_process");
const { parseArgs, findChallengeFile } = require("./cliArgs");

const HELP_TEXT = `
Usage: node helpers/testDay.js [date] [language]

Runs the tests for a challenge file you already have, without hunting
through the challenges/ tree for it. Finds the file by MM-DD prefix and
runs it directly (node for JavaScript, python3 for Python).

Date and language args work exactly like createDayFile.js (see its --help).

Examples:
  node helpers/testDay.js               # today, JavaScript
  node helpers/testDay.js 07-25
  node helpers/testDay.js 07-25 python
  node helpers/testDay.js both
`;

const RUNNERS = { javascript: "node", python: "python3" };

function runFile(month, day, language, challengesDir) {
  const filePath = findChallengeFile(challengesDir, language, month, day);
  if (!filePath) {
    console.error(`⚠️  No ${language} file found for that date. Run \`node helpers/createDayFile.js\` first.`);
    return 1;
  }
  const result = spawnSync(RUNNERS[language], [filePath], { stdio: "inherit" });
  return result.status ?? 1;
}

function main() {
  const argv = process.argv.slice(2);

  if (argv.includes("-h") || argv.includes("--help")) {
    console.log(HELP_TEXT);
    return;
  }

  const { month, day, languages } = parseArgs(argv);
  const challengesDir = path.join(__dirname, "..", "challenges");

  let exitCode = 0;
  for (const language of languages) {
    const status = runFile(month, day, language, challengesDir);
    if (status !== 0) exitCode = status;
  }
  process.exitCode = exitCode;
}

main();
