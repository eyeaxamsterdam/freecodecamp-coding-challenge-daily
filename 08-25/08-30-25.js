/*
Array Duplicates
Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.

Only include one instance of each value in the returned array.
*/

function findDuplicates(arr) {
  let finalSet = new Set();

  const countMatch = (a,n) => {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      n === a[i] ? count++ : count
    }
    count > 1 ? finalSet.add(n) : null
  }

  arr.forEach((n) => {
    countMatch(arr,n)
  })

  let finalArray = Array.from(finalSet).sort((a,b)=> a-b)
  
  console.log(finalArray);

  return finalArray;
}


findDuplicates([1, 2, 3, 4, 5]) //should return [].
findDuplicates([1, 2, 3, 4, 1, 2]) //should return [1, 2].
findDuplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4]) //should return [-6, 0, 2, 4, 5, 23].