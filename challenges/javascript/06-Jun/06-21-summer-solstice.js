/*
Summer Solstice
Today is the summer solstice, the longest day of the year in the Northern Hemisphere and the shortest in the Southern. Given a latitude, return a string representing daytime and nighttime hours.

The latitude will be between 90 (north pole) and -90 (south pole), inclusive
The number of daytime hours = 12 + (latitude / 90) * 12
Round the daytime hours to the nearest even number
Return a 24-character string using "☀️" for daytime hours and "🌑" for nighttime hours, where:

Each character represents one hour, starting at midnight (hour 0)
Sunrise and sunset fall symmetrically around noon
For example, a latitude of 0 (the equator) has 12 hours of daylight, so sunrise is at 6:00 AM and sunset is at 6:00 PM. Return: "🌑🌑🌑🌑🌑🌑☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️🌑🌑🌑🌑🌑🌑".
*/

function getDaytimeHours(latitude) {
    const moon = '🌑';
    const sun = '☀️';
    let daytimeHours = 12 + (latitude / 90) * 12;
    daytimeHours = Math.round(daytimeHours/ 2) * 2;
    const nightTimeHours = 24 - daytimeHours;
    return moon.repeat(nightTimeHours/2) + sun.repeat(daytimeHours) + moon.repeat(nightTimeHours/2);
}

const runTests = require('../../../helpers/runTests');
runTests(getDaytimeHours, [
    `assert.equal(getDaytimeHours(0), "🌑🌑🌑🌑🌑🌑☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️🌑🌑🌑🌑🌑🌑");`,
    `assert.equal(getDaytimeHours(90), "☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️");`,
    `assert.equal(getDaytimeHours(-90), "🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑");`,
    `assert.equal(getDaytimeHours(-33), "🌑🌑🌑🌑🌑🌑🌑🌑☀️☀️☀️☀️☀️☀️☀️☀️🌑🌑🌑🌑🌑🌑🌑🌑");`,
    `assert.equal(getDaytimeHours(66.5), "🌑🌑☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️🌑🌑");`,
    `assert.equal(getDaytimeHours(40), "🌑🌑🌑☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️🌑🌑🌑");`,
    `assert.equal(getDaytimeHours(-50), "🌑🌑🌑🌑🌑🌑🌑🌑🌑☀️☀️☀️☀️☀️☀️🌑🌑🌑🌑🌑🌑🌑🌑🌑");`,
]);
