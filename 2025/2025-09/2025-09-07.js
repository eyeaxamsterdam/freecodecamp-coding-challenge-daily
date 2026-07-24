/*
Roman Numeral Parser
Given a string representing a Roman numeral, return its integer value.

Roman numerals consist of the following symbols and values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.
*/

function parseRomanNumeral(numeral) {
    let total = 0;
    const romanNumerals = {
        'I' : 1, 'V': 5, 'X' : 10, 'L': 50, 'C' : 100, 'D': 500, 'M': 1000
    }
    let arr = numeral.split('');
    for (let i = 0; i < arr.length; i++) {
        let currentNum = romanNumerals[arr[i]];
        let nextNum = romanNumerals[arr[i+1]];
        // a little more than requested, but in case a bad character is given
        if (currentNum === undefined || (nextNum === undefined && i !== arr.length - 1)) {
            total = ' oh no '
            break;
        }
        if (i === arr.length - 1 || currentNum >= nextNum) {
            total += currentNum
        } else {
            total -= currentNum
        }
    }
    console.log(numeral,': ',total);
  return total;
}

const runTests = require('../../helpers/runTests');
runTests(parseRomanNumeral, [
    `assert.equal(parseRomanNumeral("III"), 3);`,
    `assert.equal(parseRomanNumeral("IV"), 4);`,
    `assert.equal(parseRomanNumeral("XXVI"), 26);`,
    `assert.equal(parseRomanNumeral("XCIX"), 99);`,
    `assert.equal(parseRomanNumeral("CDLX"), 460);`,
    `assert.equal(parseRomanNumeral("DIV"), 504);`,
    `assert.equal(parseRomanNumeral("MMXXV"), 2025);`,
]);
