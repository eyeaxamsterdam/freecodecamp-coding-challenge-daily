/*
Speed Check
Given the speed you are traveling in miles per hour (MPH), and a speed limit in kilometers per hour (KPH), determine whether you are speeding and if you will get a warning or a ticket.

1 mile equals 1.60934 kilometers.
If you are traveling less than or equal to the speed limit, return "Not Speeding".
If you are traveling 5 KPH or less over the speed limit, return "Warning".
If you are traveling more than 5 KPH over the speed limit, return "Ticket".
*/

function speedCheck(speedMph, speedLimitKph) {
    const over = (speedMph * 1.60934) - speedLimitKph;
    if (over <= 0) return "Not Speeding";
    if (over <= 5) return "Warning";
    return "Ticket";
}

const runTests = require('../../../helpers/runTests');
runTests(speedCheck, [
    `assert.equal(speedCheck(30, 70), "Not Speeding");`,
    `assert.equal(speedCheck(40, 60), "Warning");`,
    `assert.equal(speedCheck(40, 65), "Not Speeding");`,
    `assert.equal(speedCheck(60, 90), "Ticket");`,
    `assert.equal(speedCheck(65, 100), "Warning");`,
    `assert.equal(speedCheck(88, 40), "Ticket");`,
]);
