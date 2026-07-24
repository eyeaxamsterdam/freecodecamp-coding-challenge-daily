/*
Array Sum
Given an array of numbers, return the sum of all the numbers.
*/

function sumArray(numbers) {
    return numbers.reduce((a,b) => a + b);
}

const runTests = require('../../helpers/runTests');
runTests(sumArray, [
    `assert.equal(sumArray([1, 2, 3, 4, 5]), 15);`,
    `assert.equal(sumArray([42]), 42);`,
    `assert.equal(sumArray([5, -2, 7, -3]), 7);`,
    `assert.equal(sumArray([203, 145, -129, 6293, 523, -919, 845, 2434]), 9395);`,
    `assert.equal(sumArray([0, 0]), 0);`,
]);
