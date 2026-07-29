/*
1337 Speak
Given a lowercase string, return it translated into leet speak by replacing the letters below with their leet substitutions:

| Letter | Leet |
| - | - |
| a | 4 |
| e | 3 |
| g | 9 |
| i | 1 |
| l | 1 |
| o | 0 |
| s | 5 |
| t | 7 |

Characters with no substitution are left unchanged.
*/

function makeLeet(str) {
    const leetMap = { a: "4", e: "3", g: "9", i: "1", l: "1", o: "0", s: "5", t: "7" };
    return str.split("").map((c) => leetMap[c] ?? c).join("");
}

const runTests = require('../../../helpers/runTests');
runTests(makeLeet, [
    `assert.equal(makeLeet("cool"), "c001");`,
    `assert.equal(makeLeet("leet"), "1337");`,
    `assert.equal(makeLeet("hacker"), "h4ck3r");`,
    `assert.equal(makeLeet("satellite"), "547311173");`,
    `assert.equal(makeLeet("abcdefghijklmnopqrstuvwxyz"), "4bcd3f9h1jk1mn0pqr57uvwxyz");`,
]);
