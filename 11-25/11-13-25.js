/*
Array Shift
Given an array and an integer representing how many positions to shift the array, return the shifted array.

A positive integer shifts the array to the left.
A negative integer shifts the array to the right.
The shift wraps around the array.
For example, given [1, 2, 3] and 1, shift the array 1 to the left, returning [2, 3, 1].
*/

function shiftArray(arr, n) {
    let adjustedIndex = n%arr.length;
    let newArr = [];
    newArr.push(arr.slice(adjustedIndex));
    newArr.push(arr.slice(0,adjustedIndex));
    console.log(newArr.flat());
    return newArr.flat();
}

//Tests
shiftArray([1, 2, 3], 1) //should return [2, 3, 1].
shiftArray([1, 2, 3], -1) //should return [3, 1, 2].
shiftArray(["alpha", "bravo", "charlie"], 5) //should return ["charlie", "alpha", "bravo"].
shiftArray(["alpha", "bravo", "charlie"], -11) //should return ["bravo", "charlie", "alpha"].
shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15) //should return [5, 6, 7, 8, 9, 0, 1, 2, 3, 4].