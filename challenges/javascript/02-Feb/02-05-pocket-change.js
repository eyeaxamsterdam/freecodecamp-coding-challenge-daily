/*
Pocket Change
Given an array of integers representing the coins in your pocket, with each integer being the value of a coin in cents, return the total amount in the format "$D.CC".

100 cents equals 1 dollar.
In the return value, include a leading zero for amounts less than one dollar and always exactly two digits for the cents.
*/

function countChange(change) {
    let total = change.reduce((a,b) => a + b/100,0);
    return `$${total.toFixed(2)}`;
}

const runTests = require('../../../helpers/runTests');
runTests(countChange, [
    `assert.equal(countChange([25, 10, 5, 1]), "$0.41");`,
    `assert.equal(countChange([25, 10, 5, 1, 25, 10, 25, 1, 1, 10, 5, 25]), "$1.43");`,
    `assert.equal(countChange([100, 25, 100, 1000, 5, 500, 2000, 25]), "$37.55");`,
    `assert.equal(countChange([10, 5, 1, 10, 1, 25, 1, 1, 5, 1, 10]), "$0.70");`,
    `assert.equal(countChange([1]), "$0.01");`,
    `assert.equal(countChange([25, 25, 25, 25]), "$1.00");`,
]);
