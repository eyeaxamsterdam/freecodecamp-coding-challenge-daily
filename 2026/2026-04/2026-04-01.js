/*
Prank Number
Given an array of numbers where all but one number follow a pattern, return a new array with the one number that doesn't follow the pattern fixed.

The pattern will be one of:

The numbers increase from one to the next by a fixed amount (addition).
The numbers decrease from one to the next by a fixed amount (subtraction).
For example, given [2, 4, 7, 8, 10] return [2, 4, 6, 8, 10].
*/

function fixPrankNumber(arr) {
    const n = arr.length;

    // Build an array of consecutive differences, e.g. [2,4,6]
    const diffs = [];
    for (let i = 0; i < n - 1; i++) {
        diffs.push(arr[i + 1] - arr[i]);
    }

    // The correct step is whichever difference appears most often.
    // With only one bad element, at most 2 diffs can be wrong,
    // so the mode is always the real step for arrays of length >= 4.
    const freq = new Map();
    for (const d of diffs) freq.set(d, (freq.get(d) || 0) + 1);
    let step = diffs[0], maxFreq = 0;
    for (const [d, count] of freq) {
        if (count > maxFreq) { maxFreq = count; step = d; }
    }

    // Walk the diffs until we find the first one that breaks the pattern.
    // Then figure out which of the two elements around that diff is the bad one:
    //   - If the break is at index 0 and the NEXT diff is fine, arr[0] is bad.
    //   - Otherwise, arr[i+1] is bad (it broke this diff and the next one).
    console.log('Input:', arr);
    console.log('Diffs:', diffs);
    console.log('Step (mode):', step);

    const result = [...arr];
    for (let i = 0; i < diffs.length; i++) {
        if (diffs[i] !== step) {
            console.log(`Bad diff at index ${i}: expected ${step}, got ${diffs[i]} (between arr[${i}]=${arr[i]} and arr[${i+1}]=${arr[i+1]})`);
            if (i === 0 && diffs.length > 1 && diffs[1] === step) {
                console.log(`  → fixing arr[0]: ${arr[0]} → ${arr[1] - step}`);
                result[0] = arr[1] - step;
            } else {
                console.log(`  → fixing arr[${i+1}]: ${arr[i+1]} → ${arr[i] + step}`);
                result[i + 1] = arr[i] + step;
            }
            break;
        }
    }

    console.log('Result:', result);
    return result;
}

const runTests = require('../../helpers/runTests');
runTests(fixPrankNumber, [
    `assert.deepEqual(fixPrankNumber([2, 4, 7, 8, 10]), [2, 4, 6, 8, 10]);`,
    `assert.deepEqual(fixPrankNumber([10, 10, 8, 7, 6]), [10, 9, 8, 7, 6]);`,
    `assert.deepEqual(fixPrankNumber([12, 24, 36, 48, 61, 72, 84, 96]), [12, 24, 36, 48, 60, 72, 84, 96]);`,
    `assert.deepEqual(fixPrankNumber([4, 1, -2, -5, -8, -5]), [4, 1, -2, -5, -8, -11]);`,
    `assert.deepEqual(fixPrankNumber([0, 100, 200, 300, 150, 500]), [0, 100, 200, 300, 400, 500]);`,
    `assert.deepEqual(fixPrankNumber([400, 425, 400, 375, 350, 325, 300]), [450, 425, 400, 375, 350, 325, 300]);`,
    `assert.deepEqual(fixPrankNumber([-5, 5, 10, 15, 20]), [0, 5, 10, 15, 20]);`,
]);
