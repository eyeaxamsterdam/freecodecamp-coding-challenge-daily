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

const runTests = require('../helpers/runTests');
runTests(getDaytimeHours, `
    Waiting 1. getDaytimeHours(0) should return "🌑🌑🌑🌑🌑🌑☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️🌑🌑🌑🌑🌑🌑".
    Waiting:2. getDaytimeHours(90) should return "☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️".
    Waiting:3. getDaytimeHours(-90) should return "🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑".
    Waiting:4. getDaytimeHours(-33) should return "🌑🌑🌑🌑🌑🌑🌑🌑☀️☀️☀️☀️☀️☀️☀️☀️🌑🌑🌑🌑🌑🌑🌑🌑".
    Waiting:5. getDaytimeHours(66.5) should return "🌑🌑☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️🌑🌑".
    Waiting:6. getDaytimeHours(40) should return "🌑🌑🌑☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️🌑🌑🌑".
    Waiting:7. getDaytimeHours(-50) should return "🌑🌑🌑🌑🌑🌑🌑🌑🌑☀️☀️☀️☀️☀️☀️🌑🌑🌑🌑🌑🌑🌑🌑🌑".
`);