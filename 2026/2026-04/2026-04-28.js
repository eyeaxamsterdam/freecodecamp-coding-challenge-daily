/*
Number Words
Given an integer from 0 to 99, return its English word representation.

0 returns "zero".
Numbers 1-19 have unique names ("one", "two", ..., "ten", "eleven", ..., "eighteen", "nineteen").
Multiples of 10 from 20-90 have their own names ("twenty", "thirty", ..., "eighty", "ninety").
Numbers 21-99 that are not multiples of 10 are written as two words joined by a hyphen. For example "forty-two" and "fifty-three".
*/

function getNumberWords(n) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                  'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (n < 20) return ones[n];
    if (n % 10 === 0) return tens[Math.floor(n / 10)];
    return tens[Math.floor(n / 10)] + '-' + ones[n % 10];
}

const runTests = require('../../helpers/runTests');
runTests(getNumberWords, [
    `assert.equal(getNumberWords(0), "zero");`,
    `assert.equal(getNumberWords(10), "ten");`,
    `assert.equal(getNumberWords(19), "nineteen");`,
    `assert.equal(getNumberWords(30), "thirty");`,
    `assert.equal(getNumberWords(53), "fifty-three");`,
    `assert.equal(getNumberWords(7), "seven");`,
    `assert.equal(getNumberWords(12), "twelve");`,
    `assert.equal(getNumberWords(60), "sixty");`,
    `assert.equal(getNumberWords(67), "sixty-seven");`,
    `assert.equal(getNumberWords(98), "ninety-eight");`,
]);
