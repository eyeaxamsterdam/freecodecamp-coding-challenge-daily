/*
Evenly Divisible
Given two integers, determine if you can evenly divide the first one by the second one.
*/

function isEvenlyDivisible(a, b) {
    return a % b === 0;
}

const runTests = require('../helpers/runTests');
runTests(isEvenlyDivisible, `
    Waiting:1. isEvenlyDivisible(4, 2) should return true.
    Waiting:2. isEvenlyDivisible(7, 3) should return false.
    Waiting:3. isEvenlyDivisible(5, 10) should return false.
    Waiting:4. isEvenlyDivisible(48, 6) should return true.
    Waiting:5. isEvenlyDivisible(3186, 9) should return true.
    Waiting:6. isEvenlyDivisible(4192, 11) should return false.
`);