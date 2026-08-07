/*
Spoken Time
Given the angles for the hour and minute hands of an analog clock in degrees (clockwise from 12), return the time in spoken English.

Convert the minute hand angle to minutes (360° = 60 minutes), then use the following rules:

| Minutes | Spoken |
|---------|--------|
| 0 | "Y o'clock" |
| 15 | "quarter past Y" |
| 1–29 (excluding 15) | "X minutes past Y" |
| 30 | "half past Y" |
| 45 | "quarter to Z" |
| 31–59 (excluding 45) | "X minutes to Z" (where X is 60 - minutes) |

Where Y is the current hour and Z is the next hour, both derived from the hour hand angle (360° = 12 hours).

Note: Hand angles may not land exactly on a number, consider rounding them somehow.
*/

function getSpokenTime(hourAngle, minuteAngle) {
    const displayHour = (h) => h % 12 === 0 ? 12 : h % 12;
    const buildText = (m,h) => {
        if (m === 0) return `${displayHour(h)} o'clock`;
        if (m === 15) return `quarter past ${displayHour(h)}`;
        if (m === 45) return `quarter to ${displayHour(h+1)}`;
        if (m < 30) return `${m} minute${m === 1 ? '' : 's'} past ${displayHour(h)}`;
        if (m > 30) return `${60-m} minute${60-m === 1 ? '' : 's'} to ${displayHour(h+1)}`;
        else return `half past ${displayHour(h)}`;
    }
    let minutes = Math.trunc(minuteAngle * (60/360));
    let hours =  Math.trunc(hourAngle * (12/360));
    return buildText(minutes,hours)
}

const runTests = require('../../../helpers/runTests');
runTests(getSpokenTime, [
    `assert.equal(getSpokenTime(90, 0), "3 o'clock");`,
    `assert.equal(getSpokenTime(160, 120), "20 minutes past 5");`,
    `assert.equal(getSpokenTime(255, 180), "half past 8");`,
    `assert.equal(getSpokenTime(67.5, 92), "quarter past 2");`,
    `assert.equal(getSpokenTime(200, 240), "20 minutes to 7");`,
    `assert.equal(getSpokenTime(322.5, 273), "quarter to 11");`,
    `assert.equal(getSpokenTime(117.5, 335), "5 minutes to 4");`,
]);
