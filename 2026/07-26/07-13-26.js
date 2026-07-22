/*
Tally Counter
Given a string of tally marks, return the total count represented.

Each pipe "|" represents one count.
Every fifth mark is represented as a forward slash "/", completing a group of five ("||||/").
Groups are separated by a space.
*/

function getTallyCount(str) {
    let myArr = str.split(' ');
    return (myArr.length - 1) * 5 + myArr[myArr.length - 1].length
}

const runTests = require('../../helpers/runTests');
runTests(getTallyCount, `
    Waiting:1. getTallyCount("||||") should return 4.
    Waiting:2. getTallyCount("||||/") should return 5.
    Waiting:3. getTallyCount("||||/ |||") should return 8.
    Waiting:4. getTallyCount("||||/ ||||/ ||||/ ||") should return 17.
    Waiting:5. getTallyCount("||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ |") should return 41.
`);