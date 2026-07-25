# freecodecamp-coding-challenge-daily

Files are organized as `YYYY/YYYY-MM/YYYY-MM-DD.js`.

---

## Getting today's challenge

Run this from anywhere in your cli:

```sh
node ~/path/to/helpers/createDayFiles.js
```

This creates a file like `2026/2026-07/2026-07-24.js` with the challenge description, a starter function, and the real test cases from freeCodeCamp already inside. No copy-pasting needed. You don't even need to go to freecodecamp.org.

To get a specific day instead of today:

```sh
node helpers/createDayFiles.js 2026-07-25
node helpers/createDayFiles.js 07-25 **within the same year**
```

It won't overwrite a file that already exists, so it's safe to run more than once.

---

## Solving and testing

Open the file, write your solution inside the function, then run:

```sh
npm test  # runs today's challenge only
node 2026/2026-07/2026-07-24.js # use on any other day
```

You'll see a `PASS` or `FAIL` for each test, plus a summary at the end.

---

## Refreshing tests

If freeCodeCamp updates a challenge's tests after you already have the file, run:

```sh
node helpers/syncTests.js
```

This re-fetches the tests and updates the file. Your solution is left untouched. Defaults to today's file. Same date args as above:

```sh
node helpers/syncTests.js 2026-07-25
node helpers/syncTests.js 07-25 python
```

Also works if the file has no tests in it yet.

---

## How it works

The challenges are stored as markdown files in the public [`freeCodeCamp/freeCodeCamp`](https://github.com/freeCodeCamp/freeCodeCamp) repo, under `curriculum/challenges/english/blocks/daily-coding-challenges-javascript/` and `daily-coding-challenges-python/`. The current series runs from **2025-08-11** to **2026-08-10**, one challenge per day. The helper fetches whichever file matches the date you give it.

You can even work ahead by passing a future date.

---

## Manual test mode

If you have a file without auto-fetched tests for some reason, you can paste the hint text straight from freecodecamp.org as the second argument. No cleanup needed:

```js
const runTests = require('../../helpers/runTests');
runTests(functionName, `
Waiting:1. functionName(arg1, arg2) should return expectedValue.
Waiting:2. functionName(arg1, arg2) should return expectedValue.
`);
```

## Final Recommendations

Create a snippet for runTests that helps you build it quicker if you ever need.
Create an alias for node /path/to/helpers/createDayFiles.js like 'fcc'
Create an alias for node /path/to/helpers/syncTests.js like 'fccsync'
