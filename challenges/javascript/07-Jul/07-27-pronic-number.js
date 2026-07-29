/*
Pronic Number
Given a number, determine whether it is a pronic number.

A pronic number is the product of two consecutive integers. For example, 6 is pronic because 2 * 3 = 6.
*/

function isPronic(n) {
    if (n === 0) return true;
    for (let i = 2; i < Math.ceil(n/2); i++) {
        if (i * (i + 1) === n) {
            return true;
        }
    }
    return false;
}

const runTests = require('../../../helpers/runTests');
runTests(isPronic, [
    `assert.isTrue(isPronic(6));`,
    `assert.isFalse(isPronic(15));`,
    `assert.isTrue(isPronic(12));`,
    `assert.isTrue(isPronic(132));`,
    `assert.isFalse(isPronic(80));`,
    `assert.isTrue(isPronic(0));`,
]);
