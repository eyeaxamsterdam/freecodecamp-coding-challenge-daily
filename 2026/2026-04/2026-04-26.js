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

const runTests = require('../../helpers/runTests');
runTests(explodeFizzbuzz, [
    `assert.equal(explodeFizzbuzz(9), 1);`,
    `assert.equal(explodeFizzbuzz(15), 2);`,
    `assert.equal(explodeFizzbuzz(51), 3);`,
    `assert.equal(explodeFizzbuzz(52), 4);`,
    `assert.equal(explodeFizzbuzz(359), 5);`,
    `assert.equal(explodeFizzbuzz(789), 6);`,
    `assert.equal(explodeFizzbuzz(54482), 11);`,
    `assert.equal(explodeFizzbuzz(1000000), 14);`,
]);
