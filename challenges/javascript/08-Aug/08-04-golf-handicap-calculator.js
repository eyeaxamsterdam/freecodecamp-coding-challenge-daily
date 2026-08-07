/*
Golf Handicap Calculator
Given an array of golf scores and a corresponding array of course par values, return the golfer's handicap index using the following method:

Calculate the differential for each round by subtracting the par from the score, then return the average of all differentials rounded to one decimal place.
*/

function calculateHandicap(scores, pars) {
    const differential = scores.reduce((a,b,i) => a + (b - pars[i]),0);
    return (differential/scores.length).toFixed(1);
}

const runTests = require('../../../helpers/runTests');
runTests(calculateHandicap, [
    `assert.equal(calculateHandicap([72, 72, 72], [72, 72, 72]), 0);`,
    `assert.equal(calculateHandicap([80, 76, 78, 78], [72, 72, 72, 72]), 6);`,
    `assert.equal(calculateHandicap([42, 45, 46, 44], [36, 36, 36, 36]), 8.3);`,
    `assert.equal(calculateHandicap([85, 80, 76, 79, 82], [72, 72, 72, 71, 71]), 8.8);`,
    `assert.equal(calculateHandicap([41, 50, 48, 52, 46, 49], [35, 37, 35, 37, 35, 37]), 11.7);`,
]);
