/*
Elevator Stops
Given a number for the current floor of an elevator and an array of requested floors, return an array of the order the elevator should visit them to minimize number of floors traveled.

If tied, go up first
Floors with a request must be visited when the elevator first passes them
*/

function elevatorStops(currentFloor, stops) {
    const floorsUp = stops.filter(f => f > currentFloor).sort((a,b)=>a-b);
    const floorsDown = stops.filter(f => f < currentFloor).sort((a,b)=>b-a);
    // calculated distance travelled each way, not number of floors!
    return floorsUp[floorsUp.length-1] - currentFloor <= currentFloor - floorsDown[floorsDown.length-1] ? [...floorsUp,...floorsDown] : [...floorsDown,...floorsUp];
}

const runTests = require('../../helpers/runTests');
runTests(elevatorStops, [
    `assert.deepEqual(elevatorStops(5, [2, 8, 3, 9]), [3, 2, 8, 9]);`,
    `assert.deepEqual(elevatorStops(6, [2, 10, 8, 3, 1, 9]), [8, 9, 10, 3, 2, 1]);`,
    `assert.deepEqual(elevatorStops(1, [4, 8, 3, 6, 9]), [3, 4, 6, 8, 9]);`,
    `assert.deepEqual(elevatorStops(12, [6, 10, 7, 3, 1, 4]), [10, 7, 6, 4, 3, 1]);`,
    `assert.deepEqual(elevatorStops(11, [2, 8, 23, 5, 12, 10, 6, 9, 19]), [10, 9, 8, 6, 5, 2, 12, 19, 23]);`,
]);
