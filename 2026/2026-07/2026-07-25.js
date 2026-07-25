/*
Cell Signal
Given a grid containing three cell tower readings, determine the location of the phone.

Each cell in the grid is either 0 (no tower) or a positive integer representing the number of cells to the phone, measured in a straight line: horizontal, vertical, or diagonal.
Return the [row, col] of the cell that is the correct number of cells from all three towers.
There is always exactly one solution.
*/

function findSignal(grid) {

}

const runTests = require('../../helpers/runTests');
runTests(findSignal, [
    `assert.deepEqual(findSignal([[0, 0, 1], [0, 1, 0], [0, 0, 1]]), [1, 2]);`,
    `assert.deepEqual(findSignal([[0, 2, 0], [1, 0, 0], [0, 0, 1]]), [2, 1]);`,
    `assert.deepEqual(findSignal([[0, 0, 2, 0], [0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 1]]), [2, 2]);`,
    `assert.deepEqual(findSignal([[0, 3, 0, 0, 0], [0, 0, 0, 0, 2], [0, 0, 0, 0, 0], [4, 0, 0, 0, 0], [0, 0, 0, 0, 0]]), [3, 4]);`,
    `assert.deepEqual(findSignal([[3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 2]]), [3, 3]);`,
]);
