/*
Letter Distance
Given two strings of equal length, return the sum of the shortest distances between each pair of characters.

The input will only contain lowercase letters
The alphabet is treated as a circle, so the distance between a and z is 1.
*/

function letterDistance(str1, str2) {
    const distance = (a, b) => {
        const diff = Math.abs(a.charCodeAt(0) - b.charCodeAt(0));
        return Math.min(diff, 26 - diff);
    };
    return [...str1].reduce((a,b,i) => {
        return a + distance(b,str2[i])
    },0)
}

const runTests = require('../../../helpers/runTests');
runTests(letterDistance, [
    `assert.equal(letterDistance("abc", "bcd"), 3);`,
    `assert.equal(letterDistance("abc", "xyz"), 9);`,
    `assert.equal(letterDistance("encrypt", "decrypt"), 10);`,
    `assert.equal(letterDistance("algorithm", "codeblock"), 43);`,
    `assert.equal(letterDistance("lobster", "penguin"), 47);`,
    `assert.equal(letterDistance("alligator", "crocodile"), 55);`,
]);
