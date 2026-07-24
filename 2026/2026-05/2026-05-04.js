/*
Parsec Converter
In a distant galaxy, parsecs are used to measure both time and distance. Given an integer number of parsecs, return its equivalent in time or distance.

If the given integer is odd, it represents time. If it's even, it represents distance.
Use these conversion rates:

Parsecs	Time/Distance
1	2 hours
2	6 light years
Return the converted value as an integer.
*/

function convertParsecs(parsecs) {
    return parsecs % 2 === 0 ? parsecs*3 : parsecs*2;
}

// TESTS
const runTests = require('../../helpers/runTests');
runTests(convertParsecs, `
    convertParsecs(1) should return 2.
    convertParsecs(2) should return 6.
    convertParsecs(31) should return 62.
    convertParsecs(88) should return 264.
    convertParsecs(17) should return 34.
    convertParsecs(14) should return 42.
`);