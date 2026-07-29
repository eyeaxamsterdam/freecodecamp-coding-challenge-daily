/*
Prime Factorization
Given an integer greater than 1, return its prime factorization as an array of numbers in ascending order.

A prime factorization is the set of prime numbers that multiply together to produce the given integer. Each number has exactly one set. For example, the prime factorization of 20 is [2, 2, 5] because 2 * 2 * 5 = 20.

If the given integer is itself prime, return it in a single-element array.
*/

function primeFactorization(n) {
    const factors = [];
    for (let i = 2; i * i <= n; i++) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    if (n > 1) factors.push(n);
    return factors;
}

const runTests = require('../../../helpers/runTests');
runTests(primeFactorization, [
    `assert.deepEqual(primeFactorization(20), [2, 2, 5]);`,
    `assert.deepEqual(primeFactorization(17), [17]);`,
    `assert.deepEqual(primeFactorization(15), [3, 5]);`,
    `assert.deepEqual(primeFactorization(35), [5, 7]);`,
    `assert.deepEqual(primeFactorization(999), [3, 3, 3, 37]);`,
    `assert.deepEqual(primeFactorization(360), [2, 2, 2, 3, 3, 5]);`,
    `assert.deepEqual(primeFactorization(510510), [2, 3, 5, 7, 11, 13, 17]);`,
]);
