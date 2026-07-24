/*
Flattened
Given an array, determine if it is flat.

An array is flat if none of its elements are arrays.
*/

function isFlat(arr) {
  return arr.every(item => !Array.isArray(item));
}

const runTests = require('../../helpers/runTests');
runTests(isFlat, `
    isFlat([1, 2, 3, 4]) should return true.
    isFlat([1, [2, 3], 4]) should return false.
    isFlat([1, 0, false, true, "a", "b"]) should return true.
    isFlat(["a", [0], "b", true]) should return false.
    isFlat([1, [2, [3, [4, [5]]]], 6]) should return false.
`);