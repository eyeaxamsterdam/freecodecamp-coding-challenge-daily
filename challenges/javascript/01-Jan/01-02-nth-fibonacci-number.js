/*
Nth Fibonacci Number
Given an integer n, return the nth number in the fibonacci sequence.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/01-02
*/

function nthFibonacci(n) {
    let a = 0, b = 1;
    for (let i = 1; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return a;
}

const runTests = require('../../../helpers/runTests');
runTests(nthFibonacci, [
    `assert.equal(nthFibonacci(4), 2);`,
    `assert.equal(nthFibonacci(10), 34);`,
    `assert.equal(nthFibonacci(15), 377);`,
    `assert.equal(nthFibonacci(40), 63245986);`,
    `assert.equal(nthFibonacci(75), 1304969544928657);`,
]);
