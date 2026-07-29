/*
Sum the Letters
Given a string, return the sum of its letters.

Letters are A-Z in uppercase or lowercase
Letter values are: "A" = 1, "B" = 2, ..., "Z" = 26
Uppercase and lowercase letters have the same value.
Ignore all non-letter characters.
*/

function sumLetters(str) {
    let strArrMatch = str.match(/[A-Za-z]/g);
    return !strArrMatch ? 0 : strArrMatch.reduce((a,b) => a + (b.toUpperCase().charCodeAt(0)-64), 0)  
}

const runTests = require('../../../helpers/runTests');
runTests(sumLetters, [
    `assert.equal(sumLetters("Hello"), 52);`,
    `assert.equal(sumLetters("freeCodeCamp"), 94);`,
    `assert.equal(sumLetters("The quick brown fox jumps over the lazy dog."), 473);`,
    `assert.equal(sumLetters("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex nisl, pretium eu varius blandit, facilisis quis eros. Vestibulum ante ipsum primis in faucibus orci."), 1681);`,
    `assert.equal(sumLetters("</404>"), 0);`,
]);
