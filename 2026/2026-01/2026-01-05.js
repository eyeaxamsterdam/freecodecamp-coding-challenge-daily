/*
Tire Pressure
Given an array with four numbers representing the tire pressures in psi of the four tires in your vehicle, and another array of two numbers representing the minimum and maximum pressure for your tires in bar, return an array of four strings describing each tire's status.

1 bar equals 14.5038 psi.

Return an array with the following values for each tire:

"Low" if the tire pressure is below the minimum allowed.
"Good" if it's between the minimum and maximum allowed.
"High" if it's above the maximum allowed.
*/

function tireStatus(pressuresPSI, rangeBar) {

}

const runTests = require('../../helpers/runTests');
runTests(tireStatus, [
    `assert.deepEqual(tireStatus([32, 28, 35, 29], [2, 3]), ["Good", "Low", "Good", "Low"]);`,
    `assert.deepEqual(tireStatus([32, 28, 35, 30], [2, 2.3]), ["Good", "Low", "High", "Good"]);`,
    `assert.deepEqual(tireStatus([29, 26, 31, 28], [2.1, 2.5]), ["Low", "Low", "Good", "Low"]);`,
    `assert.deepEqual(tireStatus([31, 31, 30, 29], [1.5, 2]), ["High", "High", "High", "Good"]);`,
    `assert.deepEqual(tireStatus([30, 28, 30, 29], [1.9, 2.1]), ["Good", "Good", "Good", "Good"]);`,
]);
