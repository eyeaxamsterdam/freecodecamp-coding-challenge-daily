/*
Plant the Crop
Given an integer representing the size of your farm field, and "acres" or "hectares" representing the unit for the size of your farm field, and a type of crop, determine how many plants of that type you can fit in your field.

1 acre equals 4046.86 square meters.
1 hectare equals 10,000 square meters.

Here's a list of crops that will be given as input and how much space a single plant takes:

|Crop|Space per plant|
|-|-|
|"corn"|1 square meter|
|"wheat"|0.1 square meters|
|"soybeans"|0.5 square meters|
|"tomatoes"|0.25 square meters|
|"lettuce"|0.2 square meters|

Return the number of plants that fit in the field, rounded down to the nearest whole plant.
*/

function getNumberOfPlants(fieldSize, unit, crop) {

}

const runTests = require('../../helpers/runTests');
runTests(getNumberOfPlants, [
    `assert.equal(getNumberOfPlants(1, "acres", "corn"), 4046);`,
    `assert.equal(getNumberOfPlants(2, "hectares", "lettuce"), 100000);`,
    `assert.equal(getNumberOfPlants(20, "acres", "soybeans"), 161874);`,
    `assert.equal(getNumberOfPlants(3.75, "hectares", "tomatoes"), 150000);`,
    `assert.equal(getNumberOfPlants(16.75, "acres", "tomatoes"), 271139);`,
]);
