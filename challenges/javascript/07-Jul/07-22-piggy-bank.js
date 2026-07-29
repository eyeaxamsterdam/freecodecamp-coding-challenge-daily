/*
Piggy Bank
Given an object representing a piggy bank, return the total value as a string formatted as "$D.CC".

The object may contain any of the following:

Coin	Value
pennies	$0.01
nickels	$0.05
dimes	$0.10
quarters	$0.25
*/

function piggyBank(coins) {
    const VALUES = {pennies: .01, nickels: .05, dimes: .10, quarters: .25}
    const reduce = Object.keys(coins).reduce((a,b) => a + VALUES[b] * coins[b], 0);
    return `$${reduce.toFixed(2)}`
}

const runTests = require('../../../helpers/runTests');
runTests(piggyBank, [
    `assert.equal(piggyBank({ pennies: 3, nickels: 5, dimes: 2, quarters: 6 }), "$1.98");`,
    `assert.equal(piggyBank({ pennies: 1, nickels: 1, dimes: 1, quarters: 1 }), "$0.41");`,
    `assert.equal(piggyBank({ nickels: 8, dimes: 6, quarters: 5 }), "$2.25");`,
    `assert.equal(piggyBank({}), "$0.00");`,
    `assert.equal(piggyBank({ pennies: 146, nickels: 11, dimes: 0, quarters: 19 }), "$6.76");`,
]);
