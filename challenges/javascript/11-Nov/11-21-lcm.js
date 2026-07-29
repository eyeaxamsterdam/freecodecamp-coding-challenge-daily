/*
LCM
Given two integers, return the least common multiple (LCM) of the two numbers.

The LCM of two numbers is the smallest positive integer that is a multiple of both numbers. For example, given 4 and 6, return 12 because:

Multiples of 4 are 4, 8, 12 and so on.
Multiples of 6 are 6, 12, 18 and so on.
12 is the smallest number that is a multiple of both.
*/

function lcm(a, b) {
  let low = a;
  let high = b;

  while (low !== high) {
    if (low < high) {
      low += a;
    } else {
      high += b;
    }
  }

  return low;
}

//Tests

const runTests = require('../../../helpers/runTests');
runTests(lcm, [
    `assert.equal(lcm(4, 6), 12);`,
    `assert.equal(lcm(9, 6), 18);`,
    `assert.equal(lcm(10, 100), 100);`,
    `assert.equal(lcm(13, 17), 221);`,
    `assert.equal(lcm(45, 70), 630);`,
]);
