# freecodecamp-coding-challenge-daily

Files are organized as `challenges/<language>/<MM-Mon>/<MM-DD>-<slug>.<ext>`, e.g. `challenges/javascript/08-Aug/08-11-vowel-balance.js` or `challenges/python/08-Aug/08-11-vowel-balance.py`. JavaScript and Python solutions are kept in separate trees. freeCodeCamp's daily challenge series repeats every 365 days, so files are keyed by month-day rather than by full calendar date, no year anywhere. The MM-DD in the filename always matches the date the challenge was pulled, so it's immediately obvious which file is which without needing to look anything up.

---

## Prerequisites

- **Node.js 18+**: every helper script (`createDayFile.js`, `syncChallenge.js`, `testDay.js`, `checkMissing.js`) is run with `node`, and `helpers/dailyChallenge.js` relies on the global `fetch()` API, which needs Node 18 or newer.
- **Python 3**: only needed if you're solving the Python side of the challenges (`python3 challenges/python/...`). None of the helper tooling itself uses Python.

---

## Getting today's challenge

Assuming you're in the project folder, run:

```sh
node helpers/createDayFile.js
```

This creates a file like `challenges/javascript/07-Jul/07-29-contrast-rating-2.js` with the challenge description, a starter function, and the real test cases from freeCodeCamp already inside, plus a `Link:` line in the header comment pointing back to `https://www.freecodecamp.org/learn/daily-coding-challenge/MM-DD` for that challenge. No copy-pasting needed. You don't even need to go to freecodecamp.org at all. You can check against tests right inside your IDE.

By default this grabs the JavaScript version. Add `python` (or `py`) for Python instead, or `both` for both:

```sh
node helpers/createDayFile.js
node helpers/createDayFile.js python
node helpers/createDayFile.js both
```

To get a specific day instead of today, add a date (`MM-DD`). Date and language can be combined, in either order:

```sh
node helpers/createDayFile.js 07-25
node helpers/createDayFile.js 07-25 python
```

Since the series loops, a date can map to a challenge you've already solved (e.g. one year later, exactly 365 days on, same MM-DD). If that file already exists, you'll be asked whether to overwrite it and start fresh:

```
⚠️  08-11-vowel-balance.js already exists. Overwrite and start from scratch? (y/N):
```

Answer `n` (or just press Enter) to leave it untouched.

---

## Solving and testing

Open the file, write your solution inside the function, then run it directly:

```sh
node challenges/javascript/07-Jul/07-29-contrast-rating-2.js   # or any other day
python3 challenges/python/07-Jul/07-29-contrast-rating-2.py
```

You'll see a `PASS` or `FAIL` for each test, plus a summary at the end.

If you don't want to hunt down the file path yourself, run it by date instead:

```sh
npm run test              # today, JavaScript
node helpers/testDay.js 07-25
node helpers/testDay.js 07-25 python
node helpers/testDay.js both
```

Date and language args work exactly like `createDayFile.js` (see `node helpers/testDay.js --help`).

---

## Refreshing a challenge

If freeCodeCamp updates a challenge's tests or description after you already have the file, run:

```sh
node helpers/syncChallenge.js
```

This re-fetches the tests and the header comment (title, description, Link) and updates the file. Your solution code is left untouched. Defaults to today's challenge. Same date args as above:

```sh
node helpers/syncChallenge.js 07-25 python
```

---

## Checking for missing days

To find any days between the series start (2025-08-11) and today that don't have a JavaScript file yet, run:

```sh
node helpers/checkMissing.js
```

It only checks the `javascript` tree, not `python`.

---

## How it works

The challenges are stored as markdown files in the public [`freeCodeCamp/freeCodeCamp`](https://github.com/freeCodeCamp/freeCodeCamp) repo, under `curriculum/challenges/english/blocks/daily-coding-challenges-javascript/` and `daily-coding-challenges-python/`. The series started **2025-08-11** and repeats every 365 days (ostensibly, I guess we'll see if they have other plans). Day 366 (2026-08-11) maps back to challenge 1, day 367 to challenge 2, and so on. The helper computes which challenge number a given date maps to, then fetches that challenge's markdown.

Note: You can even work ahead by passing a future date.

**Known limitation, leap years**: `getChallengeNumber()` in `helpers/dailyChallenge.js` counts raw elapsed days from 2025-08-11 and wraps every 365 days. It doesn't special-case Feb 29, so once the cycle spans a leap year (the next one is 2028), the mapping will drift a day out of sync with real Aug-11-to-Aug-11 anniversaries. Not urgent yet, but worth fixing before then: make it leap-aware later.

---

## Manual test mode

If you have a file without auto-fetched tests for some reason, you can paste the hint text straight from freecodecamp.org as the second argument. No cleanup needed (you might even capture the beaker icon which translates to "Waiting", it's totally fine to leave that):

```js
const runTests = require('../../../helpers/runTests');
runTests(functionName, `
Waiting:1. functionName(arg1, arg2) should return expectedValue.
Waiting:2. functionName(arg1, arg2) should return expectedValue.
`);
```

## Final Recommendations

Create shell aliases for the scripts you'll run most. Add these to your `~/.bashrc` or `~/.zshrc` (swap in the real path to this repo):

```sh
alias fcc='node /path/to/helpers/createDayFile.js'
alias fccTest='node /path/to/helpers/testDay.js'
alias fccSync='node /path/to/helpers/syncChallenge.js'
```

On fish, drop the `=`: `alias fcc 'node /path/to/helpers/createDayFile.js'`.

Each alias works with or without a date arg: run it bare for today's challenge, or pass a specific `MM-DD`, e.g. `fccTest 01-11`.