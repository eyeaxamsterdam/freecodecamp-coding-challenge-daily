/* 
Array Diff
Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

The returned array should be sorted in alphabetical order.
*/

function arrayDiff(arr1, arr2) {
  let arr3 = []

  const compareArrs = (arr1,arr2) => {
    arr1.forEach(item => {
      !arr2.includes(item) && arr3.push(item);
    });
  }

  compareArrs(arr1,arr2);
  compareArrs(arr2,arr1)

  console.log(arr3.sort())
  
  return arr3.sort();
}

const runTests = require('../../../helpers/runTests');
runTests(arrayDiff, [
    `assert.deepEqual(arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]), ["cherry"]);`,
    `assert.deepEqual(arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"]), ["cherry"]);`,
    `assert.deepEqual(arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]), ["eight", "four", "six", "two"]);`,
    `assert.deepEqual(arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]), ["five", "one", "seven", "three"]);`,
    `assert.deepEqual(arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]), ["freeCodeCamp", "rocks"]);`,
]);
