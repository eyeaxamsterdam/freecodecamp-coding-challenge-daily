/*
Odd or Even?
Given a positive integer, return "Odd" if it's an odd number, and "Even" if it's even.

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/01-13
*/

function oddOrEven(n) {
    return n % 2 === 0 ? "Even" : "Odd";
}

const runTests = require('../../../helpers/runTests');
runTests(oddOrEven, [
    `assert.equal(oddOrEven(1), "Odd");`,
    `assert.equal(oddOrEven(2), "Even");`,
    `assert.equal(oddOrEven(13), "Odd");`,
    `assert.equal(oddOrEven(196), "Even");`,
    `assert.equal(oddOrEven(123456789), "Odd");`,
]);
