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


secondLargest([1, 2, 3, 4]) //should return 3.
secondLargest([20, 139, 94, 67, 31]) //should return 94.
secondLargest([2, 3, 4, 6, 6]) //should return 4.
secondLargest([10, -17, 55.5, 44, 91, 0]) //should return 55.5.
secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0]) //should return 0.