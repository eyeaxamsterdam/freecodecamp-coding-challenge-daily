#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { pad } = require("./cliArgs");

const START_DATE = Date.UTC(2025, 7, 11);
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const TOTAL_CHALLENGES = 365;
const repoRoot = path.join(__dirname, "..");

const today = Date.now();
const lastDay = Math.min(TOTAL_CHALLENGES, Math.floor((today - START_DATE) / MS_PER_DAY) + 1);

const missing = [];

for (let i = 0; i < lastDay; i++) {
  const date = new Date(START_DATE + i * MS_PER_DAY);
  const year = date.getUTCFullYear();
  const month = pad(date.getUTCMonth() + 1);
  const day = pad(date.getUTCDate());
  const filePath = path.join(repoRoot, String(year), `${year}-${month}`, `${year}-${month}-${day}.js`);
  if (!fs.existsSync(filePath)) {
    missing.push(`${year}-${month}-${day}`);
  }
}

if (missing.length === 0) {
  console.log(`✅  No missing challenges (checked ${lastDay} days).`);
} else {
  console.log(`⚠️  ${missing.length} missing challenge${missing.length === 1 ? "" : "s"}:\n`);
  missing.forEach((d) => console.log(`  ${d}`));
}
