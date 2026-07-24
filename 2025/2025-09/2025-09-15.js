/* 
Thermostat Adjuster
Given the current temperature of a room and a target temperature, return a string indicating how to adjust the room temperature based on these constraints:

Return "heat" if the current temperature is below the target.
Return "cool" if the current temperature is above the target.
Return "hold" if the current temperature is equal to the target
*/

function adjustThermostat(temp, target) {
    
    let response = temp < target ? 'heat' : temp > target ? 'cool' : 'hold';

    console.log(response);

    return response;
}

const runTests = require('../../helpers/runTests');
runTests(adjustThermostat, [
    `assert.equal(adjustThermostat(68, 72), "heat");`,
    `assert.equal(adjustThermostat(75, 72), "cool");`,
    `assert.equal(adjustThermostat(72, 72), "hold");`,
    `assert.equal(adjustThermostat(-20.5, -10.1), "heat");`,
    `assert.equal(adjustThermostat(100, 99.9), "cool");`,
    `assert.equal(adjustThermostat(0.0, 0.0), "hold");`,
]);
