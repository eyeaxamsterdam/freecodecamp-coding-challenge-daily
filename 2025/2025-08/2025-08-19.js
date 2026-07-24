/*
 Given a posit
ve integer up to 1,000, return the sum of all the integers squared from 1 up to the number.
*/

//recursion works up to 1,000 just fine otherwise use a for loop
function sumOfSquares(n) {
    let sum = 0;
    const recursiveFunc = (num) => {
        sum += num*num;
        return num === 1 ? sum : recursiveFunc(num - 1);
    }
    return recursiveFunc(n);
}
/*

//here is a for loop solution
function sumOfSquares(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i * i;
    return sum;
}

// This is another solution that uses a known math formula. 
function sumOfSquares(n) {
    return (n * (n + 1) * (2 * n + 1)) / 6;
}
*/

const runTests = require('../../helpers/runTests');
runTests(sumOfSquares, [
    `assert.equal(sumOfSquares(5), 55);`,
    `assert.equal(sumOfSquares(10), 385);`,
    `assert.equal(sumOfSquares(25), 5525);`,
    `assert.equal(sumOfSquares(500), 41791750);`,
    `assert.equal(sumOfSquares(1000), 333833500);`,
]);
