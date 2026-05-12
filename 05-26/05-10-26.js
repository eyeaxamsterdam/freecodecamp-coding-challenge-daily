/*
ISBN-13 Validator
Given a string, determine if it is a valid ISBN-13 number.

A valid ISBN-13:

Contains only digits and hyphens
Has exactly 13 digits after removing hyphens
Passes the following check:
Multiply each digit by 1 or 3, alternating (multiply the first digit by 1, the second by 3, the third by 1, and so on).
The sum of the results must be divisible by 10.
*/

function isValidIsbn13(str) {
    let numArr = str.match(/[0-9]/g);
    if (!numArr.length === 13) return false;
    let sum = numArr.reduce((a,b) => a+b, 0);
    console.log('sum ',sum);

    return str;
}

const runTests = require('../helpers/runTests');
runTests(isValidIsbn13, `
    Waiting:1. isValidIsbn13("9780306406157") should return true.
    Waiting:3. isValidIsbn13("978-0-13-595705-9") should return true.
`);
/*     Waiting:2. isValidIsbn13("97803064061570") should return false.
    Waiting:4. isValidIsbn13("978-030-64061A-4") should return false.
    Waiting:5. isValidIsbn13("9-7-8-0-1-3-4-7-5-7-5-9-9") should return true. */