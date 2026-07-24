/*
Targeted Sum
Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.

The returned array should have the indices in ascending order.
*/

function findTarget(arr, target) {
    const seen = {};
    // better at scale to use seen then do one pass and check if the number you need has been seen.
    // store every number until the second number is found. 
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (complement in seen) return [seen[complement], i];
        seen[arr[i]] = i;
    }
    return 'Target not found';
}


const runTests = require('../../helpers/runTests');
runTests(findTarget, [
    `assert.deepEqual(findTarget([2, 7, 11, 15], 9), [0, 1]);`,
    `assert.deepEqual(findTarget([3, 2, 4, 5], 6), [1, 2]);`,
    `assert.deepEqual(findTarget([1, 3, 5, 6, 7, 8], 15), [4, 5]);`,
    `assert.equal(findTarget([1, 3, 5, 7], 14), "Target not found");`,
]);
