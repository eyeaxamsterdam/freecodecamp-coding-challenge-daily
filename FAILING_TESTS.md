# Failing Tests

As of 2026-07-25, after the repo-wide sync to real freeCodeCamp assert code (all 248 JS files synced; 5 needed real fixes for arrow-function/misplaced-import detection and an escaping bug — see below). Some entries below are new since the last check, and some old ones cleared — that's expected: syncing pulled in more accurate test data than before, so the actual pass/fail picture shifted for a handful of files. Run `node <file>` to see details for any of these.

## Syntax errors (unfinished code)

- [ ] 2025/2025-11/2025-11-09.js — incomplete arrow function (`(arr) => )`)
- [ ] 2025/2025-11/2025-11-15.js — invalid assignment inside a `&&` expression

## Test failures (logic bugs)

- [ ] 2025/2025-08/2025-08-28.js ** fixed
- [ ] 2025/2025-08/2025-08-31.js — flaky, verified: implementation uses Math.random(), failed 1 of 8 runs
- [ ] 2025/2025-09/2025-09-05.js
- [ ] 2025/2025-11/2025-11-06.js
- [ ] 2025/2025-11/2025-11-07.js
- [ ] 2025/2025-11/2025-11-25.js
- [ ] 2025/2025-11/2025-11-28.js
- [ ] 2026/2026-03/2026-03-18.js
- [ ] 2026/2026-06/2026-06-05.js
- [ ] 2026/2026-06/2026-06-10.js
- [ ] 2026/2026-06/2026-06-19.js

Note: 2026-07-24.js also currently fails, but that's expected — it's a freshly-generated stub with an empty function body, not yet solved.
