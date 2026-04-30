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

const runTests = require('../helpers/runTests');

runTests(getNumberWords, `
   Waiting:1. getNumberWords(0) should return "zero".
    Waiting:2. getNumberWords(10) should return "ten".
    Waiting:3. getNumberWords(19) should return "nineteen".
    Waiting:4. getNumberWords(30) should return "thirty".
    Waiting:5. getNumberWords(53) should return "fifty-three".
    Waiting:6. getNumberWords(7) should return "seven".
    Waiting:7. getNumberWords(12) should return "twelve".
    Waiting:8. getNumberWords(60) should return "sixty".
    Waiting:9. getNumberWords(67) should return "sixty-seven".
    Waiting:10. getNumberWords(98) should return "ninety-eight". 
`)