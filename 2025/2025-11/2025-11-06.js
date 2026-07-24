/*
Matrix Builder
Given two integers (a number of rows and a number of columns), return a matrix (an array of arrays) filled with zeros (0) of the given size.

For example, given 2 and 3, return:
*/

function buildMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let row = []
        for (let i = 0; i < cols; i++) {
            row.push(0);
        }
        matrix.push(row);
    }
    console.log(matrix);
    return matrix;
}

//Tests

const runTests = require('../../helpers/runTests');
runTests(buildMatrix, [
    `assert.equal(getWeekday("2025-11-06"), "Thursday");`,
    `assert.equal(getWeekday("1999-12-31"), "Friday");`,
    `assert.equal(getWeekday("1111-11-11"), "Saturday");`,
    `assert.equal(getWeekday("2112-12-21"), "Wednesday");`,
    `assert.equal(getWeekday("2345-10-01"), "Monday");`,
]);
