/*
Odd or Even Day
Given a timestamp (number of milliseconds since the Unix epoch), return:

"odd" if the day of the month for that timestamp is odd.
"even" if the day of the month for that timestamp is even.

For example, given 1769472000000, a timestamp for January 27th, 2026, return "odd" because the day number (27) is an odd number.

Note: The timestamp is in milliseconds and you should use the date in the UTC timezone, not in your local time.
*/

function oddOrEvenDay(timestamp) {
    const day = new Date(timestamp).getUTCDate();
    return day % 2 === 0 ? "even" : "odd";
}

const runTests = require('../../../helpers/runTests');
runTests(oddOrEvenDay, [
    `assert.equal(oddOrEvenDay(1769472000000), "odd");`,
    `assert.equal(oddOrEvenDay(1769444440000), "even");`,
    `assert.equal(oddOrEvenDay(6739456780000), "odd");`,
    `assert.equal(oddOrEvenDay(1), "odd");`,
    `assert.equal(oddOrEvenDay(86400000), "even");`,
]);
