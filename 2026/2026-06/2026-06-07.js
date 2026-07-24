/*
Last Load
Given the number of scoops of laundry detergent you have remaining and an array of how many scoops you used in each of the previous days, return the number of full days of detergent you have remaining.

Calculate your average daily usage from the usage history and assume that amount of usage each day going forward.
*/

function lastLoadDate(scoops, usage) {
    const lastScoops = usage.reduce((a,b) => a + b,0);
    const average = lastScoops/usage.length;
    return Math.floor(scoops/average);
}

const runTests = require('../../helpers/runTests');
runTests(lastLoadDate, [
    `assert.equal(lastLoadDate(10, [2, 2, 2, 2, 2, 2, 2]), 5);`,
    `assert.equal(lastLoadDate(16, [2, 3, 0, 3, 4, 2, 1]), 7);`,
    `assert.equal(lastLoadDate(33, [5, 0, 4, 3, 3, 2]), 11);`,
    `assert.equal(lastLoadDate(50, [2, 0, 2, 9, 12, 0, 2]), 12);`,
    `assert.equal(lastLoadDate(20, [13, 9, 12, 10, 8]), 1);`,
]);
