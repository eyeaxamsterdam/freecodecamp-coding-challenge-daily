/*
Symmetric Difference
Given two arrays, return a new array containing the symmetric difference of them.

The symmetric difference between two sets is the set of values that appear in either set, but not both.
Return the values in the order they first appear in the input arrays.
*/

function difference(arr1, arr2) {

}

const runTests = require('../../helpers/runTests');
runTests(difference, [
    `assert.deepEqual(difference([1, 2, 3], [3, 4, 5]), [1, 2, 4, 5]);`,
    `assert.deepEqual(difference(["a", "b"], ["c", "b"]), ["a", "c"]);`,
    `assert.deepEqual(difference([1, "a", 2], [2, "b", "a"]), [1, "b"]);`,
    `assert.deepEqual(difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]), [2, 4, 6, 8]);`,
]);
