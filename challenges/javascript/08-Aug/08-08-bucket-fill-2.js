/*
Bucket Fill 2
Given a 2D grid of single-letter color strings and a target color, return the minimum number of flood fill "clicks" needed to make the entire grid the target color.

Each click changes the clicked cell's color and the entire region of connected cells of the same color with the target color.
Cells are connected horizontally and vertically (not diagonally).

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/08-08
*/

function bucketFill(grid, targetColor) {

    const visited = new Set();
    let clicks = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const key = `${i},${j}`;
            if (visited.has(key)) continue;

            const color = grid[i][j];
            const stack = [[i, j]];
            visited.add(key);

            while (stack.length > 0) {
                const [r, c] = stack.pop();
                const neighbors = [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]];

                for (const [nr, nc] of neighbors) {
                    const nKey = `${nr},${nc}`;
                    if (
                        nr >= 0 && nr < grid.length &&
                        nc >= 0 && nc < grid[nr].length &&
                        !visited.has(nKey) &&
                        grid[nr][nc] === color
                    ) {
                        visited.add(nKey);
                        stack.push([nr, nc]);
                    }
                }
            }

            if (color !== targetColor) clicks++;
        }
    }

    return clicks;
}

const runTests = require('../../../helpers/runTests');
runTests(bucketFill, [
    `assert.equal(bucketFill([["R", "R"], ["R", "R"]], "G"), 1);`,
    `assert.equal(bucketFill([["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]], "B"), 0);`,
    `assert.equal(bucketFill([["G", "Y", "Y"], ["G", "Y", "G"], ["Y", "Y", "G"]], "R"), 3);`,
    `assert.equal(bucketFill([["G", "G", "P", "Y"], ["O", "P", "P", "P"], ["O", "O", "P", "G"], ["G", "O", "O", "G"]], "P"), 5);`,
    `assert.equal(bucketFill([["G", "G", "C", "C", "O"], ["B", "Y", "B", "Y", "O"], ["B", "J", "O", "J", "B"], ["G", "Y", "Y", "Y", "B"], ["G", "P", "P", "G", "G"]], "Y"), 12);`,
]);
