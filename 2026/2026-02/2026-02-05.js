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

const runTests = require('../../helpers/runTests');
runTests(countChange, `
    countChange([25, 10, 5, 1]) should return "$0.41".
    countChange([25, 10, 5, 1, 25, 10, 25, 1, 1, 10, 5, 25]) should return "$1.43".
    countChange([100, 25, 100, 1000, 5, 500, 2000, 25]) should return "$37.55".
    countChange([10, 5, 1, 10, 1, 25, 1, 1, 5, 1, 10]) should return "$0.70".
    countChange([1]) should return "$0.01".
    countChange([25, 25, 25, 25]) should return "$1.00". 
`);