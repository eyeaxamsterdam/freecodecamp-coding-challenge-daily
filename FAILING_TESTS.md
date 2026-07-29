# Failing Tests

As of 2026-07-29, after migrating to `challenges/<language>/<MM-Mon>/<MM-DD>-<slug>` (JS and Python now in separate trees). This tracks genuine bugs only — unsolved stubs (empty function bodies) aren't listed here since that's just your backlog, not something broken.

## Syntax errors (unfinished code)

- [ ] challenges/javascript/11-Nov/11-09-word-search.js — incomplete arrow function (`(arr) => )`)
- [ ] challenges/javascript/11-Nov/11-15-gcd.js — invalid assignment inside a `&&` expression

## Test failures (logic bugs)

- [ ] challenges/javascript/03-Mar/03-18-largest-number.js — truncates a decimal (returns `"99"` instead of `99.9`)
- [ ] challenges/javascript/06-Jun/06-05-schema-validator-part-5.js — returns `false` for some valid schemas

## Fixed during the challenges/ migration (2026-07-29)

While migrating structure (flat number-based → `MM/MM-DD-slug` → `MM-Mon/MM-DD-slug` → current `language/MM-Mon/MM-DD-slug`), found and fixed 3 files where an earlier bulk sync had fetched the wrong challenge's tests:

- **challenges/javascript/11-Nov/11-06-matrix-builder.js** — this date actually maps to a *different* real challenge ("Weekday Finder"), but the file's title/description/implementation were your own "Matrix Builder" work. Restored the correct Matrix Builder tests. **Open question**: `challenges/javascript/11-Nov/11-05-matrix-builder.js` is a separate, correctly-dated, passing Matrix Builder solve of the exact same challenge — so `11-06` is now a duplicate solve under the wrong date. Decide what to do with it (delete, keep as a second attempt, etc.) — not resolved automatically since it's your work either way.
- **challenges/javascript/06-Jun/06-10-itinerary-arrangements.js** and **challenges/javascript/06-Jun/06-19-rental-cost.js** — both define a helper function before the real solution function; `runTests(...)` was pointing at the helper instead of the actual solution, due to a bug in the sync tooling's function-name detection (fixed separately in `helpers/dailyChallenge.js` — sync now prefers freeCodeCamp's canonical function name over guessing from file structure — but these two files' already-synced content needed a manual one-line fix).

## Recovered from a diverged branch (2026-07-29)

A local commit and an un-pulled GitHub commit had diverged. The GitHub side had real solved work (4 Winter Games challenges: penalty distance, ski jump medal, relative results, judge scoring) that wasn't reflected locally — ported all 4 implementations into the current file structure and verified they pass. It also had a "need to create" backlog list of ~100 dates; re-checked it against the current repo and all but 3 already have files now:

- [ ] 2025-10-03
- [ ] 2025-10-27
- [ ] 2026-06-22
