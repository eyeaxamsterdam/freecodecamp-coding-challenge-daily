/*
Capitalize It
Given a string title, return a new string formatted in title case using the following rules:

Capitalize the first letter of each word.
Make all other letters in each word lowercase.
Words are always separated by a single space.

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/12-14
*/

function titleCase(title) {
    return title.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

const runTests = require('../../../helpers/runTests');
runTests(titleCase, [
    `assert.equal(titleCase("hello world"), "Hello World");`,
    `assert.equal(titleCase("the quick brown fox"), "The Quick Brown Fox");`,
    `assert.equal(titleCase("JAVASCRIPT AND PYTHON"), "Javascript And Python");`,
    `assert.equal(titleCase("AvOcAdO tOAst fOr brEAkfAst"), "Avocado Toast For Breakfast");`,
]);
