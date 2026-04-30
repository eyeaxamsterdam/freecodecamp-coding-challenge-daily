/*
Word Score
Given a word, return its score using a standard letter-value table:

Letter	Value
A	1
B	2
...	...
Z	26
Upper and lowercase letters have the same value.
*/

function getWordScore(word) {
    return word.split('').reduce((sum,l) => sum + l.toLowerCase().charCodeAt(0) - 96, 0);
}

const runTests = require('../helpers/runTests');

runTests(getWordScore, `
    Waiting:1. getWordScore("hi") should return 17.
    Waiting:2. getWordScore("hello") should return 52.
    Waiting:3. getWordScore("hippopotamus") should return 169.
    Waiting:4. getWordScore("freeCodeCamp") should return 94.
`);

