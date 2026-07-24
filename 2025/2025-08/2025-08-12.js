/*
Base Check
Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.

The string may contain integers, and uppercase or lowercase characters.
The check should be case-insensitive.
The base can be any number 2-36.
A number is valid if every character is a valid digit in the given base.
Example of valid digits for bases:
Base 2: 0-1
Base 8: 0-7
Base 10: 0-9
Base 16: 0-9 and A-F
Base 36: 0-9 and A-Z
*/

function isValidNumber(n, base) {
    if (!/^[0-9a-z]+$/i.test(n)) return false;
    const BASE = base => {
        let baseArr = [[],[]];
        if (base <= 10) baseArr[0].push(0, base - 1); 
        else baseArr[0].push(0,9);
        if (base > 10) baseArr[1].push('A',String.fromCharCode(base+54));
        return baseArr;
    }
    return n.split('').every(digit => { 
        const isValid = BASE(base).find(range => digit.toUpperCase() >= range[0] && digit.toUpperCase() <= range[1]);
        return isValid;
    });
}

const runTests = require('../../helpers/runTests');
runTests(isValidNumber, `
    Waiting:1. isValidNumber("10101", 2) should return true.
    Waiting:2. isValidNumber("10201", 2) should return false.
    Waiting:3. isValidNumber("76543210", 8) should return true.
    Waiting:4. isValidNumber("9876543210", 8) should return false.
    Waiting:5. isValidNumber("9876543210", 10) should return true.
    Waiting:6. isValidNumber("ABC", 10) should return false.
    Waiting:7. isValidNumber("ABC", 16) should return true.
    Waiting:8. isValidNumber("Z", 36) should return true.
    Waiting:9. isValidNumber("ABC", 20) should return true.
    Waiting:10. isValidNumber("4B4BA9", 16) should return true.
    Waiting:11. isValidNumber("5G3F8F", 16) should return false.
    Waiting:12. isValidNumber("5G3F8F", 17) should return true.
    Waiting:13. isValidNumber("abc", 10) should return false.
    Waiting:14. isValidNumber("abc", 16) should return true.
    Waiting:15. isValidNumber("AbC", 16) should return true.
    Waiting:16. isValidNumber("z", 36) should return true.
`);