/*
Given an integer, n, return the number of valid combinations of n pairs of parentheses.

A valid combination is a string where every opening parentheses has a corresponding closing parentheses, and no closing parentheses appears before its matching opening parentheses.
For example, given 2, there are 2 valid combinations:

(())
()()
*/

//Catalan number formula
function getCombinations(n) {
    const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
    return factorial(2 * n) / (factorial(n + 1) * factorial(n));
}


/* const runTests = require('../../helpers/runTests');
runTests(getCombinations, [
    `assert.equal(getCombinations(2), 2);`,
    `assert.equal(getCombinations(3), 5);`,
    `assert.equal(getCombinations(5), 42);`,
    `assert.equal(getCombinations(8), 1430);`,
    `assert.equal(getCombinations(13), 742900);`,
]);
