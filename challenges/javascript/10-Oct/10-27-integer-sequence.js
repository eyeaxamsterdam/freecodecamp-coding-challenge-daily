/*
Integer Sequence
Given a positive integer, return a string with all of the integers from 1 up to, and including, the given number, in numerical order.

For example, given 5, return "12345".
*/

function sequence(n) {
    return Array.from({length: n}, (_,i) => i+1).join('');
}

const runTests = require('../../../helpers/runTests');
runTests(sequence, [
    `assert.equal(sequence(5), "12345");`,
    `assert.equal(sequence(10), "12345678910");`,
    `assert.strictEqual(sequence(1), "1");`,
    `assert.equal(sequence(27), "123456789101112131415161718192021222324252627");`,
]);
