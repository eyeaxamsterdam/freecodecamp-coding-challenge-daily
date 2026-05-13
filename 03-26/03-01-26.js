/*
Flattened
Given an array, determine if it is flat.

An array is flat if none of its elements are arrays.
*/

function isFlat(arr) {
  return arr.every(item => !Array.isArray(item));
}

const runTests = require('../helpers/runTests');
runTests(isFlat, `
    Failed:1. isFlat([1, 2, 3, 4]) should return true.
    Failed:2. isFlat([1, [2, 3], 4]) should return false.
    Failed:3. isFlat([1, 0, false, true, "a", "b"]) should return true.
    Failed:4. isFlat(["a", [0], "b", true]) should return false.
    Failed:5. isFlat([1, [2, [3, [4, [5]]]], 6]) should return false.
`);