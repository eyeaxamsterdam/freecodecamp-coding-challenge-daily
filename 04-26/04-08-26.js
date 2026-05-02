/*
FizzBuzz Validator
Given an array of sequential integers, with multiples of 3 and 5 replaced, determine if it's a valid FizzBuzz sequence.

In a valid FizzBuzz sequence:

Multiples of 3 are replaced with "Fizz".
Multiples of 5 are replaced with "Buzz".
Multiples of both 3 and 5 are replaced with "FizzBuzz".
All other numbers remain as integers.
*/

function isFizzBuzz(arr) {
    // find first instance of integer
    const i = arr.findIndex(n => !isNaN(n));
    // map to new array replace words with numbers
    // by referencing the first number found and adding or subtracting depending on how far away from it you are.
    const nums = arr.map((_, j) => arr[i] + (j - i));

    //rebuild the fizzbuzz array
    const fizzed = nums.map(n => {
        if (n % 15 === 0) return 'FizzBuzz';
        if (n % 3 === 0) return 'Fizz';
        if (n % 5 === 0) return 'Buzz';
        return n;
    });
    // compare the rebuilt array to the original
    return fizzed.join(',') === arr.join(',');
}

const runTests = require('../helpers/runTests');
runTests(isFizzBuzz, `
    Waiting:1. isFizzBuzz([1, 2, "Fizz", 4, "Buzz"]) should return true.
    Waiting:2. isFizzBuzz([13, 14, "FizzBuzz", 16, 17]) should return true. 
    Waiting:3. isFizzBuzz([1, 2, "Fizz", 4, 5]) should return false.
    Waiting:4. isFizzBuzz(["FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]) should return true.
    Waiting:5. isFizzBuzz([1, 2, "Fizz", "Buzz", 5]) should return false.
    Waiting:6. isFizzBuzz([97, 98, "Buzz", "Fizz", 101, "Fizz", 103]) should return false.
    Waiting:7. isFizzBuzz(["Fizz", "Buzz", 101, "Fizz", 103, 104, "FizzBuzz"]) should return true.
    `);