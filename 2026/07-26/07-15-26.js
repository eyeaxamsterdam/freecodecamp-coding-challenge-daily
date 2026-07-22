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

const runTests = require('../../helpers/runTests');
runTests(chunkArray, `
    Waiting:1. chunkArray([1, 2, 3, 4, 5, 6], 3) should return [[1, 2, 3], [4, 5, 6]].
    Waiting:2. chunkArray([1, "two", 3, "four", 5, "six", 7, "eight"], 2) should return [[1, "two"], [3, "four"], [5, "six"], [7, "eight"]].
    Waiting:3. chunkArray([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]].
    Waiting:4. chunkArray(["a", "b", "c", "d", "e"], 1) should return [["a"], ["b"], ["c"], ["d"], ["e"]].
    Waiting:5. chunkArray([1, 2, 3], 5) should return [[1, 2, 3]].
`);