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

const runTests = require('../../helpers/runTests');
runTests(factorial, `
    factorial(0) should return 1.
    factorial(5) should return 120.
    factorial(20) should return 2432902008176640000. 
`);