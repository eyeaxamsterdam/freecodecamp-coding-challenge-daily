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
runTests(isNarcissistic, [
    `assert.isTrue(isNarcissistic(153));`,
    `assert.isFalse(isNarcissistic(154));`,
    `assert.isTrue(isNarcissistic(371));`,
    `assert.isFalse(isNarcissistic(512));`,
    `assert.isTrue(isNarcissistic(9));`,
    `assert.isFalse(isNarcissistic(11));`,
    `assert.isTrue(isNarcissistic(9474));`,
    `assert.isFalse(isNarcissistic(6549));`,
]);
