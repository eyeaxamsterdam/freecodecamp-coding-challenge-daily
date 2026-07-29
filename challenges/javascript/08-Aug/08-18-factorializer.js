/*
Factorializer
Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.

The factorial of zero is 1.
*/

function factorial(n) {
    if(n === 0 || n === 1) {
        return 1
    }
    else return n * factorial(n-1);
}

const runTests = require('../../../helpers/runTests');
runTests(factorial, [
    `assert.equal(factorial(0), 1);`,
    `assert.equal(factorial(5), 120);`,
    `assert.equal(factorial(20), 2432902008176640000);`,
]);
