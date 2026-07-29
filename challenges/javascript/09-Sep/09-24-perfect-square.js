/* 
Perfect Square
Given an integer, determine if it is a perfect square.

A number is a perfect square if you can multiply an integer by itself to achieve the number. For example, 9 is a perfect square because you can multiply 3 by itself to get it.
*/

function isPerfectSquare(n) {
  const sqrt = Math.sqrt(n);
  const isInt = Number.isInteger(sqrt);
  console.log(isInt);
  return isInt;
}

//Tests

const runTests = require('../../../helpers/runTests');
runTests(isPerfectSquare, [
    `assert.isTrue(isPerfectSquare(9));`,
    `assert.isTrue(isPerfectSquare(49));`,
    `assert.isTrue(isPerfectSquare(1));`,
    `assert.isFalse(isPerfectSquare(2));`,
    `assert.isFalse(isPerfectSquare(99));`,
    `assert.isFalse(isPerfectSquare(-9));`,
    `assert.isTrue(isPerfectSquare(0));`,
    `assert.isTrue(isPerfectSquare(25281));`,
]);
