/*
Max Profit
Given an array of daily stock prices and a budget (in dollars), calculate the maximum profit you could make by buying and selling the stock over the given period.

You may only sell after you buy.
You can only buy whole shares.
Return the maximum possible profit as a string, rounded down to the nearest cent and formatted to two decimal places.
*/

function getMaxProfit(prices, budget) {
    let findGreatestDiff = 0
    let buy = 0;
    let sell = 0;
        prices.forEach((n,i) => {
        for (let j = i + 1; j < prices.length; j++) {
            let compare = prices[j];
            if(compare > n) {
                let difference = compare - n;
                if (difference > findGreatestDiff) {
                    findGreatestDiff = difference;
                    buy = n;
                    sell = compare;
                }
            }
        }
    });
    if (buy === 0) return "0.00"
    let shares = Math.floor(budget / buy);
    let profit = shares * (sell - buy);
    return profit.toFixed(2);
}

const runTests = require('../../helpers/runTests');
runTests(getMaxProfit, `
    getMaxProfit([5, 6], 50) should return "10.00".
    getMaxProfit([8, 2, 5, 10], 20) should return "80.00".
    getMaxProfit([4, 5, 3, 6], 20) should return "18.00".
    getMaxProfit([54.40, 51.22, 53.99, 50.28, 53.01, 52.84], 200) should return "8.31".
    getMaxProfit([15.38, 15.01, 14.99, 14.62, 14.28], 80) should return "0.00".
    getMaxProfit([121.45, 126.82, 122.91, 124.65, 128.83, 128.83, 127.33], 1230.25) should return "73.80".
`);