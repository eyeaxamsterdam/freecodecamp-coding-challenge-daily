/*
Nearest Multiple
Given two integers, round the first to the nearest multiple of the second
*/

function roundToNearestMultiple(num, multiple) {
    const low = Math.floor(num / multiple) * multiple;
    const high = low + multiple;
    return (num - low) < (high - num) ? low : high;
}

const runTests = require('../../helpers/runTests');
runTests(roundToNearestMultiple, [
    `assert.equal(roundToNearestMultiple(5, 3), 6);`,
    `assert.equal(roundToNearestMultiple(17, 4), 16);`,
    `assert.equal(roundToNearestMultiple(43, 5), 45);`,
    `assert.equal(roundToNearestMultiple(38, 11), 33);`,
    `assert.equal(roundToNearestMultiple(93, 12), 96);`,
]);
