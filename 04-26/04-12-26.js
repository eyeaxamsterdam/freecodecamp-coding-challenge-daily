/*
Spiral Matrix
Given a 2D matrix, return a flat array with all of its values in clockwise order.

The returned array should have the top-left value first, move right along the top row, then down the right column, then left along the bottom row, then up the left column. Repeat inward for any remaining layers.

For example, given:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
Return [1, 2, 3, 6, 9, 8, 7, 4, 5].
*/

function spiralMatrix(matrix) {
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;
    const result = [];

    const goRight = () => {
        for (let i = left; i <= right; i++) result.push(matrix[top][i]);
        top++;
        if (top <= bottom) goDown();
    }

    const goDown = () => {
        for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
        right--;
        if (left <= right) goLeft();
    }

    const goLeft = () => {
        for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
        bottom--;
        if (top <= bottom) goUp();
    }

    const goUp = () => {
        for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
        left++;
        if (left <= right) goRight();
    }

    goRight();
    return result;
}

const runTests = require('../helpers/runTests');

runTests(spiralMatrix, `
    Waiting:1. spiralMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) should return [1, 2, 3, 6, 9, 8, 7, 4, 5].
    Waiting:2. spiralMatrix([["a", "b", "c", "d"], ["l", "m", "n", "e"], ["k", "p", "o", "f"], ["j", "i", "h", "g"]]) should return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"].
    Waiting:3. spiralMatrix([[true, false, false], [false, true, true], [false, true, false], [true, true, false]]) should return [true, false, false, true, false, false, true, true, false, false, true, true].
    Waiting:4. spiralMatrix([[25, 24, 23, 22, 21], [10, 9, 8, 7, 20], [11, 2, 1, 6, 19], [12, 3, 4, 5, 18], [13, 14, 15, 16, 17]]) should return [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].
    `);
    
/*     
   
*/