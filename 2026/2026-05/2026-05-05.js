/*
Narcissistic Number
Given a positive integer, determine whether it is a narcissistic number.

A number is narcissistic if the sum of each of its digits raised to the power of the total number of digits equals the number itself.
For example, 153 has 3 digits, and 1^3 + 5^3 + 3^3 = 153, so it is narcissistic.
*/

function isNarcissistic(n) { 
    let sum = 0;
    n.toString().split('').forEach((num) => sum += Math.pow(Number(num),n.toString().length));
    return sum === n;
}

const runTests = require('../../helpers/runTests');
runTests(isNarcissistic, `
    isNarcissistic(153) should return true.
    isNarcissistic(154) should return false.
    isNarcissistic(371) should return true.
    isNarcissistic(512) should return false.
    isNarcissistic(9) should return true.
    isNarcissistic(11) should return false.
    isNarcissistic(9474) should return true.
    isNarcissistic(6549) should return false.
`);