# freecodecamp-coding-challenge-daily

Dates are in `YYYY-MM-DD` format

---

## Pulling the daily challenge into your IDE

`helpers/createDayFiles.js` pulls freeCodeCamp's daily coding challenge straight into a ready-to-solve file in this repo — no visiting freecodecamp.org, no copy-pasting the prompt or tests by hand.

### How it works

freeCodeCamp's daily challenges live as plain markdown files in their open-source curriculum repo ([`freeCodeCamp/freeCodeCamp`](https://github.com/freeCodeCamp/freeCodeCamp)), under `curriculum/challenges/english/blocks/daily-coding-challenges-javascript/`. Each file is one challenge (title, description, starter function, and the real `assert.*` test code), and a block-structure JSON lists all 365 challenges in order. The series started **2025-08-11**, one new challenge per day, running through **2026-08-10** — so a given date maps directly to a challenge number (`day 1 = 2025-08-11`, `day 2 = 2025-08-12`, etc.), and `helpers/dailyChallenge.js` fetches that challenge's markdown straight from GitHub over `https`, no auth or scraping required.

It then parses out:
- the title and description (converted from markdown into the plain-text comment block format this repo already uses),
- the starter function signature, with the body emptied out (freeCodeCamp's placeholder `return` is never right anyway),
- the real `assert.*` test statements — not a re-typed guess at "should return X", the actual assertions freeCodeCamp uses to grade the challenge.

If the requested date falls outside the 365-day series, or the fetch fails for any reason (offline, GitHub down, etc.), it just creates a blank file instead — it never leaves you without a file to work in.

### How to use it

From the repo root:

```sh
node helpers/createDayFiles.js
```

Creates today's file, e.g. `2026/2026-07/2026-07-24.js`, already populated with the challenge.

Pass a date to fetch a specific day instead of today:

```sh
node helpers/createDayFiles.js 2026-07-25
node helpers/createDayFiles.js 07-25   # current year assumed
```

It never overwrites a file that already exists, so it's safe to run repeatedly.

Once the file exists, fill in the function body and run it directly with Node to check your work:

```sh
node 2026/2026-07/2026-07-24.js
```

This runs `helpers/runTests.js` against your implementation and prints a `PASS`/`FAIL` per test plus a summary line, with a non-zero exit code if anything fails.

---

## April 2026 Changes

### `runTests` Helper Function

`runTests` still supports pasting hint text by hand — useful for any challenge that didn't come from the auto-fetch above (out-of-range dates, a different source, etc.). Import it with:

```js
const runTests = require('../helpers/runTests');
```

The function takes two arguments: the function to test, and a string of tests pasted straight from freecodecamp.org:

```js
runTests(functionName, `tests`);
```

You can paste straight from freeCodeCamp without worrying about formatting at all. Example test block (the hourglass icons in freecodecamp.org turn into the word "Waiting"):

```
Waiting:1. getAllergenFriendlyMeals([["pasta", ["wheat", "milk"]], ["salad", ["nuts"]]], ["milk"]) should return ["salad"].
Waiting:2. getAllergenFriendlyMeals([["steak", ["soy"]], ["fried rice", []], ["fish tacos", ["fish", "wheat"]], ["chicken parmesan", ["wheat", "milk"]]], ["soy", "fish"]) should return ["fried rice", "chicken parmesan"].
Waiting:3. getAllergenFriendlyMeals([["oatmeal", ["nuts"]], ["pancakes", ["wheat", "milk"]], ["granola", []], ["yogurt", ["milk"]], ["eggs", ["eggs", "milk"]], ["toast", ["wheat"]]], ["eggs", "milk"]) should return ["oatmeal", "granola", "toast"].
Waiting:4. getAllergenFriendlyMeals([["oatmeal", ["nuts"]], ["pancakes", ["wheat", "milk"]], ["granola", []], ["yogurt", ["milk"]], ["eggs", ["eggs", "milk"]], ["toast", ["wheat"]]], ["wheat", "nuts"]) should return ["granola", "yogurt", "eggs"].
```

Just highlight the whole block, copy it, and paste it as the second argument. The final usage looks like this:

```js
const runTests = require('../helpers/runTests');
runTests(getAllergenFriendlyMeals, `
    Waiting:1. getAllergenFriendlyMeals([["pasta", ["wheat", "milk"]], ["salad", ["nuts"]]], ["milk"]) should return ["salad"].
    Waiting:2. getAllergenFriendlyMeals([["steak", ["soy"]], ["fried rice", []], ["fish tacos", ["fish", "wheat"]], ["chicken parmesan", ["wheat", "milk"]]], ["soy", "fish"]) should return ["fried rice", "chicken parmesan"].
    Waiting:3. getAllergenFriendlyMeals([["oatmeal", ["nuts"]], ["pancakes", ["wheat", "milk"]], ["granola", []], ["yogurt", ["milk"]], ["eggs", ["eggs", "milk"]], ["toast", ["wheat"]]], ["eggs", "milk"]) should return ["oatmeal", "granola", "toast"].
    Waiting:4. getAllergenFriendlyMeals([["oatmeal", ["nuts"]], ["pancakes", ["wheat", "milk"]], ["granola", []], ["yogurt", ["milk"]], ["eggs", ["eggs", "milk"]], ["toast", ["wheat"]]], ["wheat", "nuts"]) should return ["granola", "yogurt", "eggs"].
`);
```
