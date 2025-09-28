/*
Spam Detector
Given a phone number in the format "+A (BBB) CCC-DDDD", where each letter represents a digit as follows:

A represents the country code and can be any number of digits.
BBB represents the area code and will always be three digits.
CCC and DDDD represent the local number and will always be three and four digits long, respectively.
Determine if it's a spam number based on the following criteria:

The country code is greater than 2 digits long or doesn't begin with a zero (0).
The area code is greater than 900 or less than 200.
The sum of first three digits of the local number appears within last four digits of the local number.
The number has the same digit four or more times in a row (ignoring the formatting characters).
*/

function isSpam(number) {
    const splitNum = number.match(/\d+/g);
    const strNum = splitNum.join('');
    const pattern = /(.)\1\1\1/;

    const getSum = arr => {
        return arr.split('').reduce((acc, curr) => {
            return acc + Number(curr);
        }, 0);
    }

    const checkConsecutive = (str) => pattern.test(str);
    }

    const checkCountryCode = num => num.length > 2 ? true : Number(num[0]) !== 0 ? true : false

    const checkAreaCode = num => num > 900 || num < 200 ? true : false;

    const checkSum = (num2,num3) => num3.toString().includes(num2);
    
    let checkFuncs = () => checkConsecutive(strNum) || checkSum(getSum(splitNum[2]), splitNum[3]) || checkAreaCode(splitNum[1]) || checkCountryCode(splitNum[0])

    const spam = checkFuncs();
    console.log(spam);

    return spam;
}


isSpam("+0 (200) 234-0182") //should return false.
isSpam("+091 (555) 309-1922") //should return true.
isSpam("+1 (555) 435-4792") //should return true.
isSpam("+0 (955) 234-4364") //should return true.
isSpam("+0 (155) 131-6943") //should return true.
isSpam("+0 (555) 135-0192") //should return true.
isSpam("+0 (555) 564-1987") //should return true.
isSpam("+00 (555) 234-0182") //should return false.

/* 

*/