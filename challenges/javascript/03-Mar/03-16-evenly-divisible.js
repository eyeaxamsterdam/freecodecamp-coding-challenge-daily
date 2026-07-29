/*
Evenly Divisible
Given two integers, determine if you can evenly divide the first one by the second one.
*/

function isEvenlyDivisible(a, b) {
    return a % b === 0;
}

const runTests = require('../../../helpers/runTests');
runTests(isEvenlyDivisible, [
    `assert.isTrue(isEvenlyDivisible(4, 2));`,
    `assert.isFalse(isEvenlyDivisible(7, 3));`,
    `assert.isFalse(isEvenlyDivisible(5, 10));`,
    `assert.isTrue(isEvenlyDivisible(48, 6));`,
    `assert.isTrue(isEvenlyDivisible(3186, 9));`,
    `assert.isFalse(isEvenlyDivisible(4192, 11));`,
]);
