/* 
IPv4 Validator
Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:

It is between 0 and 255 inclusive.
It does not have leading zeros (e.g. 0 is allowed, 01 is not).
Only numeric characters are allowed.
*/

function isValidIPv4(ipv4) {
    let ipArr = ipv4.split('.').filter(n => n!== '');
    if (ipArr.length !== 4) {
        console.log('bad length');
        return false;
    }
    let isValid = ipArr.every(num => {
        console.log('num ', num, ' length ', num.length, ' num[0] ', num[0])
        console.log('num.length over 1? ', num.length > 1, 'num[0] === "0"', num[0] === '0')
        if (!(num >= 0 && num <= 255)) {
            console.log('range bad');
            return false;
        }
        if (num.length > 1 && num[0] === '0')  {
            console.log('leading zero');
            return false;
        }
        if (!Number.isInteger(Number(num))) {
            console.log('not a number')
            return false;
        }
        return true;
    })
    return isValid; 
}

//Tests

const runTests = require('../../../helpers/runTests');
runTests(isValidIPv4, [
    `assert.isTrue(isValidIPv4("192.168.1.1"));`,
    `assert.isTrue(isValidIPv4("0.0.0.0"));`,
    `assert.isFalse(isValidIPv4("255.01.50.111"));`,
    `assert.isFalse(isValidIPv4("255.00.50.111"));`,
    `assert.isFalse(isValidIPv4("256.101.50.115"));`,
    `assert.isFalse(isValidIPv4("192.168.101."));`,
    `assert.isFalse(isValidIPv4("192168145213"));`,
]);
