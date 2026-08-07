/*
FizzBuzz Mini
Given an integer, return a string based on the following rules:

If the number is divisible by 3, return "Fizz".
If the number is divisible by 5, return "Buzz".
If the number is divisible by both 3 and 5, return "FizzBuzz".
Otherwise, return the given number as a string.

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/01-26
*/

function fizzBuzzMini(n) {
    if (n % 15 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return String(n);
}

const runTests = require('../../../helpers/runTests');
runTests(fizzBuzzMini, [
    `assert.equal(fizzBuzzMini(3), "Fizz");`,
    `assert.strictEqual(fizzBuzzMini(4), "4");`,
    `assert.equal(fizzBuzzMini(35), "Buzz");`,
    `assert.equal(fizzBuzzMini(75), "FizzBuzz");`,
    `assert.strictEqual(fizzBuzzMini(98), "98");`,
]);
