/*
ISBN-10 Validator
Given a string, determine if it's a valid ISBN-10.

An ISBN-10 consists of hyphens ("-") and 10 other characters. After removing the hyphens ("-"):

The first 9 characters must be digits, and
The final character may be a digit or the letter "X", which represents the number 10.
To validate it:

Multiply each digit (or value) by its position (multiply the first digit by 1, the second by 2, and so on).
Add all the results together.
If the total is divisible by 11, it's valid.
*/

function isValidIsbn10(str) {
    const numStr = str.split('-').join('');
    if (!Number(numStr.slice(0,9))) return false;
    const lastDig = numStr.slice(9);
    if (lastDig !== 'X' && !Number(lastDig)) return false;
    const check = numStr.split('').reduce((a,b,i) => {
        const nextNum = b === 'X' ? 10 : Number(b);
        return a + (nextNum*(i+1));
    }, 0) % 11
    return check === 0;
}

const runTests = require('../helpers/runTests');
runTests(isValidIsbn10, `
    Waiting:1. isValidIsbn10("0-306-40615-2") should return true.
    Waiting:2. isValidIsbn10("0-306-40615-1") should return false.
    Waiting:3. isValidIsbn10("0-8044-2957-X") should return true.
    Waiting:4. isValidIsbn10("X-306-40615-2") should return false.
    Waiting:5. isValidIsbn10("0-6822-2589-4") should return true.
`);