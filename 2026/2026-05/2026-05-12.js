/*
Character Frequency
Given a string, return an object (JavaScript) or dictionary (Python) mapping each character to the number of times it appears.
*/

function getFrequency(str) {
    let response = {};
    str.split('').forEach(letter => {
        letter in response ? response[letter]++ : response[letter] = 1;
    })
    return response;
}

const runTests = require('../../helpers/runTests');
runTests(getFrequency, [
    `assert.deepEqual(getFrequency("test"), {t: 2, e: 1, s: 1});`,
    `assert.deepEqual(getFrequency("mississippi"), {m: 1, i: 4, s: 4, p: 2});`,
    `assert.deepEqual(getFrequency("hello world"), {h: 1, e: 1, l: 3, o: 2, " ": 1, w: 1, r: 1, d: 1});`,
    `assert.deepEqual(getFrequency("She sells seashells by the seashore."), {S: 1, h: 4, e: 7, " ": 5, s: 7, l: 4, a: 2, b: 1, y: 1, t: 1, o: 1, r: 1, ".": 1});`,
    `assert.deepEqual(getFrequency("The quick brown fox jumps over the lazy dog."), {T: 1, h: 2, e: 3, " ": 8, q: 1, u: 2, i: 1, c: 1, k: 1, b: 1, r: 2, o: 4, w: 1, n: 1, f: 1, x: 1, j: 1, m: 1, p: 1, s: 1, v: 1, t: 1, l: 1, a: 1, z: 1, y: 1, d: 1, g: 1, ".": 1});`,
]);
