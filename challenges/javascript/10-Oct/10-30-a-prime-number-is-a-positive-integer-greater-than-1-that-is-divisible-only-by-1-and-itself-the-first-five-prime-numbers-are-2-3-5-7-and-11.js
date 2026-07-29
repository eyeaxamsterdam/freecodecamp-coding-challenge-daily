/*
A prime number is a positive integer greater than 1 that is divisible only by 1 and itself. The first five prime numbers are 2, 3, 5, 7, and 11.

Given a positive integer n, return the nth prime number. For example, given 5 return the 5th prime number: 11.
*/


function nthPrime(n) {
    let num = 2;
    let count = 1;

    const isPrime = number  => {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

    while (count < n) {
        num++;
        if (isPrime(num)) {
            count++
        }
        
    }
    console.log(num);
    return num
}


//Tests

const runTests = require('../../../helpers/runTests');
runTests(nthPrime, [
    `assert.equal(nthPrime(5), 11);`,
    `assert.equal(nthPrime(10), 29);`,
    `assert.equal(nthPrime(16), 53);`,
    `assert.equal(nthPrime(99), 523);`,
    `assert.equal(nthPrime(1000), 7919);`,
]);
