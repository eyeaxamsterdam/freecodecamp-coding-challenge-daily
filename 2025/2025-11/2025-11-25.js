/*
Given an integer (n), return an array of integers from 1 to n (inclusive), replacing numbers that are multiple of:

3 with "Fizz".
5 with "Buzz".
3 and 5 with "FizzBuzz".
*/

function fizzBuzz(n) {
    let fizz;
    let buzz;
    let num;
    let numArr = [];
    for (let i = 1; i <= n; i++) { 
        fizz = (i % 3) === 0;
        buzz = (i % 5) === 0;
        num = fizz && buzz ? 'FizzBuzz' : fizz ? 'Fizz' : buzz ? 'Buzz' : i; 
        numArr.push(num)
    }
    return numArr;
}

//Tests

const runTests = require('../../helpers/runTests');
runTests(fizzBuzz, [
    `assert.deepEqual(fizzBuzz(2), [1, 2]);`,
    `assert.deepEqual(fizzBuzz(4), [1, 2, "Fizz", 4]);`,
    `assert.deepEqual(fizzBuzz(8), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8]);`,
    `assert.deepEqual(fizzBuzz(20), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]);`,
    `assert.deepEqual(fizzBuzz(50), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"]);`,
]);
