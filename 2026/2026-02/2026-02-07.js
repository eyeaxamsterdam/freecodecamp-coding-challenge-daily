/*
2026 Winter Games Day 2: Snowboarding
Given a snowboarder's starting stance and a rotation in degrees, determine their landing stance.

A snowboarder's stance is either "Regular" or "Goofy".
Trick rotations are multiples of 90 degrees. Positive indicates clockwise rotation, and negative indicate counter-clockwise rotation.
The landing stance flips every 180 degrees of rotation.
For example, given "Regular" and 90, return "Regular". Given "Regular" and 180 degrees, return "Goofy".
*/

function getLandingStance(startStance, rotation) {
    const stances = { 
        Goofy: 'Regular',
        Regular: 'Goofy'
    }
    const positiveRotation = rotation < 0 ? -rotation : rotation
    const quadrant = positiveRotation > 360 ? (positiveRotation/90) % 4 : positiveRotation/90
    return quadrant === 1 || quadrant === 0 ? startStance : stances[startStance];          
}

const runTests = require('../../helpers/runTests');
runTests(getLandingStance, [
    `assert.equal(getLandingStance("Regular", 90), "Regular");`,
    `assert.equal(getLandingStance("Regular", 180), "Goofy");`,
    `assert.equal(getLandingStance("Goofy", -270), "Regular");`,
    `assert.equal(getLandingStance("Regular", 2340), "Goofy");`,
    `assert.equal(getLandingStance("Goofy", 2160), "Goofy");`,
    `assert.equal(getLandingStance("Goofy", -540), "Regular");`,
    `assert.equal(getLandingStance("Goofy", 90), "Goofy");`,
]);
