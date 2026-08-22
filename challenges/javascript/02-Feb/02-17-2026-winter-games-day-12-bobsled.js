/*
2026 Winter Games Day 12: Bobsled
Given an array representing the weights of the athletes on a bobsled team and a number representing the weight of the bobsled, determine whether the team is eligible to race.

The length of the array determines the team size: 1, 2 or 4 person teams.
All given weight values are in kilograms (kg).

The bobsled (sled by itself) must have a minimum weight of:

162 kg for a 1-person team
170 kg for a 2-person team
210 kg for a 4-person team

The total weight of the bobsled (athletes plus sled) must not exceed:

247 kg for a 1-person team
390 kg for a 2-person team
630 kg for a 4-person team

Return "Eligible" if the team meets all the requirements, or "Not Eligible" if the team fails to meet one or more of the requirements.

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/02-17
*/

function checkEligibility(athleteWeights, sledWeight) {
    const limits = {
        1: { minSled: 162, maxTotal: 247 },
        2: { minSled: 170, maxTotal: 390 },
        4: { minSled: 210, maxTotal: 630 },
    };
    const { minSled, maxTotal } = limits[athleteWeights.length];
    const total = athleteWeights.reduce((sum, w) => sum + w, 0) + sledWeight;
    return sledWeight >= minSled && total <= maxTotal ? 'Eligible' : 'Not Eligible';
}

const runTests = require('../../../helpers/runTests');
runTests(checkEligibility, [
    `assert.equal(checkEligibility([78], 165), "Eligible");`,
    `assert.equal(checkEligibility([80], 160), "Not Eligible");`,
    `assert.equal(checkEligibility([80], 170), "Not Eligible");`,
    `assert.equal(checkEligibility([85, 90], 170), "Eligible");`,
    `assert.equal(checkEligibility([85, 95], 168), "Not Eligible");`,
    `assert.equal(checkEligibility([112, 97], 185), "Not Eligible");`,
    `assert.equal(checkEligibility([110, 102, 90, 106], 222), "Eligible");`,
    `assert.equal(checkEligibility([106, 99, 90, 88], 205), "Not Eligible");`,
    `assert.equal(checkEligibility([106, 99, 103, 96], 227), "Not Eligible");`,
]);
