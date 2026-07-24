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
runTests(convertParsecs, [
    `assert.equal(convertParsecs(1), 2);`,
    `assert.equal(convertParsecs(2), 6);`,
    `assert.equal(convertParsecs(31), 62);`,
    `assert.equal(convertParsecs(88), 264);`,
    `assert.equal(convertParsecs(17), 34);`,
    `assert.equal(convertParsecs(14), 42);`,
]);
