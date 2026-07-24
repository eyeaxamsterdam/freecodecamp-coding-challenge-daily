/*
Array Insertion
Given an array, a value to insert into the array, and an index to insert the value at, return a new array with the value inserted at the specified index.
*/

function insertIntoArray(arr, value, index) {
    const part1 = arr.slice(0, index);
    const part2 = arr.slice(index);
    return part1.concat(value,part2);
}
const runTests = require('../../helpers/runTests');
runTests(insertIntoArray, `
    insertIntoArray([2, 4, 8, 10], 6, 2) should return [2, 4, 6, 8, 10].
    insertIntoArray(["the", "quick", "fox"], "brown", 2) should return ["the", "quick", "brown", "fox"].
    insertIntoArray([], 0, 0) should return [0].
    insertIntoArray([0, 1, 1, 2, 3, 8, 13], 5, 5) should return [0, 1, 1, 2, 3, 5, 8, 13].
`);