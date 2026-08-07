/*
Daylight Hours
December 21st is the winter solstice for the northern hemisphere and the summer solstice for the southern hemisphere. That means it's the day with the least daylight in the north and the most daylight in the south.

Given a latitude number from -90 to 90, return a rough approximation of daylight hours on the solstice using the following table:

|Latitude|Daylight Hours|
|-|-|
|-90|24|
|-75|23|
|-60|21|
|-45|15|
|-30|13|
|-15|12|
|0|12|
|15|11|
|30|10|
|45|9|
|60|6|
|75|2|
|90|0|

If the given latitude does not exactly match a table entry, use the value of the closest latitude.
*/

function daylightHours(latitude) {
    const table = [[-90, 24], [-75, 23], [-60, 21], [-45, 15], [-30, 13], [-15, 12], [0, 12], [15, 11], [30, 10], [45, 9], [60, 6], [75, 2], [90, 0]];
    return table.reduce((closest, entry) =>
        Math.abs(entry[0] - latitude) < Math.abs(closest[0] - latitude) ? entry : closest
    )[1];
}

const runTests = require('../../../helpers/runTests');
runTests(daylightHours, [
    `assert.equal(daylightHours(45), 9);`,
    `assert.equal(daylightHours(0), 12);`,
    `assert.equal(daylightHours(-90), 24);`,
    `assert.equal(daylightHours(-10), 12);`,
    `assert.equal(daylightHours(23), 10);`,
    `assert.equal(daylightHours(88), 0);`,
    `assert.equal(daylightHours(-33), 13);`,
    `assert.equal(daylightHours(70), 2);`,
]);
