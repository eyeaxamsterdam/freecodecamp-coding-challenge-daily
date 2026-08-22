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

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/12-13
*/

function gameOfLife(grid) {
    const rows = grid.length, cols = grid[0].length;
    const countNeighbors = (r, c) => {
        let count = 0;
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) count += grid[nr][nc];
            }
        }
        return count;
    };
    return grid.map((row, r) => row.map((cell, c) => {
        const neighbors = countNeighbors(r, c);
        if (cell === 1) return (neighbors === 2 || neighbors === 3) ? 1 : 0;
        return neighbors === 3 ? 1 : 0;
    }));
}

const runTests = require('../../../helpers/runTests');
runTests(gameOfLife, [
    `assert.deepEqual(gameOfLife([[0, 1, 0], [0, 1, 1], [1, 1, 0]]), [[0, 1, 1], [0, 0, 1], [1, 1, 1]]);`,
    `assert.deepEqual(gameOfLife([[1, 1, 0, 0], [1, 0, 1, 0], [0, 1, 1, 1], [0, 0, 1, 0]]), [[1, 1, 0, 0], [1, 0, 0, 1], [0, 0, 0, 1], [0, 1, 1, 1]]);`,
    `assert.deepEqual(gameOfLife([[1, 0, 0], [0, 1, 0], [0, 0, 1]]), [[0, 0, 0], [0, 1, 0], [0, 0, 0]]);`,
    `assert.deepEqual(gameOfLife([[0, 1, 1, 0], [1, 1, 0, 1], [0, 1, 1, 0], [0, 0, 1, 0]]), [[1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]]);`,
]);
