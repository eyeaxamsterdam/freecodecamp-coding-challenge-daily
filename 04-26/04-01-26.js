/*
Prank Number
Given an array of numbers where all but one number follow a pattern, return a new array with the one number that doesn't follow the pattern fixed.

The pattern will be one of:

The numbers increase from one to the next by a fixed amount (addition).
The numbers decrease from one to the next by a fixed amount (subtraction).
For example, given [2, 4, 7, 8, 10] return [2, 4, 6, 8, 10].
*/

function fixPrankNumber(arr) {

    let forward = [];
    let back = [];

    for(let i = 0; i < arr.length; i++) {
        if(i > 0) back.push(arr[i] - arr[i - 1]);
        if (i < arr.length - 1) forward.push(arr[i] - arr[i+1]);
        if (back.length > 0) {
            console.log('back: ',back);
        }
        if (forward.length > 0) {
            console.log('forward ',forward);
        }
    }

    return arr;

}

const runTests = require('../helpers/runTests');
runTests(fixPrankNumber, `
    Waiting:1. fixPrankNumber([2, 4, 7, 8, 10]) should return [2, 4, 6, 8, 10].
    Waiting:2. fixPrankNumber([10, 10, 8, 7, 6]) should return [10, 9, 8, 7, 6].
    Waiting:3. fixPrankNumber([12, 24, 36, 48, 61, 72, 84, 96]) should return [12, 24, 36, 48, 60, 72, 84, 96].
    Waiting:4. fixPrankNumber([4, 1, -2, -5, -8, -5]) should return [4, 1, -2, -5, -8, -11].
    Waiting:5. fixPrankNumber([0, 100, 200, 300, 150, 500]) should return [0, 100, 200, 300, 400, 500].
    Waiting:6. fixPrankNumber([400, 425, 400, 375, 350, 325, 300]) should return [450, 425, 400, 375, 350, 325, 300].
    Waiting:7. fixPrankNumber([-5, 5, 10, 15, 20]) should return [0, 5, 10, 15, 20].
`);