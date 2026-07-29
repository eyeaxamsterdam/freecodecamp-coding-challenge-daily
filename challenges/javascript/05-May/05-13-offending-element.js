/*
Offending Element
Given an array of integers that is sorted in ascending order except for one out-of-place element, return the index of that element.

If more than one element could be considered out of place, return the index of the first one.
*/

function findOffender(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      console.log(arr[i]);
      const canRemoveI = i === 0 || arr[i - 1] <= arr[i + 1];
      const canRemoveNext = i + 2 >= arr.length || arr[i] <= arr[i + 2];
      if (canRemoveI) return i;
      if (canRemoveNext) return i + 1;
    }
  }
  return -1;
}

const runTests = require('../../../helpers/runTests');
runTests(findOffender, [
    `assert.equal(findOffender([1, 6, 2, 3, 4, 5]), 1);`,
    `assert.equal(findOffender([1, 2, 3, 5, 4, 5]), 3);`,
    `assert.equal(findOffender([2, 1]), 0);`,
    `assert.equal(findOffender([2, 4, 1, 6, 8]), 2);`,
    `assert.equal(findOffender([5, 18, 24, 33, 40, 55, 15, 68, 84, 91]), 6);`,
]);
