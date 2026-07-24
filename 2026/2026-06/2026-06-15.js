/*
Number Sort
Given a string of numbers separated by commas, return an array of the numbers sorted from smallest to largest.
*/

function sortNumbers(str) {
    return str.split(',').map(str => Number(str)).sort((a,b) => a - b);
}

const runTests = require('../../helpers/runTests');
runTests(sortNumbers, [
    `assert.deepEqual(sortNumbers("3,1,2"), [1, 2, 3]);`,
    `assert.deepEqual(sortNumbers("5,3,8,1,9,2"), [1, 2, 3, 5, 8, 9]);`,
    `assert.deepEqual(sortNumbers("12,61,49,80,19,50,77,38"), [12, 19, 38, 49, 50, 61, 77, 80]);`,
    `assert.deepEqual(sortNumbers("0,6,-19,44,-2,7,0"), [-19, -2, 0, 0, 6, 7, 44]);`,
]);
