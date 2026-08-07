/*
Sorted Array?
Given an array of numbers, determine if the numbers are sorted in ascending order, descending order, or neither.

If the given array is:

In ascending order (lowest to highest), return "Ascending".
In descending order (highest to lowest), return "Descending".
Not sorted in ascending or descending order, return "Not sorted".
*/

function isSorted(arr) {
    const isAsc = arr.every((v, i) => i === 0 || arr[i - 1] <= v);
    const isDesc = arr.every((v, i) => i === 0 || arr[i - 1] >= v);
    if (isAsc) return "Ascending";
    if (isDesc) return "Descending";
    return "Not sorted";
}

const runTests = require('../../../helpers/runTests');
runTests(isSorted, [
    `assert.equal(isSorted([1, 2, 3, 4, 5]), "Ascending");`,
    `assert.equal(isSorted([10, 8, 6, 4, 2]), "Descending");`,
    `assert.equal(isSorted([1, 3, 2, 4, 5]), "Not sorted");`,
    `assert.equal(isSorted([3.14, 2.71, 1.61, 0.57]), "Descending");`,
    `assert.equal(isSorted([12.3, 23.4, 34.5, 45.6, 56.7, 67.8, 78.9]), "Ascending");`,
    `assert.equal(isSorted([0.4, 0.5, 0.3]), "Not sorted");`,
]);
