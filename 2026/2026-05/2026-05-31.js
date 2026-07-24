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
runTests(getCombinations, `
    getCombinations(2) should return 2.
    getCombinations(3) should return 5.
    getCombinations(5) should return 42.
    getCombinations(8) should return 1430.
    getCombinations(13) should return 742900.
`); */