/*
Checkerboard
Given an array with two numbers, the first being the number of rows and the second being the number of columns, return a matrix (an array of arrays) filled with "X" and "O" characters of the given size.

The characters should alternate like a checkerboard.
The top-left cell must always be "X".

For example, given [3, 3], return:

`json
[
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"]
]
`
*/

function createBoard(dimensions) {

}

const runTests = require('../../helpers/runTests');
runTests(createBoard, [
    `assert.deepEqual(createBoard([3, 3]), [["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]]);`,
    `assert.deepEqual(createBoard([6, 1]), [["X"], ["O"], ["X"], ["O"], ["X"], ["O"]]);`,
    `assert.deepEqual(createBoard([2, 10]), [["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X", "O", "X", "O", "X"]]);`,
    `assert.deepEqual(createBoard([5, 4]), [["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"]]);`,
]);
