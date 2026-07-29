/*
Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.
*/

function squaresWithThree(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (String(i * i).includes('3')) count++;
    }
    return count;
}

const runTests = require('../../../helpers/runTests');
runTests(squaresWithThree, [
    `assert.equal(squaresWithThree(1), 0);`,
    `assert.equal(squaresWithThree(10), 1);`,
    `assert.equal(squaresWithThree(100), 19);`,
    `assert.equal(squaresWithThree(1000), 326);`,
    `assert.equal(squaresWithThree(10000), 4531);`,
]);
