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


/* const runTests = require('../helpers/runTests');
runTests(getCombinations, `
    Waiting:1. getCombinations(2) should return 2.
    Waiting:2. getCombinations(3) should return 5.
    Waiting:3. getCombinations(5) should return 42.
    Waiting:4. getCombinations(8) should return 1430.
    Waiting:5. getCombinations(13) should return 742900.
`); */