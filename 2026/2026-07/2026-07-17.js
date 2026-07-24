/*
Birthday Countdown
Given today's date and a birthday, return the number of days until the person's next birthday.

Today's date is given as a string in "YYYY-MM-DD" format, with leading zeros, for example: "2026-07-16".
The birthday is given as a string in "M/D" format, without leading zeros, for example: "9/7".
If today is their birthday, return the number of days until their next birthday (not 0).
Leap years should be accounted for.
*/

const isLeapYear = (y) => {
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
}

function daysUntilBirthday(today, birthday) {
    const todaysDate = new Date(today);
    let year = todaysDate.getFullYear();
    const [month, day] = [birthday.split('/')[0].padStart(2,'0'), birthday.split('/')[1].padStart(2,'0')];
    const isFeb29 = month === '02' && day === '29';
    const findNextBDay = (y) => {
        while (isFeb29 && !isLeapYear(y)) y++;
        return new Date(y + '-' + month + '-' + day);
    }
    let candidate = findNextBDay(year);
    let nextBirthday = candidate > todaysDate ? candidate : findNextBDay(year + 1);
    let difference = nextBirthday - todaysDate;
    return difference/86400000;
}

const runTests = require('../../helpers/runTests');
runTests(daysUntilBirthday, [
    `assert.equal(daysUntilBirthday("2026-07-16", "9/7"), 53);`,
    `assert.equal(daysUntilBirthday("2026-07-16", "3/22"), 249);`,
    `assert.equal(daysUntilBirthday("2026-07-16", "7/16"), 365);`,
    `assert.equal(daysUntilBirthday("2024-02-28", "3/1"), 2);`,
    `assert.equal(daysUntilBirthday("2023-04-24", "12/30"), 250);`,
    `assert.equal(daysUntilBirthday("2024-03-01", "2/29"), 1460);`,
    `assert.equal(daysUntilBirthday("2096-03-01", "2/29"), 2920);`,
]);
