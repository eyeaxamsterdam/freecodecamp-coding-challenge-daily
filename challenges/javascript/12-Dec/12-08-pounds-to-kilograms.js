/*
Pounds to Kilograms
Given a weight in pounds as a number, return the string "(lbs) pounds equals (kgs) kilograms.".

Replace "(lbs)" with the input number.
Replace "(kgs)" with the input converted to kilograms, rounded to two decimals and always include two decimal places in the value.
1 pound equals 0.453592 kilograms.
If the input is 1, use "pound" instead of "pounds".
If the converted value is 1, use "kilogram" instead of "kilograms".
*/

function convertToKgs(lbs) {

}

const runTests = require('../../../helpers/runTests');
runTests(convertToKgs, [
    `assert.equal(convertToKgs(1), "1 pound equals 0.45 kilograms.");`,
    `assert.equal(convertToKgs(0), "0 pounds equals 0.00 kilograms.");`,
    `assert.equal(convertToKgs(100), "100 pounds equals 45.36 kilograms.");`,
    `assert.equal(convertToKgs(2.5), "2.5 pounds equals 1.13 kilograms.");`,
    `assert.equal(convertToKgs(2.20462), "2.20462 pounds equals 1.00 kilogram.");`,
]);
