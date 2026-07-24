/*
No Consecutive Repeats
Given a string, determine if it has no repeating characters.

A string has no repeats if it does not have the same character two or more times in a row.
*/

function hasNoRepeats(str) {
    return str.split('').every((l,i) => l !== str[i+1]);
}

const runTests = require('../../helpers/runTests');
runTests(hasNoRepeats, `
    hasNoRepeats("hi world") should return true.
    hasNoRepeats("hello world") should return false.
    hasNoRepeats("abcdefghijklmnopqrstuvwxyz") should return true.
    hasNoRepeats("freeCodeCamp") should return false.
    hasNoRepeats("The quick brown fox jumped over the lazy dog.") should return true.
    hasNoRepeats("Mississippi") should return false.
`);