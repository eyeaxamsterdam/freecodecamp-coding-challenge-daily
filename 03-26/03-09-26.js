/*
Array Sum
Given an array of numbers, return the sum of all the numbers.
*/

function sumArray(numbers) {
    return numbers.reduce((a,b) => a + b);
}

const runTests = require('../helpers/runTests');
runTests(sumArray, `
    Waiting:1. sumArray([1, 2, 3, 4, 5]) should return 15.
    Waiting:2. sumArray([42]) should return 42.
    Waiting:3. sumArray([5, -2, 7, -3]) should return 7.
    Waiting:4. sumArray([203, 145, -129, 6293, 523, -919, 845, 2434]) should return 9395.
    Waiting:5. sumArray([0, 0]) should return 0.
`);