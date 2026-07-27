/*
Sum of Divisors
Given a positive integer, return the sum of all its divisors.

A divisor is any integer that divides the number evenly (the remainder is 0).
Only count each divisor once.

For example, given 6, return 12 because the divisors of 6 are 1, 2, 3, and 6, and the sum of those is 12.
*/

function sumDivisors(n) {

}

const runTests = require('../../helpers/runTests');
runTests(sumDivisors, [
    `assert.equal(sumDivisors(6), 12);`,
    `assert.equal(sumDivisors(13), 14);`,
    `assert.equal(sumDivisors(28), 56);`,
    `assert.equal(sumDivisors(84), 224);`,
    `assert.equal(sumDivisors(549), 806);`,
    `assert.equal(sumDivisors(9348), 23520);`,
]);
