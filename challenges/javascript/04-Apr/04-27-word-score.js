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

const runTests = require('../../../helpers/runTests');
runTests(getWordScore, [
    `assert.equal(getWordScore("hi"), 17);`,
    `assert.equal(getWordScore("hello"), 52);`,
    `assert.equal(getWordScore("hippopotamus"), 169);`,
    `assert.equal(getWordScore("freeCodeCamp"), 94);`,
]);
