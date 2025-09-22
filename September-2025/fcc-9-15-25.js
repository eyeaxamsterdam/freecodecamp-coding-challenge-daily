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


adjustThermostat(68, 72) //should return "heat".
adjustThermostat(75, 72) //should return "cool".
adjustThermostat(72, 72) //should return "hold".
adjustThermostat(-20.5, -10.1) //should return "heat".
adjustThermostat(100, 99.9) //should return "cool".
adjustThermostat(0.0, 0.0) //should return "hold".