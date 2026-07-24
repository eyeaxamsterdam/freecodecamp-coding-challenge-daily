/*
Groundhog Day
Today is Groundhog Day, in which a groundhog predicts the weather based on whether or not it sees its shadow.

Given a value representing the groundhog's appearance, return the correct prediction:

If the given value is the boolean true (the groundhog saw its shadow), return "Looks like we'll have six more weeks of winter.".
If the value is the boolean false (the groundhog did not see its shadow), return "It's going to be an early spring.".
If the value is anything else (the groundhog did not show up), return "No prediction this year.".
*/

function groundhogDayPrediction(appearance) {
    return appearance === true ? "Looks like we'll have six more weeks of winter." : appearance === false ? "It's going to be an early spring." : "No prediction this year.";
}

const runTests = require('../../helpers/runTests');
runTests(groundhogDayPrediction, [
    `assert.equal(groundhogDayPrediction(true), "Looks like we'll have six more weeks of winter.");`,
    `assert.equal(groundhogDayPrediction(false), "It's going to be an early spring.");`,
    `assert.equal(groundhogDayPrediction(null), "No prediction this year.");`,
    `assert.equal(groundhogDayPrediction(" "), "No prediction this year.");`,
    `assert.equal(groundhogDayPrediction("true"), "No prediction this year.");`,
]);
