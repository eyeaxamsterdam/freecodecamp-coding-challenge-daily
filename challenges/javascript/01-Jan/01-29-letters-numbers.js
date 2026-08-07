/*
Letters-Numbers
Given a string containing only letters and numbers, return a new string where a hyphen (-) is inserted every time the string switches from a letter to a number, or a number to a letter.

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/01-29
*/

function separateLettersAndNumbers(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i > 0 && /[a-zA-Z]/.test(str[i - 1]) !== /[a-zA-Z]/.test(str[i])) {
            result += '-';
        }
        result += str[i];
    }
    return result;
}

const runTests = require('../../../helpers/runTests');
runTests(separateLettersAndNumbers, [
    `assert.equal(separateLettersAndNumbers("ABC123"), "ABC-123");`,
    `assert.equal(separateLettersAndNumbers("Route66"), "Route-66");`,
    `assert.equal(separateLettersAndNumbers("H3LL0W0RLD"), "H-3-LL-0-W-0-RLD");`,
    `assert.equal(separateLettersAndNumbers("a1b2c3d4"), "a-1-b-2-c-3-d-4");`,
]);
