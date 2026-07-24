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
runTests(getTallyCount, [
    `assert.equal(getTallyCount("||||"), 4);`,
    `assert.equal(getTallyCount("||||/"), 5);`,
    `assert.equal(getTallyCount("||||/ |||"), 8);`,
    `assert.equal(getTallyCount("||||/ ||||/ ||||/ ||"), 17);`,
    `assert.equal(getTallyCount("||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ |"), 41);`,
]);
