/*
2nd Largest
Given an array, return the second largest distinct number.
*/

function secondLargest(arr) {
  let mySet = new Set(arr)
  let arrangedArr = [...mySet].sort((a,b)=>b-a);
  let response = arrangedArr[1]
  console.log(response);
  return response;
}

const runTests = require('../../../helpers/runTests');
runTests(secondLargest, [
    `assert.equal(secondLargest([1, 2, 3, 4]), 3);`,
    `assert.equal(secondLargest([20, 139, 94, 67, 31]), 94);`,
    `assert.equal(secondLargest([2, 3, 4, 6, 6]), 4);`,
    `assert.equal(secondLargest([10, -17, 55.5, 44, 91, 0]), 55.5);`,
    `assert.equal(secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0]), 0);`,
]);
