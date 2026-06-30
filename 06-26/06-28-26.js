/*
Connect 3
Given a matrix of strings representing pieces on a game grid, determine if any player has three in a row.

Each cell contains "R", "Y", or "" (empty string).
Three in a row means three consecutive non-empty cells of the same type horizontally, vertically, or diagonally.
Return:

A flat array with the winner and the coordinates of their three winning cells in the format: ["R", [0,2], [1,3], [2,4]]. Coordinates are returned top-to-bottom, then left-to-right.
An empty array if there is no winner.
*/



function connectThree(matrix) {
    const horizontal = (i,j) => {
        const [var1,var2,var3] =  [matrix[i][j],matrix[i][j+1],matrix[i][j+2]]
        if (var1 === var2 && var2 === var3) {
            return [[i,j],[i,j+1],[i,j+2]];
        } else {
            return false;
        }
    }   
    const vertical = (i,j) => {
        const [var1,var2,var3] = [matrix[i][j],matrix[i+1][j],matrix[i+2][j]];
        if (var1 === var2 && var1 === var3) {
            return [[i,j],[i+1,j],[i+2,j]];
        } else {
            return false;
        }
    }
    const diagonal = (i,j) => {
        let direction;
        let var1,var2,var3;
        if (j <= matrix[i].length - 3) {
            [var1,var2,var3] = [matrix[i][j],matrix[i+1][j+1],matrix[i+2][j+2]];
            direction = 'right';
        }
        else {
            [var1,var2,var3] = [matrix[i][j],matrix[i+1][j-1],matrix[i+2][j-2]];
            direction = 'left';
        }
        if (var1 === var2 && var1 === var3) {
            let response = direction === 'left' ? [[i,j],[i+1,j-1],[i+2,j-2]] : [[i,j],[i+1,j+1],[i+2,j+2]]
            return response;
        } else {
            return false;
        }
    }

    let horizontalCheck;
    let verticalCheck;
    let diagonalCheck;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] !== '') {
                if (j <= matrix[i].length - 3) {
                    const h = horizontal(i,j);
                    if (h) return [matrix[i][j], ...h];
                }
                if (i <= matrix.length - 3) {
                    const v = vertical(i,j);
                    if (v) return [matrix[i][j], ...v];
                }
                if (i <= matrix.length - 3 && (j <= matrix.length - 3 || j >= 2)) {
                    const d = diagonal(i,j);
                    if (d) return [matrix[i][j], ...d];
                }
            }
        }
    }   
    return [];
}

const runTests = require('../helpers/runTests');
runTests(connectThree, `
    Waiting:1. connectThree([["", "", "", ""], ["", "", "", ""], ["", "Y", "", ""], ["Y", "R", "R", "R"]]) should return ["R", [3, 1], [3, 2], [3, 3]].
    Waiting:2. connectThree([["", "", "", ""], ["", "Y", "Y", ""], ["", "Y", "R", "R"], ["", "Y", "R", "R"]]) should return ["Y", [1, 1], [2, 1], [3, 1]].
    Waiting:3. connectThree([["", "", "Y", "R"], ["", "Y", "R", "Y"], ["", "R", "Y", "R"], ["", "R", "Y", "R"]]) should return ["R", [0, 3], [1, 2], [2, 1]].
    Waiting:4. connectThree([["", "Y", "", ""], ["", "Y", "Y", ""], ["", "R", "R", "Y"], ["R", "R", "Y", "R"]]) should return ["Y", [0, 1], [1, 2], [2, 3]].
    Waiting:5. connectThree([["Y", "R", "R", "Y"], ["R", "Y", "Y", "R"], ["Y", "R", "R", "Y"], ["R", "Y", "Y", "R"]]) should return [].
`);