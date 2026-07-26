/*
Cell Signal
Given a grid containing three cell tower readings, determine the location of the phone.

Each cell in the grid is either 0 (no tower) or a positive integer representing the number of cells to the phone, measured in a straight line: horizontal, vertical, or diagonal.
Return the [row, col] of the cell that is the correct number of cells from all three towers.
There is always exactly one solution.
*/

function findSignal(grid) {
    let towers = []
    let check = []
    grid.forEach((row,i) => {
        if (row.some(distance => distance > 0)) row.forEach((distance, j) => {
            if (distance > 0) towers.push([[i,j], distance])
        })
    });
    towers.forEach(tower => {
        console.log(tower);
        let [row, col]= tower[0]
        let distance = tower[1];
        let u = row - distance >= 0 ? [row - distance, col] : null;
        let d = row + distance < grid.length ? [row + distance, col] : null;
        let l = col - distance >= 0 ? [row, col - distance] : null;
        let r = col + distance < grid[row].length ? [row, col + distance] : null;
        let ur = u && r ? [row - distance, col + distance] : null;
        let dr = d && r ? [row + distance, col + distance] : null;
        let dl = d && l ? [row + distance, col - distance] : null;
        let ul = u && l ? [row - distance, col - distance] : null;
        check.push(...[u, d, l, r, ur, dr, dl, ul].filter(Boolean));
    })    
    console.log(check);

    const frequencyMap = new Map();
    let maxCount = 0;
    let mostFrequentArray = null;

    for (const currentArray of check) {
        // Convert array to a unique string key
        const stringKey = JSON.stringify(currentArray);
        
        // Get current count or default to 0, then add 1
        const currentCount = (frequencyMap.get(stringKey) || 0) + 1;
        frequencyMap.set(stringKey, currentCount);
        
        // Track the winner
        if (currentCount > maxCount) {
            maxCount = currentCount;
            mostFrequentArray = currentArray; // Keeps the original array format
        } 
    }
    return mostFrequentArray;
}

let runTests = require('../../helpers/runTests');
runTests(findSignal, [
    `assert.deepEqual(findSignal([[0, 0, 1], [0, 1, 0], [0, 0, 1]]), [1, 2]);`,
    `assert.deepEqual(findSignal([[0, 2, 0], [1, 0, 0], [0, 0, 1]]), [2, 1]);`,
    `assert.deepEqual(findSignal([[0, 0, 2, 0], [0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 1]]), [2, 2]);`,
    `assert.deepEqual(findSignal([[0, 3, 0, 0, 0], [0, 0, 0, 0, 2], [0, 0, 0, 0, 0], [4, 0, 0, 0, 0], [0, 0, 0, 0, 0]]), [3, 4]);`,
    `assert.deepEqual(findSignal([[3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 2]]), [3, 3]);`,
]);