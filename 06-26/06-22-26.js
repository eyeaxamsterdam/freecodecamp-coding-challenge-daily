/*
Prime Factorization
Given an integer greater than 1, return its prime factorization as an array of numbers in ascending order.

A prime factorization is the set of prime numbers that multiply together to produce the given integer. Each number has exactly one set. For example, the prime factorization of 20 is [2, 2, 5] because 2 * 2 * 5 = 20.

If the given integer is itself prime, return it in a single-element array.
*/

function primeFactorization(n) {
    const factors = [];
    for (let i = 2; i * i <= n; i++) {
        console.log('checking number: ', n);
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    if (n > 1) factors.push(n);
    return factors;
}

const runTests = require('../helpers/runTests');
runTests(primeFactorization, `
    Waiting:1. primeFactorization(20) should return [2, 2, 5].
    Waiting:2. primeFactorization(17) should return [17].
    Waiting:3. primeFactorization(15) should return [3, 5].
    Waiting:4. primeFactorization(35) should return [5, 7].
    Waiting:5. primeFactorization(999) should return [3, 3, 3, 37].
    Waiting:6. primeFactorization(360) should return [2, 2, 2, 3, 3, 5].
    Waiting:7. primeFactorization(510510) should return [2, 3, 5, 7, 11, 13, 17].
`);