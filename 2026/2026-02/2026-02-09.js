/*
2026 Winter Games Day 4: Ski Jumping
Given distance points, style points, a wind compensation value, and K-point bonus value, calculate your score for the ski jump and determine if you won a medal or not.

Your score is calculated by summing the above four values.

The current total scores of the other jumpers are:

`sh
165.5
172.0
158.0
180.0
169.5
175.0
162.0
170.0
`

If your score is the best, return "Gold"
If it's second best, return "Silver"
If it's third best, return "Bronze"
Otherwise, return "No Medal"
*/

function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {
    const scores = [165.5,172.0,158.0,180.0,169.5,175.0,162.0,170.0];
    const score = distancePoints+stylePoints+windComp+kPointBonus;
    scores.push(score);
    const place = scores.sort().reverse().findIndex(s => s === score) + 1;
    return place === 1 ? 'Gold' : place === 2 ? 'Silver' : place === 3 ? 'Bronze' : 'No Medal' 
}

const runTests = require('../../helpers/runTests');
runTests(skiJumpMedal, [
    `assert.equal(skiJumpMedal(125.0, 58.0, 0.0, 6.0), "Gold");`,
    `assert.equal(skiJumpMedal(119.0, 50.0, 1.0, 4.0), "Bronze");`,
    `assert.equal(skiJumpMedal(122.0, 52.0, -1.0, 4.0), "Silver");`,
    `assert.equal(skiJumpMedal(118.0, 50.5, -1.5, 4.0), "No Medal");`,
    `assert.equal(skiJumpMedal(124.0, 50.5, 2.0, 5.0), "Gold");`,
    `assert.equal(skiJumpMedal(119.0, 49.5, 0.0, 3.0), "No Medal");`,
]);
