#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { fetchDailyChallenge, resolveChallenge } = require("./dailyChallenge");
const { parseArgs, pad, monthFolderName, EXTENSIONS } = require("./cliArgs");

const HELP_TEXT = `
Usage: node helpers/createDayFile.js [date] [language]

Pulls freeCodeCamp's daily coding challenge into a ready-to-solve file at
challenges/<language>/<MM-Mon>/<MM-DD>-<slug>.<ext>. The series repeats
every 365 days, so a date that lands on a challenge you've already solved
(the same MM-DD next year) will offer to overwrite it and start fresh.

Date (optional):
  MM-DD        a specific date in the current year, e.g. 07-25
  (omitted)    defaults to today

Language (optional):
  js, javascript   JavaScript only (default)
  py, python       Python only
  both, all        both languages
  py js            both languages (two separate args work too, any order)

Examples:
  node helpers/createDayFile.js
  node helpers/createDayFile.js 07-25
  node helpers/createDayFile.js python
  node helpers/createDayFile.js 07-25 both
  node helpers/createDayFile.js py js 07-25

See also: node helpers/syncChallenge.js --help
`;

function isToday(month, day) {
  const today = new Date();
  return month === today.getMonth() + 1 && day === today.getDate();
}

function askYesNo(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(/^y(es)?$/i.test(answer.trim()));
    });
  });
}

async function createFile(year, month, day, language, challengesDir) {
  let resolved;
  try {
    resolved = await resolveChallenge(year, month, day, language);
  } catch (err) {
    console.log(`⚠️  Couldn't reach freeCodeCamp to resolve the ${language} challenge (${err.message}).`);
    return;
  }

  if (!resolved) {
    console.log(`⚠️  No freeCodeCamp ${language} challenge for that date — nothing to create.`);
    return;
  }

  const { challengeNumber, slug } = resolved;
  const ext = EXTENSIONS[language];
  const monthPadded = pad(month);
  const dayPadded = pad(day);
  const monthDir = path.join(challengesDir, language, monthFolderName(month));
  const fileName = `${monthPadded}-${dayPadded}-${slug}.${ext}`;
  const filePath = path.join(monthDir, fileName);

  if (fs.existsSync(filePath)) {
    const overwrite = await askYesNo(
      `⚠️  ${fileName} already exists. Overwrite and start from scratch? (y/N): `
    );
    if (!overwrite) {
      console.log(`   Left ${fileName} untouched.\n`);
      return;
    }
  }

  let content = "";
  try {
    const fetched = await fetchDailyChallenge(year, month, day, language);
    if (fetched) {
      content = fetched;
      const when = isToday(month, day) ? "today's" : `challenge ${challengeNumber}'s`;
      console.log(`📥  Pulled ${when} ${language} challenge from freeCodeCamp`);
    } else {
      console.log(`⚠️  Couldn't fetch full challenge content — created a blank file`);
    }
  } catch (err) {
    console.log(`⚠️  Couldn't fetch ${language} challenge (${err.message}) — created a blank file`);
  }

  if (!fs.existsSync(monthDir)) {
    fs.mkdirSync(monthDir, { recursive: true });
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✅  Created challenges/${language}/${monthFolderName(month)}/${fileName}\n`);
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
    await createFile(year, month, day, language, challengesDir);
  }
}

main();
