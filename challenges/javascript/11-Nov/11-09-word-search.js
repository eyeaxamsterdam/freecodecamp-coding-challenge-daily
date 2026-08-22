/*
Word Search
Given a matrix (an array of arrays) of single letters and a word to find, return the start and end indices of the word in the matrix.

The given matrix will be filled with all lowercase letters (a-z).
The word to find will always be in the matrix exactly once.
The word to find will always be in a straight line in one of these directions:
left to right
right to left
top to bottom
bottom to top
For example, given the matrix:
*/

function findWord(matrix, word) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            for (const [dr, dc] of directions) {
                const endR = r + dr * (word.length - 1);
                const endC = c + dc * (word.length - 1);
                if (endR < 0 || endR >= rows || endC < 0 || endC >= cols) continue;

                let matches = true;
                for (let i = 0; i < word.length; i++) {
                    if (matrix[r + dr * i][c + dc * i] !== word[i]) {
                        matches = false;
                        break;
                    }
                }
                if (matches) return [[r, c], [endR, endC]];
            }
        }
    }
    return null;
}


const runTests = require('../../../helpers/runTests');
runTests(findWord, [
    `assert.deepEqual(findWord([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat"), [[0, 1], [2, 1]]);`,
    `assert.deepEqual(findWord([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog"), [[0, 0], [0, 2]]);`,
    `assert.deepEqual(findWord([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish"), [[3, 3], [0, 3]]);`,
    `assert.deepEqual(findWord([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox"), [[1, 3], [1, 1]]);`,
]);
