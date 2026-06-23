/*
Equinox Shadows
Today is the equinox, when the sun is directly above the equator and perfectly overhead at noon. Given a time, determine the shadow cast by a 4-foot vertical pole.

The time will be a string in "HH:MM" 24-hour format (for example, "15:00" is 3pm).
You will only be given a time in 30 minute increments.
Rules:

The sun rises at 6am directly "east", and sets at 6pm directly "west".
A shadow always points opposite the sun.
The shadow's length (in feet) is the number of hours away from noon, cubed.
There is no shadow before sunrise (before 6am), after sunset (6pm or later), or at noon.
Return:

If a shadow exists, return "(length)ft (direction)". For example, "8ft west".
Otherwise, return "No shadow".
For example, given "10:00", return "8ft west" because 10am is 2 hours from noon, so 23 = 8 feet, and the shadow points west because the sun is in the east at 10am.
*/

function getShadow(time) {
    let [h,m] = [time.split(':')[0], time.split(':')[1]];
    let timeNum = Number(h) + (m === '30' ? .5 : 0);
    let direction = timeNum > 12 && timeNum < 18 ? 'east' : (timeNum < 12 && timeNum >= 6) ? 'west' : 'No shadow';
    if (direction === 'No shadow') return direction;
    if (direction === 'east') return `${(timeNum - 12)**3}ft ${direction}`;
    if (direction === 'west') return `${(12 - timeNum)**3}ft ${direction}`;
}

const runTests = require('../helpers/runTests');
runTests(getShadow, `
    Waiting:1. getShadow("10:00") should return "8ft west".
    Waiting:2. getShadow("15:00") should return "27ft east".
    Waiting:3. getShadow("12:00") should return "No shadow".
    Waiting:4. getShadow("17:30") should return "166.375ft east".
    Waiting:5. getShadow("05:00") should return "No shadow".
    Waiting:6. getShadow("06:00") should return "216ft west".
    Waiting:7. getShadow("18:00") should return "No shadow".
    Waiting:8. getShadow("07:30") should return "91.125ft west".
    Waiting:9. getShadow("00:00") should return "No shadow".
`);