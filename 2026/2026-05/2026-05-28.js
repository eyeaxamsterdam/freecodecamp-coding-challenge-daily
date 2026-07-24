/*
FizzBuzz Count
Given a start and end number, count the number of fizz and buzz appearances in the range (inclusive).

Numbers divisible by 3 count as a fizz.
Numbers divisible by 5 count as a buzz.
Numbers divisible by both 3 and 5 count as both a fizz and a buzz.
Return an object or dictionary with the counts in the format: { fizz, buzz }.
*/


function fizzBuzzCount(start, end) {
    let num = start;
    let varFizz = 0;
    let varBuzz = 0; 
    while (num <= end) {
        if (num%3 === 0) varFizz++
        if (num%5 === 0) varBuzz++
        num++;
    } 
    return {fizz: varFizz, buzz: varBuzz };
}

const runTests = require('../../helpers/runTests');
runTests(fizzBuzzCount, [
    `assert.deepEqual(fizzBuzzCount(1, 11), {fizz: 3, buzz: 2});`,
    `assert.deepEqual(fizzBuzzCount(14, 41), {fizz: 9, buzz: 6});`,
    `assert.deepEqual(fizzBuzzCount(24, 100), {fizz: 26, buzz: 16});`,
    `assert.deepEqual(fizzBuzzCount(-635, -14), {fizz: 207, buzz: 125});`,
    `assert.deepEqual(fizzBuzzCount(-5432, 6789), {fizz: 4074, buzz: 2444});`,
]);
