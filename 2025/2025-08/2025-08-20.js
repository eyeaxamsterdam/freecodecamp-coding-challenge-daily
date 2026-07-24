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

const runTests = require('../../helpers/runTests');
runTests(squaresWithThree, `
    squaresWithThree(1) should return 0.
    squaresWithThree(10) should return 1.
    squaresWithThree(100) should return 19.
    squaresWithThree(1000) should return 326.
    squaresWithThree(10000) should return 4531.
`);