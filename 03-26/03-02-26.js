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

const runTests = require('../helpers/runTests');
runTests(sumLetters, `
    Waiting:1. sumLetters("Hello") should return 52.
    Waiting:2. sumLetters("freeCodeCamp") should return 94.
    Waiting:3. sumLetters("The quick brown fox jumps over the lazy dog.") should return 473.
    Waiting:4. sumLetters("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex nisl, pretium eu varius blandit, facilisis quis eros. Vestibulum ante ipsum primis in faucibus orci.") should return 1681.
    Waiting:5. sumLetters("</404>") should return 0.
`);