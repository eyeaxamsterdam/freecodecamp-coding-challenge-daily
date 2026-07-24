/*
Exact Change
Given an integer amount in cents, return the number of distinct ways to make exact change using pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).
*/

function exactChange(amount) {
    const COINS = [1,5,10,25];
    // build an array
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    console.log(dp);
    for (const coin of COINS) {
        console.log('checking coin: ', coin);
        for (let j = coin; j <= amount; j++) {
            dp[j] += dp[j - coin]
            console.log(dp[j]);
        }
    }
    return dp[amount];
}

const runTests = require('../../helpers/runTests');
runTests(exactChange, [
    `assert.equal(exactChange(3), 1);`,
    `assert.equal(exactChange(9), 2);`,
    `assert.equal(exactChange(17), 6);`,
    `assert.equal(exactChange(39), 24);`,
    `assert.equal(exactChange(61), 73);`,
    `assert.equal(exactChange(99), 213);`,
]);
