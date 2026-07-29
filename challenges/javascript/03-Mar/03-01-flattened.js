/*
Flattened
Given an array, determine if it is flat.

An array is flat if none of its elements are arrays.
*/

function isFlat(arr) {
  return arr.every(item => !Array.isArray(item));
}

const runTests = require('../../../helpers/runTests');
runTests(isFlat, [
    `assert.isTrue(isFlat([1, 2, 3, 4]));`,
    `assert.isFalse(isFlat([1, [2, 3], 4]));`,
    `assert.isTrue(isFlat([1, 0, false, true, "a", "b"]));`,
    `assert.isFalse(isFlat(["a", [0], "b", true]));`,
    `assert.isFalse(isFlat([1, [2, [3, [4, [5]]]], 6]));`,
]);
