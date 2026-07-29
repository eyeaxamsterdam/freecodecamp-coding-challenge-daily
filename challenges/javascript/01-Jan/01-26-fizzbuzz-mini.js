/*
FizzBuzz Mini
Given an integer, return a string based on the following rules:

If the number is divisible by 3, return "Fizz".
If the number is divisible by 5, return "Buzz".
If the number is divisible by both 3 and 5, return "FizzBuzz".
Otherwise, return the given number as a string.
*/

function fizzBuzzMini(n) {

}

const runTests = require('../../../helpers/runTests');
runTests(fizzBuzzMini, [
    `assert.equal(fizzBuzzMini(3), "Fizz");`,
    `assert.strictEqual(fizzBuzzMini(4), "4");`,
    `assert.equal(fizzBuzzMini(35), "Buzz");`,
    `assert.equal(fizzBuzzMini(75), "FizzBuzz");`,
    `assert.strictEqual(fizzBuzzMini(98), "98");`,
]);
