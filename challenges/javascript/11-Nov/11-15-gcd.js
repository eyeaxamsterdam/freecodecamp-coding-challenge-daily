/*GCD
Given two positive integers, return their greatest common divisor (GCD).

The GCD of two integers is the largest number that divides evenly into both numbers without leaving a remainder.
For example, the divisors of 4 are 1, 2, and 4. The divisors of 6 are 1, 2, 3, and 6. So given 4 and 6, return 2, the largest number that appears in both sets of divisors.
*/

function gcd(x, y) {
  let xfactors = [];
  let yfactors = [];
  let highestNum = 1;
  
  const GCD = (n, v) => {
    for (let i = 2; i <= n/2; i++) {
      n % i === 0 && v.push(i);
    }
    v.push(n);
  }

  const findCommon = (arr1, arr2) => {
    arr1.forEach(num => (arr2.includes(num) && highestNum = num))
  }

  GCD(x, xfactors);
  GCD(y, yfactors);
  findCommon(xfactors,yfactors)

  console.log('highestNum ', highestNum)
  return highestNum;
}

//Tests

const runTests = require('../../../helpers/runTests');
runTests(gcd, [
    `assert.equal(gcd(4, 6), 2);`,
    `assert.equal(gcd(20, 15), 5);`,
    `assert.equal(gcd(13, 17), 1);`,
    `assert.equal(gcd(654, 456), 6);`,
    `assert.equal(gcd(3456, 4320), 864);`,
]);
