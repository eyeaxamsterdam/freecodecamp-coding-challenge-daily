/*
Camel to Snake
Given a string in camel case, return the snake case version of the string using the following rules:

The input string will contain only letters (A-Z and a-z) and will always start with a lowercase letter.
Every uppercase letter in the camel case string starts a new word.
Convert all letters to lowercase.
Separate words with an underscore (_).
*/

function toSnake(camel) {
    return [...camel].map(l => l.toUpperCase() === l ? '_' + l.toLowerCase() : l).join('');
}

const runTests = require('../../../helpers/runTests');
runTests(toSnake, [
    `assert.equal(toSnake("helloWorld"), "hello_world");`,
    `assert.equal(toSnake("myVariableName"), "my_variable_name");`,
    `assert.equal(toSnake("freecodecampDailyChallenges"), "freecodecamp_daily_challenges");`,
]);
