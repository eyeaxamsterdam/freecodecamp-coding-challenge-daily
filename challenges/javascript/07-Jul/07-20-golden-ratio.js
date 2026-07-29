/*
Golden Ratio
Given two numbers, determine if their ratio approximates the golden ratio.

Use a golden ratio of 1.618
Allow a tolerance of 0.01
*/

function isGoldenRatio(a, b) {
    const tolerance = .01;
    const ratio = 1.618;
    const low = ratio - tolerance;
    const high = ratio + tolerance;
    let divide = b > a ? b/a : a/b;
    const target = (n) => n >= low &&  n <= high;
    const response  = target(divide);
    return response;
}

const runTests = require('../../../helpers/runTests');
runTests(isGoldenRatio, [
    `assert.isTrue(isGoldenRatio(21, 34));`,
    `assert.isFalse(isGoldenRatio(15, 20));`,
    `assert.isTrue(isGoldenRatio(8, 13));`,
    `assert.isFalse(isGoldenRatio(10, 16));`,
    `assert.isTrue(isGoldenRatio(1618, 1000));`,
    `assert.isFalse(isGoldenRatio(88, 55));`,
]);
