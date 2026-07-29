/*
Mile Pace
Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format "MM:SS".

Add leading zeros when needed.
*/

function milePace(miles, duration) {
    const [m, s] = duration.split(':');
    const totalSeconds = Number(m) * 60 + Number(s);
    const paceSeconds = totalSeconds / miles;
    const paceM = Math.floor(paceSeconds / 60);
    const paceS = Math.floor(paceSeconds % 60);
    return paceM.toString().padStart(2, '0') + ':' + paceS.toString().padStart(2, '0');
}

const runTests = require('../../../helpers/runTests');
runTests(milePace, `
    Waiting:1. milePace(3, "24:00") should return "08:00".
    Waiting:2. milePace(1, "06:45") should return "06:45".
    Waiting:3. milePace(2, "07:00") should return "03:30".
    Waiting:4. milePace(26.2, "120:35") should return "04:36". 
`);