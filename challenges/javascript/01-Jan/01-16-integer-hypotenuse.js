/*
Integer Hypotenuse
Given two positive integers representing the lengths for the two legs (the two short sides) of a right triangle, determine whether the hypotenuse is an integer.

The length of the hypotenuse is calculated by adding the squares of the two leg lengths together and then taking the square root of that total (a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>).
*/

function isIntegerHypotenuse(a, b) {

}

const runTests = require('../../../helpers/runTests');
runTests(isIntegerHypotenuse, [
    `assert.isTrue(isIntegerHypotenuse(3, 4));`,
    `assert.isFalse(isIntegerHypotenuse(2, 3));`,
    `assert.isTrue(isIntegerHypotenuse(5, 12));`,
    `assert.isFalse(isIntegerHypotenuse(10, 10));`,
    `assert.isTrue(isIntegerHypotenuse(780, 1040));`,
    `assert.isFalse(isIntegerHypotenuse(250, 333));`,
]);
