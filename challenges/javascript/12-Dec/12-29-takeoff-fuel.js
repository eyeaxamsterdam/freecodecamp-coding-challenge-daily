/*
Takeoff Fuel
Given the numbers of gallons of fuel currently in your airplane, and the required number of liters of fuel to reach your destination, determine how many additional gallons of fuel you should add.

1 gallon equals 3.78541 liters.
If the airplane already has enough fuel, return 0.
You can only add whole gallons.
Do not include decimals in the return number.
*/

function fuelToAdd(currentGallons, requiredLiters) {

}

const runTests = require('../../../helpers/runTests');
runTests(fuelToAdd, [
    `assert.equal(fuelToAdd(0, 1), 1);`,
    `assert.equal(fuelToAdd(5, 40), 6);`,
    `assert.equal(fuelToAdd(10, 30), 0);`,
    `assert.equal(fuelToAdd(896, 20500), 4520);`,
    `assert.equal(fuelToAdd(1000, 50000), 12209);`,
]);
