/*
Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.
*/

function squaresWithThree(n) {
    let count = 0;
    const recursiveFunc = (num) => {
        if (String(num*num).match(/3/)) {
            count++;
        }
        return num === 1 ? count : recursiveFunc(num - 1);
    }
    return recursiveFunc(n);
}



const runTests = require('../../helpers/runTests');
runTests(squaresWithThree, `
    Waiting:1. squaresWithThree(1) should return 0.
    Waiting:2. squaresWithThree(10) should return 1.
    Waiting:3. squaresWithThree(100) should return 19.
    Waiting:4. squaresWithThree(1000) should return 326.
    Waiting:5. squaresWithThree(10000) should return 4531.
`);