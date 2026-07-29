/*
Unique Stair Climber
Given a number of stairs, return how many distinct ways someone can climb them taking either 1 or 2 steps at a time.
*/

function getUniqueClimbs(steps) {
    let firstPrevStep = 2;
    let secondPrevStep = 1;
    if (steps < 3) return steps;
    let totalSteps = 0;

    for (let i = 3; i <= steps; i++) {
        totalSteps = firstPrevStep + secondPrevStep;
        secondPrevStep = firstPrevStep;
        firstPrevStep = totalSteps;
    }
    console.log(totalSteps);
    return totalSteps;
}

//Tests:

const runTests = require('../../../helpers/runTests');
runTests(getUniqueClimbs, [
    `assert.equal(getUniqueClimbs(4), 5);`,
    `assert.equal(getUniqueClimbs(5), 8);`,
    `assert.equal(getUniqueClimbs(10), 89);`,
    `assert.equal(getUniqueClimbs(18), 4181);`,
    `assert.equal(getUniqueClimbs(29), 832040);`,
    `assert.equal(getUniqueClimbs(50), 20365011074);`,
]);
