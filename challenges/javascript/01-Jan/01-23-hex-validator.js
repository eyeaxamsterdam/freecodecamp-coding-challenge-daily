/*
Hex Validator
Given a string, determine whether it is a valid CSS hex color. A valid CSS hex color must:

Start with a #, and
be followed by either 3 or 6 hexadecimal characters.

Hexadecimal characters are numbers 0 through 9 and letters a through f (case-insensitive).

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/01-23
*/

function isValidHex(str) {
    return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(str);
}

const runTests = require('../../../helpers/runTests');
runTests(isValidHex, [
    `assert.isTrue(isValidHex("#123"));`,
    `assert.isTrue(isValidHex("#123abc"));`,
    `assert.isTrue(isValidHex("#ABCDEF"));`,
    `assert.isTrue(isValidHex("#0a1B2c"));`,
    `assert.isFalse(isValidHex("#12G"));`,
    `assert.isFalse(isValidHex("#1234567"));`,
    `assert.isFalse(isValidHex("#12 3"));`,
    `assert.isFalse(isValidHex("fff"));`,
]);
