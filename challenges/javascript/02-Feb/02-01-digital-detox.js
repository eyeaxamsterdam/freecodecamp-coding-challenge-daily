/*
Digital Detox
Given an array of your login logs, determine whether you have met your digital detox goal.

Each log is a string in the format "YYYY-MM-DD HH:mm:ss".

You have met your digital detox goal if both of the following statements are true:

You logged in no more than once within any four-hour period.
You logged in no more than 2 times on any single day.
*/

function digitalDetox(logs) {
    const fourHours = 14400000;
    const dateArr = logs.map((log) => {
        return new Date(log);
    }).sort((a,b) => a.getTime()-b.getTime());
    const dateDayArr = dateArr.map(date => date.toDateString());
    for (let i = 0; i < dateDayArr.length; i++) {
        if (dateDayArr.filter(date => date === dateDayArr[i]).length > 2) {
            return false;
        }
    }
    return dateArr.every((date,i) => i === dateArr.length-1 || dateArr[i+1] - date > fourHours);
}

const runTests = require('../../../helpers/runTests');
runTests(digitalDetox, [
    `assert.isTrue(digitalDetox(["2026-02-01 08:00:00", "2026-02-01 12:30:00"]));`,
    `assert.isFalse(digitalDetox(["2026-02-01 04:00:00", "2026-02-01 07:30:00"]));`,
    `assert.isTrue(digitalDetox(["2026-01-31 08:21:30", "2026-01-31 14:30:00", "2026-02-01 08:00:00", "2026-02-01 12:30:00"]));`,
    `assert.isFalse(digitalDetox(["2026-01-31 10:40:21", "2026-01-31 15:19:41", "2026-01-31 21:49:50", "2026-02-01 09:30:00"]));`,
    `assert.isTrue(digitalDetox(["2026-02-05 10:00:00", "2026-02-01 09:00:00", "2026-02-03 20:15:00", "2026-02-02 12:10:00", "2026-02-02 07:15:00", "2026-02-04 09:45:00", "2026-02-01 16:50:00", "2026-02-03 09:30:00"]));`,
    `assert.isFalse(digitalDetox(["2026-02-05 10:00:00", "2026-02-01 09:00:00", "2026-02-03 22:15:00", "2026-02-02 12:10:00", "2026-02-02 07:15:00", "2026-02-04 01:45:00", "2026-02-01 16:50:00", "2026-02-03 09:30:00"]));`,
]);
