/*
2026 Winter Games Day 6: Figure Skating
Given an array of judge scores and optional penalties, calculate the final score for a figure skating routine.

The first argument is an array of 10 judge scores, each a number from 0 to 10. Remove the highest and lowest judge scores and sum the remaining 8 scores to get the base score.

Any additional arguments passed to the function are penalties. Subtract all penalties from the base score to get the final score.
*/

function computeScore(judgeScores, ...penalties) {
    return judgeScores.sort((a,b) => a-b).reduce((a,b,i) => a + ((i !== 0 && i!== judgeScores.length-1) ? b : 0),0) - penalties.reduce((a,b) => a + b, 0);
}

const runTests = require('../../../helpers/runTests');
runTests(computeScore, [
    `assert.equal(computeScore([10, 8, 9, 6, 9, 8, 8, 9, 7, 7], 1), 64);`,
    `assert.equal(computeScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 80);`,
    `assert.equal(computeScore([10, 8, 9, 10, 9, 8, 8, 9, 10, 7], 1, 2, 1), 67);`,
    `assert.equal(computeScore([8.0, 8.5, 9.0, 8.5, 9.0, 8.0, 9.0, 8.5, 9.0, 8.5], 0.5, 1.0), 67.5);`,
    `assert.equal(computeScore([6.0, 8.5, 7.0, 9.0, 7.5, 8.0, 6.5, 9.5, 7.0, 8.0], 1.5, 0.5, 0.5), 59);`,
]);
