/*
cript.jsEditor
JavaScript
Python
Console
Credit Card Validator
Given a string of digits for a credit card number, determine if it's a valid card number using the following method:

Starting from the second-to-last digit, double every other digit moving left.
If doubling a digit results in a number greater than 9, subtract 9.
Sum all the digits (doubled and undoubled).
If the total is divisible by 10, the number is valid.
*/

function isValidCard(number) {
    const digits = number.split('');
    const check = digits.length % 2 === 0 ? 0 : 1;
    const addDigits = digits.reduce((a,b,i) => {
        let digit = Number(b);
        if(i % 2 === check) {
            let double = digit * 2;
            if (double > 9) double -= 9;
            return a + double;
        }
        else return a + digit;
    },0);
    return (addDigits) % 10 === 0;
}

const runTests = require('../helpers/runTests');
runTests(isValidCard, `
    Waiting:1. isValidCard("4532015112830366") should return true.
    Waiting:2. isValidCard("5425233430109903") should return true.
    Waiting:3. isValidCard("371449635398431") should return true.
    Waiting:4. isValidCard("6011111111111117") should return true.
    Waiting:5. isValidCard("4532015112830367") should return false.
    Waiting:6. isValidCard("1234567890123456") should return false.
    Waiting:7. isValidCard("4532015112830368") should return false.
`);