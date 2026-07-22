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
isPerfectSquare(9) //should return true.
isPerfectSquare(49) //should return true.
isPerfectSquare(1) //should return true.
isPerfectSquare(2) //should return false.
isPerfectSquare(99) //should return false.
isPerfectSquare(-9) //should return false.
isPerfectSquare(0) //should return true.
isPerfectSquare(25281) //should return true.