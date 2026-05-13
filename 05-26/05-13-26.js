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

const runTests = require('../helpers/runTests');
runTests(findOffender, `
    Waiting:1. findOffender([1, 6, 2, 3, 8, 20]) should return 1.
    Waiting:2. findOffender([1, 2, 3, 5, 4, 5]) should return 3.
    Waiting:3. findOffender([2, 1]) should return 0.
    Waiting:4. findOffender([2, 4, 1, 6, 8]) should return 2.
    Waiting:5. findOffender([5, 18, 24, 33, 40, 55, 15, 68, 84, 91]) should return 6.
`);