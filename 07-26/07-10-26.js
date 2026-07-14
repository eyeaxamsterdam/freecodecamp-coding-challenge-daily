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

const runTests = require('../helpers/runTests');
runTests(exactChange, `
    Waiting:1. exactChange(3) should return 1.
    Waiting:2. exactChange(9) should return 2.
    Waiting:3. exactChange(17) should return 6.
    Waiting:4. exactChange(39) should return 24.
    Waiting:5. exactChange(61) should return 73.
    Waiting:6. exactChange(99) should return 213.
`);