/*
Inverted Matrix
Given a matrix (an array of arrays) filled with two distinct values, return a new matrix where all occurrences of one value are swapped with the other.

For example, given:

[
  ["a", "b"],
  ["a", "a"]
]
Return:

[
  ["b", "a"],
  ["b", "b"]
]
*/

function invertMatrix(matrix) {
    const flat = matrix.flat();
    const [a, b] = [flat[0], flat.find(item => item !== flat[0])];
    return matrix.map(arr => arr.map(char => char === a ? b : a));
}

const runTests = require('../../helpers/runTests');
runTests(invertMatrix, [
    `assert.deepEqual(invertMatrix([["a", "b"], ["a", "a"]]), [["b", "a"], ["b", "b"]]);`,
    `assert.deepEqual(invertMatrix([[1, 0, 1], [1, 1, 1], [0, 1, 0]]), [[0, 1, 0], [0, 0, 0], [1, 0, 1]]);`,
    `assert.deepEqual(invertMatrix([["apple", "banana", "banana", "apple"], ["banana", "apple", "apple", "banana"], ["banana", "banana", "banana", "apple"]]), [["banana", "apple", "apple", "banana"], ["apple", "banana", "banana", "apple"], ["apple", "apple", "apple", "banana"]]);`,
    `assert.deepEqual(invertMatrix([[6, 7, 7, 7, 6], [7, 6, 7, 6, 7], [7, 7, 6, 7, 7], [7, 6, 7, 6, 7], [6, 7, 7, 7, 6]]), [[7, 6, 6, 6, 7], [6, 7, 6, 7, 6], [6, 6, 7, 6, 6], [6, 7, 6, 7, 6], [7, 6, 6, 6, 7]]);`,
    `assert.deepEqual(invertMatrix([[1.2, 2.1, 2.1, 2.1], [2.1, 1.2, 2.1, 1.2], [1.2, 1.2, 2.1, 2.1]]), [[2.1, 1.2, 1.2, 1.2], [1.2, 2.1, 1.2, 2.1], [2.1, 2.1, 1.2, 1.2]]);`,
]);
