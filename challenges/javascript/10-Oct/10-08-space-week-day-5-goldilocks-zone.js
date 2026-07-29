/*
Space Week Day 5: Goldilocks Zone
For the fifth day of Space Week, you will calculate the "Goldilocks zone" of a star - the region around a star where conditions are "just right" for liquid water to exist.

Given the mass of a star, return an array with the start and end distances of its Goldilocks Zone in Astronomical Units.

To calculate the Goldilocks Zone:

Find the luminosity of the star by raising its mass to the power of 3.5.
The start of the zone is 0.95 times the square root of its luminosity.
The end of the zone is 1.37 times the square root of its luminosity.
Return the distances rounded to two decimal places.
For example, given 1 as a mass, return [0.95, 1.37].
*/

function goldilocksZone(mass) {
    let zone = [];
    const luminosity = mass ** 3.5;
    const start = parseFloat((Math.sqrt(luminosity) * .95).toFixed(2));
    const end = parseFloat((Math.sqrt(luminosity) * 1.37).toFixed(2));
    zone.push(start,end);
    console.log(zone);

    return zone;
}

const runTests = require('../../../helpers/runTests');
runTests(goldilocksZone, [
    `assert.deepEqual(goldilocksZone(1), [0.95, 1.37]);`,
    `assert.deepEqual(goldilocksZone(0.5), [0.28, 0.41]);`,
    `assert.deepEqual(goldilocksZone(6), [21.85, 31.51]);`,
    `assert.deepEqual(goldilocksZone(3.7), [9.38, 13.52]);`,
    `assert.deepEqual(goldilocksZone(20), [179.69, 259.13]);`,
]);
