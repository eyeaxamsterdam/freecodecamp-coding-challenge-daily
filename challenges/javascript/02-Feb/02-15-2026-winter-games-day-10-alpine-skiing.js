/*
2026 Winter Games Day 10: Alpine Skiing
Given a ski hill's vertical drop, horizontal distance, and type, determine the difficulty rating of the hill.

To determine the rating:

Calculate the steepness of the hill by taking the drop divided by the distance.
Then, calculate the adjusted steepness based on the hill type:
"Downhill": multiply steepness by 1.2
"Slalom": multiply steepness by 0.9
"Giant Slalom": multiply steepness by 1.0

Return:

"Green" if the adjusted steepness is less than or equal to 0.1
"Blue" if the adjusted steepness is greater than 0.1 and less than or equal to 0.25
"Black" if the adjusted steepness is greater than 0.25
*/

function getHillRating(drop, distance, type) {
    const multipliers = { 'Downhill': 1.2, 'Slalom': 0.9, 'Giant Slalom': 1.0 };
    const steepness = (drop / distance) * multipliers[type];
    if (steepness <= 0.1) return 'Green';
    if (steepness <= 0.25) return 'Blue';
    return 'Black';
}

const runTests = require('../../../helpers/runTests');
runTests(getHillRating, [
    `assert.equal(getHillRating(95, 900, "Slalom"), "Green");`,
    `assert.equal(getHillRating(620, 2800, "Downhill"), "Black");`,
    `assert.equal(getHillRating(420, 1680, "Giant Slalom"), "Blue");`,
    `assert.equal(getHillRating(250, 3000, "Downhill"), "Green");`,
    `assert.equal(getHillRating(110, 900, "Slalom"), "Blue");`,
    `assert.equal(getHillRating(380, 1500, "Giant Slalom"), "Black");`,
]);
