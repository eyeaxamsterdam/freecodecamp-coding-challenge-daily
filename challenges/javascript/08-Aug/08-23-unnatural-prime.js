/*
Unnatural Prime
Given an integer, determine if that number is a prime number or a negative prime number.

A prime number is a positive integer greater than 1 that is only divisible by 1 and itself.
A negative prime number is the negative version of a positive prime number.
1 and 0 are not considered prime numbers.
*/

function isUnnaturalPrime(n) {
    if (n === 2 || n === -2) return true;
    if (n === 0 || n === 1 || n === -1 || n % 2 === 0) return false;
    const start = n < 0 ? -3 : 3;
    const increment = n < 0 ? -2 : 2;
    const limit = Math.sqrt(Math.abs(n));
    for (let i = start; Math.abs(i) <= limit; i+=increment) {
        if (n % i === 0) return false;
    }
    return true;
}

const runTests = require('../../../helpers/runTests');
runTests(isUnnaturalPrime, [
    `assert.isFalse(isUnnaturalPrime(1));`,
    `assert.isFalse(isUnnaturalPrime(-1));`,
    `assert.isTrue(isUnnaturalPrime(19));`,
    `assert.isTrue(isUnnaturalPrime(-23));`,
    `assert.isFalse(isUnnaturalPrime(0));`,
    `assert.isTrue(isUnnaturalPrime(97));`,
    `assert.isTrue(isUnnaturalPrime(-61));`,
    `assert.isFalse(isUnnaturalPrime(99));`,
    `assert.isFalse(isUnnaturalPrime(-44));`,
]);
