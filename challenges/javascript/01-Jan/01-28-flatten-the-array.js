/*
Flatten the Array
Given an array that contains nested arrays, return a new array with all values flattened into a single, one-dimensional array. Retain the original order of the items in the arrays.
*/

function flatten(arr) {

}

const runTests = require('../../../helpers/runTests');
runTests(flatten, [
    `assert.deepEqual(flatten([1, [2, 3], 4]), [1, 2, 3, 4]);`,
    `assert.deepEqual(flatten([5, [4, [3, 2]], 1]), [5, 4, 3, 2, 1]);`,
    `assert.deepEqual(flatten(["A", [[[["B"]]]], "C"]), ["A", "B", "C"]);`,
    `assert.deepEqual(flatten([["L", "M", "N"], ["O", ["P", "Q", ["R", ["S", ["T", "U"]]]]], "V", ["W", ["X", ["Y", ["Z"]]]]]), ["L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);`,
    `assert.deepEqual(flatten([["red", ["blue", ["green", ["yellow", ["purple"]]]]], "orange", ["pink", ["brown"]]]), ["red","blue","green","yellow","purple","orange","pink","brown"]);`,
]);
