/*
Kaprekar's Routine
Given a 4-digit number, return the number of times you need to apply Kaprekar's routine until reaching 6174.

Kaprekar's routine works as follows:

Arrange the digits in descending order to form the largest number
Arrange the digits in ascending order to form the smallest number (pad with leading zeros if necessary)
Subtract the smaller from the larger
Repeat with the new number
*/

function kaprekar(n) {
    let count = 0;
    let num = n;
    while (num !== 6174) {
        let numArray = num.toString().split('');
        let asc = Number(numArray.sort().join(''))
        let desc = Number(numArray.sort((a,b) => b-a).join(''));
        let difference = desc-asc;
        count++
        num = difference;
    }
    return count; 
}

const runTests = require('../../../helpers/runTests');
runTests(kaprekar, [
    `assert.equal(kaprekar(1234), 3);`,
    `assert.equal(kaprekar(2025), 6);`,
    `assert.equal(kaprekar(7173), 4);`,
    `assert.equal(kaprekar(3164), 7);`,
    `assert.equal(kaprekar(8082), 2);`,
]);
