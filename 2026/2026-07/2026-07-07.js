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
runTests(roundToNearestMultiple, `
    Waiting:1. roundToNearestMultiple(5, 3) should return 6.
    Waiting:2. roundToNearestMultiple(17, 4) should return 16.
    Waiting:3. roundToNearestMultiple(43, 5) should return 45.
    Waiting:4. roundToNearestMultiple(38, 11) should return 33.
    Waiting:5. roundToNearestMultiple(93, 12) should return 96.
`);
