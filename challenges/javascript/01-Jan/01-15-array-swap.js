/*
Array Swap
Given an array with two values, return an array with the values swapped.

For example, given ["A", "B"] return ["B", "A"].
*/

function arraySwap(arr) {
    return [arr[1], arr[0]];
}

const runTests = require('../../../helpers/runTests');
runTests(arraySwap, [
    `assert.deepEqual(arraySwap(["A", "B"]), ["B", "A"]);`,
    `assert.deepEqual(arraySwap([25, 20]), [20, 25]);`,
    `assert.deepEqual(arraySwap([true, false]), [false, true]);`,
    `assert.deepEqual(arraySwap(["1", 1]), [1, "1"]);`,
]);
