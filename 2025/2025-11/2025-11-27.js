/*
What's My Age Again?
Given the date of someone's birthday in the format YYYY-MM-DD, return the person's age as of November 27th, 2025.

Assume all birthdays are valid dates before November 27th, 2025.
Return the age as an integer.
Be sure to account for whether the person has already had their birthday in 2025.
*/

function calculateAge(birthday) {

}

const runTests = require('../../helpers/runTests');
runTests(calculateAge, [
    `assert.equal(calculateAge("2000-11-20"), 25);`,
    `assert.equal(calculateAge("2000-12-01"), 24);`,
    `assert.equal(calculateAge("2014-10-25"), 11);`,
    `assert.equal(calculateAge("1994-01-06"), 31);`,
    `assert.equal(calculateAge("1994-12-14"), 30);`,
]);
