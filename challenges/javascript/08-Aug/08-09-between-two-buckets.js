/*
Between Two Buckets
Given two buckets of paint, each with an RGB color and a fullness level, return the mixed RGB color as an array of three integers.

Each bucket is an object (JavaScript) or dictionary (Python) with a color property (an array of three integers [r, g, b]) and a fullness property (0–100).
The mixed color is a weighted average of each channel in the two colors based on fullness level, with each channel rounded to the nearest integer.

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/08-09
*/

function mixPaint(bucket1, bucket2) {
    const total = bucket1.fullness + bucket2.fullness;
    return bucket1.color.map((c, i) => 
        Math.round((c * bucket1.fullness + bucket2.color[i] * bucket2.fullness) / total)
    );
}


const runTests = require('../../../helpers/runTests');
runTests(mixPaint, [
    `assert.deepEqual(mixPaint({ color: [250, 250, 250], fullness: 50 }, { color: [0, 0, 0], fullness: 50 }), [125, 125, 125]);`,
    `assert.deepEqual(mixPaint({ color: [250, 250, 250], fullness: 80 }, { color: [0, 0, 0], fullness: 20 }), [200, 200, 200]);`,
    `assert.deepEqual(mixPaint({ color: [100, 150, 200], fullness: 30 }, { color: [100, 150, 200], fullness: 70 }), [100, 150, 200]);`,
    `assert.deepEqual(mixPaint({ color: [143, 143, 101], fullness: 45 }, { color: [100, 204, 204], fullness: 90 }), [114, 184, 170]);`,
    `assert.deepEqual(mixPaint({ color: [15, 134, 249], fullness: 29 }, { color: [97, 178, 55], fullness: 54 }), [68, 163, 123]);`,
]);
