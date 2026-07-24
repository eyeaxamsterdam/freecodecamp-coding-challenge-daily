/*
Sorted Array Swap
Given an array of integers, return a new array using the following rules:

Sort the integers in ascending order
Then swap all values whose index is a multiple of 3 with the value before it.
*/

function sortAndSwap(arr) {
    let arrangedArr = arr.sort((a,b) => a-b, 0);
    let sortedArray = arrangedArr.map((number, index) => {
        let response = (index % 3 === 0 && index !== 0) ? arrangedArr[index - 1] : (index + 1) % 3 === 0 && (index < arrangedArr.length - 1) ?  arrangedArr[index + 1] : number
        return response
    });
    return sortedArray;
}

const runTests = require('../../helpers/runTests');
runTests(sortAndSwap, [
    `assert.deepEqual(sortAndSwap([3, 1, 2, 4, 6, 5]), [1, 2, 4, 3, 5, 6]);`,
    `assert.deepEqual(sortAndSwap([9, 7, 5, 3, 1, 2, 4, 6, 8]), [1, 2, 4, 3, 5, 7, 6, 8, 9]);`,
    `assert.deepEqual(sortAndSwap([1, 2, 3, 4, 5, 6, 7, 8, 9]), [1, 2, 4, 3, 5, 7, 6, 8, 9]);`,
    `assert.deepEqual(sortAndSwap([12, 5, 8, 1, 3, 10, 2, 7, 6, 4, 9, 11]), [1, 2, 4, 3, 5, 7, 6, 8, 10, 9, 11, 12]);`,
    `assert.deepEqual(sortAndSwap([100, -50, 0, 75, -25, 50, -75, 25]), [-75, -50, 0, -25, 25, 75, 50, 100]);`,
    `assert.deepEqual(sortAndSwap([5, 9, 13, 77, 88, 313, -10, -65, 0, 8, 99, 101, -4, 2]), [-65, -10, 0, -4, 2, 8, 5, 9, 77, 13, 88, 101, 99, 313]);`,
]);
