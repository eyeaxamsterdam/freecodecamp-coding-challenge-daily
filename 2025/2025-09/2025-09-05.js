/* 
IPv4 Validator
Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:

It is between 0 and 255 inclusive.
It does not have leading zeros (e.g. 0 is allowed, 01 is not).
Only numeric characters are allowed.
*/

function isValidIPv4(ipv4) {
    let isGood;
    const checkLength = (arr) => {
        return arr.length === 4
    }

    const checkRange = (num, min, max) => {
        return num>= min && num <= max;
    }

    const checkZeros = (num) => {
        console.log(num)
    }

    const checkNums = (nums) => {
        
        for (let i = 0; i < nums.length; i++) {
            if (!checkRange(nums[i])) {
                isGood = false;
                break;
            } if (!checkZeros()) {
                isGood = false;
                break;
            }
            else isGood = true;
        }     
    }

    checkNums(ipv4);


  return isGood;
}

//Tests

const runTests = require('../../helpers/runTests');
runTests(isValidIPv4, [
    `assert.isTrue(isValidIPv4("192.168.1.1"));`,
    `assert.isTrue(isValidIPv4("0.0.0.0"));`,
    `assert.isFalse(isValidIPv4("255.01.50.111"));`,
    `assert.isFalse(isValidIPv4("255.00.50.111"));`,
    `assert.isFalse(isValidIPv4("256.101.50.115"));`,
    `assert.isFalse(isValidIPv4("192.168.101."));`,
    `assert.isFalse(isValidIPv4("192168145213"));`,
]);
