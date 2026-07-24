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

arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]) //should return ["cherry"].
arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"]) //should return ["cherry"].
arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]) //should return ["eight", "four", "six", "two"].
arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]) //should return ["five", "one", "seven", "three"].
arrayDiff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]) //should return ["freeCodeCamp", "rocks"].