/*
Magic Square Solver
Given a 3x3 grid with one missing number (represented as 0), return the missing number that completes the magic square, or "impossible" if no valid number exists.

A magic square is a grid where every row, column, and diagonal adds up to the same number.
*/

function solveMagicSquare(grid) {
    let rowZero;
    let colZero;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 0) {
                rowZero = row;
                colZero = col;
            }
        }
    }

    let missingRow = grid[rowZero].reduce((a,b) => a+b,0);
    let missingCol = grid.reduce((a,b) => a + b[colZero],0);
    let total = grid.find(row => !row.includes(0)).reduce((a,b) => a+b,0);
    return missingRow === missingCol ? total - missingRow : 'impossible'
}

const runTests = require('../../../helpers/runTests');
runTests(solveMagicSquare, [
    `assert.equal(solveMagicSquare([[2, 7, 6], [9, 0, 1], [4, 3, 8]]), 5);`,
    `assert.equal(solveMagicSquare([[0, 14, 12], [18, 10, 2], [8, 6, 16]]), 4);`,
    `assert.equal(solveMagicSquare([[12, 17, 16], [19, 0, 10], [14, 13, 18]]), "impossible");`,
    `assert.equal(solveMagicSquare([[15, 35, 31], [43, 27, 11], [23, 19, 0]]), 39);`,
    `assert.equal(solveMagicSquare([[26, 41, 14], [47, 35, 0], [32, 29, 44]]), "impossible");`,
]);
