/*
No Consecutive Repeats
Given a string, determine if it has no repeating characters.

A string has no repeats if it does not have the same character two or more times in a row.
*/

function hasNoRepeats(str) {
    return str.split('').every((l,i) => l !== str[i+1]);
}

const runTests = require('../helpers/runTests');
runTests(hasNoRepeats, `
    Waiting:1. hasNoRepeats("hi world") should return true.
    Waiting:2. hasNoRepeats("hello world") should return false.
    Waiting:3. hasNoRepeats("abcdefghijklmnopqrstuvwxyz") should return true.
    Waiting:4. hasNoRepeats("freeCodeCamp") should return false.
    Waiting:5. hasNoRepeats("The quick brown fox jumped over the lazy dog.") should return true.
    Waiting:6. hasNoRepeats("Mississippi") should return false.
`);