#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { pad, monthFolderName } = require("./cliArgs");

const START_DATE = Date.UTC(2025, 7, 11);
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const TOTAL_CHALLENGES = 365;
const challengesDir = path.join(__dirname, "..", "challenges", "javascript");

const today = Date.now();
const lastDay = Math.min(TOTAL_CHALLENGES, Math.floor((today - START_DATE) / MS_PER_DAY) + 1);

const missing = [];

for (let i = 0; i < lastDay; i++) {
  const date = new Date(START_DATE + i * MS_PER_DAY);
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const monthPadded = pad(month);
  const dayPadded = pad(day);
  const monthDir = path.join(challengesDir, monthFolderName(month));
  const prefix = `${monthPadded}-${dayPadded}-`;
  const exists =
    fs.existsSync(monthDir) &&
    fs.readdirSync(monthDir).some((f) => f.startsWith(prefix) && f.endsWith(".js"));
  if (!exists) {
    missing.push(`${monthPadded}-${dayPadded}`);
  }
}

if (missing.length === 0) {
  console.log(`✅  No missing challenges (checked ${lastDay} days).`);
} else {
  console.log(`⚠️  ${missing.length} missing challenge${missing.length === 1 ? "" : "s"}:\n`);
  missing.forEach((d) => console.log(`  ${d}`));
}
