/*
Energy Consumption
Given the number of Calories burned during a workout, and the number of watt-hours used by your electronic devices during that workout, determine which one used more energy.

To compare them, convert both values to joules using the following conversions:

1 Calorie equals 4184 joules.
1 watt-hour equals 3600 joules.

Return:

"Workout" if the workout used more energy.
"Devices" if the device used more energy.
"Equal" if both used the same amount of energy.
*/

function compareEnergy(caloriesBurned, wattHoursUsed) {
    const workoutJoules = caloriesBurned * 4184;
    const deviceJoules = wattHoursUsed * 3600;
    if (workoutJoules > deviceJoules) return "Workout";
    if (deviceJoules > workoutJoules) return "Devices";
    return "Equal";
}

const runTests = require('../../../helpers/runTests');
runTests(compareEnergy, [
    `assert.equal(compareEnergy(250, 50), "Workout");`,
    `assert.equal(compareEnergy(100, 200), "Devices");`,
    `assert.equal(compareEnergy(450, 523), "Equal");`,
    `assert.equal(compareEnergy(300, 75), "Workout");`,
    `assert.equal(compareEnergy(200, 250), "Devices");`,
    `assert.equal(compareEnergy(900, 1046), "Equal");`,
]);
