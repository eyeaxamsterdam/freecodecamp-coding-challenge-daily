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

const runTests = require('../helpers/runTests');
runTests(groundhogDayPrediction, `
    Waiting:1. groundhogDayPrediction(true) should return "Looks like we'll have six more weeks of winter.".
    Waiting:2. groundhogDayPrediction(false) should return "It's going to be an early spring.".
    Waiting:3. groundhogDayPrediction(null) should return "No prediction this year.".
    Waiting:4. groundhogDayPrediction(" ") should return "No prediction this year.".
    Waiting:5. groundhogDayPrediction("true") should return "No prediction this year.".
`);