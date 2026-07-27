/*
Sum the String
Given a string containing digits and other characters, return the sum of all numbers in the string.

Treat consecutive digits as a single number. For example, "13" counts as 13, not 1 + 3.
Ignore any non-digit characters.
*/

function stringSum(str) {

}

const runTests = require('../../helpers/runTests');
runTests(stringSum, [
    `assert.equal(stringSum("3apples2bananas"), 5);`,
    `assert.equal(stringSum("10cats5dogs2birds"), 17);`,
    `assert.equal(stringSum("125344"), 125344);`,
    `assert.equal(stringSum("a1b20c300"), 321);`,
    `assert.equal(stringSum("a12b34c56d78e90f123g456h789i0j1k2l3m4n5"), 1653);`,
]);
