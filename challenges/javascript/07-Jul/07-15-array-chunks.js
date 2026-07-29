/*
Array Chunks
Given an array and a chunk size, return the array split into sub-arrays of that size.

The last chunk may be smaller if the array doesn't divide evenly.
*/

function chunkArray(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}

const runTests = require('../../../helpers/runTests');
runTests(chunkArray, [
    `assert.deepEqual(chunkArray([1, 2, 3, 4, 5, 6], 3), [[1, 2, 3], [4, 5, 6]]);`,
    `assert.deepEqual(chunkArray([1, "two", 3, "four", 5, "six", 7, "eight"], 2), [[1, "two"], [3, "four"], [5, "six"], [7, "eight"]]);`,
    `assert.deepEqual(chunkArray([1, 2, 3, 4, 5], 3), [[1, 2, 3], [4, 5]]);`,
    `assert.deepEqual(chunkArray(["a", "b", "c", "d", "e"], 1), [["a"], ["b"], ["c"], ["d"], ["e"]]);`,
    `assert.deepEqual(chunkArray([1, 2, 3], 5), [[1, 2, 3]]);`,
]);
