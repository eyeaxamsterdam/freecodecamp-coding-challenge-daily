/*
FizzBuzz Explosion
Given an integer, return the number of steps it takes to turn the word "fizzbuzz" into a string with at least the given number of "z"'s using the following rules:

Start with the string "fizzbuzz".
Each step, apply the standard FizzBuzz rules using the letter position in the string (the first "f" is position 1).
If the letter position is divisible by 3, replace the letter with "fizz"
If it's divisible by 5, replace the letter with "buzz"
If it's divisible by 3 and 5, replace the letter with "fizzbuzz"
So after 1 step, "fizzbuzz" turns into "fifizzzbuzzfizzzz", which has 9 "z"'s.
*/

function explodeFizzbuzz(targetZCount) {
    let steps = 1;
    const checkLetter = (letter, position) => {
        if (position % 3 + position % 5 === 0) {
            return 'fizzbuzz';
        }
        else if (position % 3 === 0) {
            return 'fizz';
        }
        else if (position % 5 === 0) {
            return 'buzz';
        }
        return letter;
    }

    const fizzbuzz = (str) => {
        let newStr = '';
        const strArr = str.split('');
        strArr.forEach((l,i) => {
            newStr += checkLetter(l,i+1);
        });
        let count = newStr.match(/[z]/g).length;
        if (count < targetZCount) {
            steps++;
            fizzbuzz(newStr);
        }
    }

    fizzbuzz('fizzbuzz');
    return steps;
    
}

const runTests = require('../helpers/runTests');

runTests(explodeFizzbuzz, `
    Waiting:1. explodeFizzbuzz(9) should return 1.
    Waiting:2. explodeFizzbuzz(15) should return 2.
    Waiting:3. explodeFizzbuzz(51) should return 3.
    Waiting:4. explodeFizzbuzz(52) should return 4.
    Waiting:5. explodeFizzbuzz(359) should return 5.
    Waiting:6. explodeFizzbuzz(789) should return 6.
    Waiting:7. explodeFizzbuzz(54482) should return 11.
    Waiting:8. explodeFizzbuzz(1000000) should return 14
    `
);