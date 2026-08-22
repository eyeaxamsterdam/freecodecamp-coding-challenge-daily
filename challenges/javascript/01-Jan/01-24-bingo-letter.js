/*
Bingo! Letter
Given a number, return the bingo letter associated with it (capitalized). Bingo numbers are grouped as follows:

| Letter | Number Range |
| - | - |
| "B" | 1-15 |
| "I" | 16-30 |
| "N" | 31-45 |
| "G" | 46-60 |
| "O" | 61-75 |

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/01-24
*/

function getBingoLetter(n) {
    if (n <= 15) return "B";
    if (n <= 30) return "I";
    if (n <= 45) return "N";
    if (n <= 60) return "G";
    return "O";
}

const runTests = require('../../../helpers/runTests');
runTests(getBingoLetter, [
    `assert.equal(getBingoLetter(75), "O");`,
    `assert.equal(getBingoLetter(54), "G");`,
    `assert.equal(getBingoLetter(25), "I");`,
    `assert.equal(getBingoLetter(38), "N");`,
    `assert.equal(getBingoLetter(11), "B");`,
]);
