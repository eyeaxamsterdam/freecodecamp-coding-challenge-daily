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
*/

function getBingoLetter(n) {

}

const runTests = require('../../../helpers/runTests');
runTests(getBingoLetter, [
    `assert.equal(getBingoLetter(75), "O");`,
    `assert.equal(getBingoLetter(54), "G");`,
    `assert.equal(getBingoLetter(25), "I");`,
    `assert.equal(getBingoLetter(38), "N");`,
    `assert.equal(getBingoLetter(11), "B");`,
]);
