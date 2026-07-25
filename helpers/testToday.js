#!/usr/bin/env node

const path = require("path");
const { spawnSync } = require("child_process");
const { pad } = require("./cliArgs");

const now = new Date();
const year = now.getFullYear();
const month = pad(now.getMonth() + 1);
const day = pad(now.getDate());

const filePath = path.join(__dirname, "..", String(year), `${year}-${month}`, `${year}-${month}-${day}.js`);

const result = spawnSync("node", [filePath], { stdio: "inherit" });
process.exitCode = result.status ?? 1;
