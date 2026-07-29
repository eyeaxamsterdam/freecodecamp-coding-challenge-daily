/*
Game of Life
Given a matrix (array of arrays) representing the current state in Conway's Game of Life, return the next state of the matrix using these rules:

Each cell is either 1 (alive) or 0 (dead).
A cell's neighbors are the up to eight surrounding cells (vertically, horizontally, and diagonally).
Cells on the edges have fewer than eight neighbors.

Rules for updating each cell:

Any live cell with fewer than two live neighbors dies (underpopulation).
Any live cell with two or three live neighbors lives on.
Any live cell with more than three live neighbors dies (overpopulation).
Any dead cell with exactly three live neighbors becomes alive (reproduction).

For example, given:

`json
[
  [0, 1, 0],
  [0, 1, 1],
  [1, 1, 0]
]
`

return:

`json
[
  [0, 1, 1],
  [0, 0, 1],
  [1, 1, 1]
]
`

Each cell updates according to the number of live neighbors. For instance, [0][0] stays dead (2 live neighbors), [0][1] stays alive (2 live neighbors), [0][2] dies (3 live neighbors), and so on.
*/

function gameOfLife(grid) {

}

const runTests = require('../../../helpers/runTests');
runTests(gameOfLife, [
    `assert.deepEqual(gameOfLife([[0, 1, 0], [0, 1, 1], [1, 1, 0]]), [[0, 1, 1], [0, 0, 1], [1, 1, 1]]);`,
    `assert.deepEqual(gameOfLife([[1, 1, 0, 0], [1, 0, 1, 0], [0, 1, 1, 1], [0, 0, 1, 0]]), [[1, 1, 0, 0], [1, 0, 0, 1], [0, 0, 0, 1], [0, 1, 1, 1]]);`,
    `assert.deepEqual(gameOfLife([[1, 0, 0], [0, 1, 0], [0, 0, 1]]), [[0, 0, 0], [0, 1, 0], [0, 0, 0]]);`,
    `assert.deepEqual(gameOfLife([[0, 1, 1, 0], [1, 1, 0, 1], [0, 1, 1, 0], [0, 0, 1, 0]]), [[1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]]);`,
]);
