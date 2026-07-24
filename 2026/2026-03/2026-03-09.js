/*
Array Sum
Given an array of numbers, return the sum of all the numbers.
*/

function sumArray(numbers) {
    return numbers.reduce((a,b) => a + b);
}

const runTests = require('../../helpers/runTests');
runTests(sumArray, `
    sumArray([1, 2, 3, 4, 5]) should return 15.
    sumArray([42]) should return 42.
    sumArray([5, -2, 7, -3]) should return 7.
    sumArray([203, 145, -129, 6293, 523, -919, 845, 2434]) should return 9395.
    sumArray([0, 0]) should return 0.
`);