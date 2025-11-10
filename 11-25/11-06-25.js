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
buildMatrix(2, 3) //should return [[0, 0, 0], [0, 0, 0]].
buildMatrix(3, 2) //should return [[0, 0], [0, 0], [0, 0]].
buildMatrix(4, 3) //should return [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]].
buildMatrix(9, 1) //should return [[0], [0], [0], [0], [0], [0], [0], [0], [0]].