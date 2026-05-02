/*
Given a Unix timestamp in milliseconds, return the day of the week.

Valid return days are:

"Sunday"
"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"
Be sure to ignore time zones.
*/

function getDayOfWeek(timestamp) {
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let newDate = new Date(timestamp).getUTCDay();
    let day = DAYS[newDate];
    return day;
}

const runTests = require('../helpers/runTests');
runTests(getDayOfWeek, `
    Waiting:1. getDayOfWeek(1775492249000) should return "Monday".
    Waiting:2. getDayOfWeek(1766246400000) should return "Saturday".
    Waiting:3. getDayOfWeek(33791256000000) should return "Tuesday".
    Waiting:4. getDayOfWeek(1773576000000) should return "Sunday".
    Waiting:5. getDayOfWeek(0) should return "Thursday".
    `);
