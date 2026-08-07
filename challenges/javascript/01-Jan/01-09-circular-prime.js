/*
Circular Prime
Given an integer, determine if it is a circular prime.

A circular prime is an integer where all rotations of its digits are themselves prime.

For example, 197 is a circular prime because all rotations of its digits: 197, 971, and 719, are prime numbers.
*/

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function isCircularPrime(n) {
    const digits = String(n);
    for (let i = 0; i < digits.length; i++) {
        const rotated = Number(digits.slice(i) + digits.slice(0, i));
        if (!isPrime(rotated)) return false;
    }
    return true;
}

const runTests = require('../../../helpers/runTests');
runTests(isCircularPrime, [
    `assert.isTrue(isCircularPrime(197));`,
    `assert.isFalse(isCircularPrime(23));`,
    `assert.isTrue(isCircularPrime(13));`,
    `assert.isFalse(isCircularPrime(89));`,
    `assert.isTrue(isCircularPrime(1193));`,
]);
