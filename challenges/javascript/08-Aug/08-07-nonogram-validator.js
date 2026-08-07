/*
Nonogram Validator
Given an array of clue numbers and an array of cells, determine whether the cells satisfy the nonogram clue.

The clue is an array of numbers representing the lengths of consecutive filled cells, in order. For example, a clue of [3, 2] means there should be 3 consecutive filled cells followed by 2 consecutive filled cells, separated by at least one empty cell.
The row is an array of 1s (filled) and 0s (empty).
*/

const areArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((n, i) => n === arr2[i]);
};

const isValidNonogram = (clue, cells) => {
    const filledCells = cells.join('').split('0').filter(Boolean).map(n => n.length);
    return areArraysEqual(clue,filledCells); 
}

const runTests = require('../../../helpers/runTests');
runTests(isValidNonogram, [
    `assert.isTrue(isValidNonogram([3, 2], [1, 1, 1, 0, 1, 1]));`,
    `assert.isFalse(isValidNonogram([3, 2], [0, 1, 1, 1, 1, 1]));`,
    `assert.isFalse(isValidNonogram([1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1]));`,
    `assert.isTrue(isValidNonogram([1, 1, 1, 1], [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0]));`,
    `assert.isTrue(isValidNonogram([3, 2, 3], [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0]));`,
    `assert.isFalse(isValidNonogram([3, 2, 3], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0]));`,
]);
