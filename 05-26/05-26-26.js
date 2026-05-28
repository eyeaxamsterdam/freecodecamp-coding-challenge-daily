/*
Sum of Differences
Given an array of numbers, return the sum of the differences between each number and the one that follows it.

For example, given [1, 3, 4], return 3 (2 + 1).
*/

function sumOfDifferences(arr) {
    let sum = 0;
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i] - arr[i - 1];
    }
    return sum;
}

const runTests = require('../helpers/runTests');
runTests(sumOfDifferences, `
    Waiting:1. sumOfDifferences([1, 3, 4]) should return 3.
    Waiting:2. sumOfDifferences([5, -3, 3, 9, 10]) should return 5.
    Waiting:3. sumOfDifferences([9, 6, 15, -20, 33, 14, 25, 16, -7]) should return -16.
    Waiting:4. sumOfDifferences([50, 102, -46, 82, -49, 29, 71, 902, -237, 111, -61, 75]) should return 25.
`);