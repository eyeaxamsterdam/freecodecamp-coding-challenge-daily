# freecodecamp-coding-challenge-daily

Files are organized as `challenges/<language>/<MM-Mon>/<MM-DD>-<slug>.<ext>`, e.g. `challenges/javascript/08-Aug/08-11-vowel-balance.js` or `challenges/python/08-Aug/08-11-vowel-balance.py`. JavaScript and Python solutions are kept in separate trees. freeCodeCamp's daily challenge series repeats every 365 days, so files are keyed by month-day rather than by full calendar date — no year anywhere. The MM-DD in the filename always matches the date the challenge was pulled, so it's immediately obvious which file is which without needing to look anything up.

---

## Getting today's challenge

Run this from anywhere in your cli:

```sh
node ~/path/to/helpers/createDayFiles.js
```

This creates a file like `challenges/javascript/07-Jul/07-29-contrast-rating-2.js` with the challenge description, a starter function, and the real test cases from freeCodeCamp already inside. No copy-pasting needed. You don't even need to go to freecodecamp.org.

To get a specific day instead of today:

```sh
node helpers/createDayFiles.js 2026-07-25
node helpers/createDayFiles.js 07-25 # within the same year
```

Since the series loops, a date can map to a challenge you've already solved (e.g. one year later, exactly 365 days on — same MM-DD). If that file already exists, you'll be asked whether to overwrite it and start fresh:

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

---

## Refreshing tests

If freeCodeCamp updates a challenge's tests after you already have the file, run:

```sh
node helpers/syncTests.js
```

This re-fetches the tests and updates the file. Your solution is left untouched. Defaults to today's challenge. Same date args as above:

```sh
node helpers/syncTests.js 2026-07-25
node helpers/syncTests.js 07-25 python
```

---

## How it works

The challenges are stored as markdown files in the public [`freeCodeCamp/freeCodeCamp`](https://github.com/freeCodeCamp/freeCodeCamp) repo, under `curriculum/challenges/english/blocks/daily-coding-challenges-javascript/` and `daily-coding-challenges-python/`. The series started **2025-08-11** and repeats every 365 days — day 366 (2026-08-11) maps back to challenge 1, day 367 to challenge 2, and so on, indefinitely. The helper computes which challenge number a given date maps to, then fetches that challenge's markdown.

You can even work ahead by passing a future date.

**Known limitation — leap years**: `getChallengeNumber()` in `helpers/dailyChallenge.js` counts raw elapsed days from 2025-08-11 and wraps every 365 days. It doesn't special-case Feb 29, so once the cycle spans a leap year (the next one is 2028), the mapping will drift a day out of sync with real Aug-11-to-Aug-11 anniversaries. Not urgent yet, but worth fixing before then — make it leap-aware later.

---

## Manual test mode

If you have a file without auto-fetched tests for some reason, you can paste the hint text straight from freecodecamp.org as the second argument. No cleanup needed:

```js
const runTests = require('../../../helpers/runTests');
runTests(functionName, `
functionName(arg1, arg2) should return expectedValue.
functionName(arg1, arg2) should return expectedValue.
`);
```

## Final Recommendations

Create a snippet for runTests that helps you build it quicker if you ever need.
Create an alias for node /path/to/helpers/createDayFiles.js like 'fcc'
Create an alias for node /path/to/helpers/syncTests.js like 'fccsync'
