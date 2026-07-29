/*
2026 Winter Games Day 3: Biathlon
Given an array of integers, where each value represents the number of targets hit in a single round of a biathlon, return the total penalty distance the athlete must ski.

Each round consists of 5 targets.
Each missed target results in a 150 meter penalty loop.
*/

function calculatePenaltyDistance(rounds) {
    return rounds.reduce((a,b) => a + 5-b,0) * 150;
}

const runTests = require('../../helpers/runTests');
runTests(calculatePenaltyDistance, [
    `assert.equal(calculatePenaltyDistance([4, 4]), 300);`,
    `assert.equal(calculatePenaltyDistance([5, 5]), 0);`,
    `assert.equal(calculatePenaltyDistance([4, 5, 3, 5]), 450);`,
    `assert.equal(calculatePenaltyDistance([5, 4, 5, 5]), 150);`,
    `assert.equal(calculatePenaltyDistance([4, 3, 0, 3]), 1500);`,
]);
