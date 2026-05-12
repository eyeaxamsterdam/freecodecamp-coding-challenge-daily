/*
Transposed Matrix
Given a matrix (an array of arrays), return the transposed version of it.

To transpose the matrix, swap the rows and columns. E.g: a value at index [0, 1] should move to index [1, 0].

For example, given:

[
  [1, 2, 3],
  [4, 5, 6]
]
Return:

[
  [1, 4],
  [2, 5],
  [3, 6]
]
*/

function transpose(matrix) {
    const rowLength = matrix[0].length;
    const newArr = [];
    for (let i = 0; i < rowLength; i++) {
        newArr.push([]);
    }
    for (let j = 0; j < matrix.length; j++) {
        matrix[j].forEach((num,index) => {
            newArr[index][j] = num;
        })
    }
    console.log(newArr);
    return newArr;
}

const runTests = require('../helpers/runTests');
runTests(transpose, `
    Waiting:1. transpose([[1, 2, 3], [4, 5, 6]]) should return [[1, 4], [2, 5], [3, 6]].
    Waiting:2. transpose([[1, 2], [3, 4], [5, 6]]) should return [[1, 3, 5], [2, 4, 6]].
    Waiting:3. transpose([[1, 2], [3, 4], [5, 6], [7, 8]]) should return [[1, 3, 5, 7], [2, 4, 6, 8]].
    Waiting:4. transpose([["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"], ["j", "k", "l"]]) should return [["a", "d", "g", "j"], ["b", "e", "h", "k"], ["c", "f", "i", "l"]].
    Waiting:5. transpose([[true, false, true, false], [false, true, false, true], [true, true, false, false], [false, false, true, true], [true, false, false, true]]) should return [[true, false, true, false, true], [false, true, true, false, false], [true, false, false, true, false], [false, true, false, true, true]].
`);