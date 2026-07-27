/*
24 to 12
Given a string representing a time of the day in the 24-hour format of "HHMM", return the time in its equivalent 12-hour format of "H:MM AM" or "H:MM PM".

The given input will always be a four-digit string in 24-hour time format, from "0000" to "2359".
*/

function to12(time) {
    const hour = Number(time.slice(0, 2));
    const minutes = time.slice(2);
    const period = hour < 12 ? "AM" : "PM";
    let hour12 = hour % 12;
    if (hour12 === 0) hour12 = 12;
    return `${hour12}:${minutes} ${period}`;
}

const runTests = require('../../helpers/runTests');
runTests(to12, [
    `assert.equal(to12("1124"), "11:24 AM");`,
    `assert.equal(to12("0900"), "9:00 AM");`,
    `assert.equal(to12("1455"), "2:55 PM");`,
    `assert.equal(to12("2346"), "11:46 PM");`,
    `assert.equal(to12("0030"), "12:30 AM");`,
]);
