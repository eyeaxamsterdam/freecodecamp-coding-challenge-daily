/*
Letter Distance
Given two strings of equal length, return the sum of the shortest distances between each pair of characters.

The input will only contain lowercase letters
The alphabet is treated as a circle, so the distance between a and z is 1.
*/

function letterDistance(str1, str2) {
    let distance = ((a,b) => {
        const l1 = a.charCodeAt(0) >= b.charCodeAt(0) ? a.charCodeAt(0) : b.charCodeAt(0);
        const l2 = b.charCodeAt(0) < a.charCodeAt(0) ? b.charCodeAt(0) : a.charCodeAt(0);
        let around =  l1 - (l2 + 26);
        const checkAround = around > 0 ? around : around *= -1;
        let between = l1 - l2; 
        const checkBetween = between > 0 ? between : between *= -1;
        const checkLowest = checkAround < checkBetween ? checkAround : checkBetween;
        return checkLowest;
    });
    return str1.split('').reduce((a,b,i) => {
        return a + distance(str1[i],str2[i])
    },0)
}

const runTests = require('../../helpers/runTests');
runTests(letterDistance, [
    `assert.equal(letterDistance("abc", "bcd"), 3);`,
    `assert.equal(letterDistance("abc", "xyz"), 9);`,
    `assert.equal(letterDistance("encrypt", "decrypt"), 10);`,
    `assert.equal(letterDistance("algorithm", "codeblock"), 43);`,
    `assert.equal(letterDistance("lobster", "penguin"), 47);`,
    `assert.equal(letterDistance("alligator", "crocodile"), 55);`,
]);
