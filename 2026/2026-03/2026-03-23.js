/*
No Consecutive Repeats
Given a string, determine if it has no repeating characters.

A string has no repeats if it does not have the same character two or more times in a row.
*/

function hasNoRepeats(str) {
    return str.split('').every((l,i) => l !== str[i+1]);
}

const runTests = require('../../helpers/runTests');
runTests(hasNoRepeats, [
    `assert.isTrue(hasNoRepeats("hi world"));`,
    `assert.isFalse(hasNoRepeats("hello world"));`,
    `assert.isTrue(hasNoRepeats("abcdefghijklmnopqrstuvwxyz"));`,
    `assert.isFalse(hasNoRepeats("freeCodeCamp"));`,
    `assert.isTrue(hasNoRepeats("The quick brown fox jumped over the lazy dog."));`,
    `assert.isFalse(hasNoRepeats("Mississippi"));`,
]);
