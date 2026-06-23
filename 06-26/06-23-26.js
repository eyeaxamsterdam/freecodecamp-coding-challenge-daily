/*
BMI Calculator
Given a weight in pounds and a height in inches, return the BMI (Body Mass Index) rounded to one decimal place.

To get BMI: divide the weight by the height squared, then multiply the result by 703
*/

function calculateBmi(weight, height) {
    let bmi = (weight/(height **2))*703;
    return parseFloat(bmi.toFixed(1));
}

const runTests = require('../helpers/runTests');
runTests(calculateBmi, `
    Passed:1. calculateBmi(180, 70) should return 25.8.
    Passed:2. calculateBmi(140, 64) should return 24.0.
    Passed:3. calculateBmi(160, 76) should return 19.5.
    Passed:4. calculateBmi(200, 60) should return 39.1.
    Passed:5. calculateBmi(150, 68) should return 22.8.
`);