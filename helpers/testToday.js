#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const { pad, monthFolderName } = require("./cliArgs");

const now = new Date();
const month = now.getMonth() + 1;
const day = now.getDate();
const monthPadded = pad(month);
const dayPadded = pad(day);

const monthDir = path.join(__dirname, "..", "challenges", "javascript", monthFolderName(month));
const prefix = `${monthPadded}-${dayPadded}-`;
const match = fs.existsSync(monthDir)
  ? fs.readdirSync(monthDir).find((f) => f.startsWith(prefix) && f.endsWith(".js"))
  : null;

if (!match) {
  console.error(`No file found for today (${monthPadded}-${dayPadded}) — run \`node helpers/createDayFiles.js\` first.`);
  process.exit(1);
}

const filePath = path.join(monthDir, match);
const result = spawnSync("node", [filePath], { stdio: "inherit" });
process.exitCode = result.status ?? 1;
