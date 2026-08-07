/*
Permutation Count
Given a string, return the number of distinct permutations that can be formed from its characters.

A permutation is any reordering of the characters in the string.
Do not count duplicate permutations.
If the string contains repeated characters, repeated arrangements should only be counted once.
The string will contain only letters (A-Z, a-z).

For example, given "abb", return 3 because there's three unique ways to arrange the letters: "abb", "bab", and "bba".
*/

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

function countPermutations(str) {
    const counts = {};
    for (const ch of str) counts[ch] = (counts[ch] || 0) + 1;
    const denominator = Object.values(counts).reduce((product, c) => product * factorial(c), 1);
    return factorial(str.length) / denominator;
}

const runTests = require('../../../helpers/runTests');
runTests(countPermutations, [
    `assert.equal(countPermutations("abb"), 3);`,
    `assert.equal(countPermutations("abc"), 6);`,
    `assert.equal(countPermutations("racecar"), 630);`,
    `assert.equal(countPermutations("freecodecamp"), 39916800);`,
]);
