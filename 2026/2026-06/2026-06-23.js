/*
BMI Calculator
Given a weight in pounds and a height in inches, return the BMI (Body Mass Index) rounded to one decimal place.

To get BMI: divide the weight by the height squared, then multiply the result by 703
*/

function calculateBmi(weight, height) {
    let bmi = (weight/(height **2))*703;
    return parseFloat(bmi.toFixed(1));
}

const runTests = require('../../helpers/runTests');
runTests(calculateBmi, [
    `assert.equal(calculateBmi(180, 70), 25.8);`,
    `assert.equal(calculateBmi(140, 64), 24.0);`,
    `assert.equal(calculateBmi(160, 76), 19.5);`,
    `assert.equal(calculateBmi(200, 60), 39.1);`,
    `assert.equal(calculateBmi(150, 68), 22.8);`,
]);
