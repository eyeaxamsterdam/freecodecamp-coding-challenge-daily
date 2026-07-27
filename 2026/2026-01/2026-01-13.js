/*
Odd or Even?
Given a positive integer, return "Odd" if it's an odd number, and "Even" if it's even.
*/

function oddOrEven(n) {

}

const runTests = require('../../helpers/runTests');
runTests(oddOrEven, [
    `assert.equal(oddOrEven(1), "Odd");`,
    `assert.equal(oddOrEven(2), "Even");`,
    `assert.equal(oddOrEven(13), "Odd");`,
    `assert.equal(oddOrEven(196), "Even");`,
    `assert.equal(oddOrEven(123456789), "Odd");`,
]);
