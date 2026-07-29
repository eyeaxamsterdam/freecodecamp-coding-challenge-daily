/*
Miles to Kilometers
Given a distance in miles as a number, return the equivalent distance in kilometers.

The input will always be a non-negative number.
1 mile equals 1.60934 kilometers.
Round the result to two decimal places.
Remove unnecessary trailing zeros from the rounded result.
*/

function convertToKm(miles) {

}

const runTests = require('../../../helpers/runTests');
runTests(convertToKm, [
    `assert.equal(convertToKm(1), 1.61);`,
    `assert.equal(convertToKm(21), 33.8);`,
    `assert.equal(convertToKm(3.5), 5.63);`,
    `assert.equal(convertToKm(0), 0);`,
    `assert.equal(convertToKm(0.621371), 1);`,
]);
