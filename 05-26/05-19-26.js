/*
Sleep Debt
Given an array of hours slept each night leading up to today, and a target number of hours per night, return how many hours of sleep you need tonight to eliminate your sleep debt.

Include tonight's hours in the total time needed to catch up.
If you've slept enough to cover tonight's target or more, return 0.
*/

function sleepDebt(hoursSlept, targetHours) {
    let response = hoursSlept.reduce((a,b)=> a + (targetHours - b),0) + targetHours;
    if (response > 0) return response;
    return 0;
}

const runTests = require('../helpers/runTests');
runTests(sleepDebt, `
    Waiting:1. sleepDebt([6, 6, 6, 6, 6, 6], 8) should return 20.
    Waiting:2. sleepDebt([6, 7, 8, 4, 8, 6], 7) should return 10.
    Waiting:3. sleepDebt([10, 10, 9, 10, 9, 11], 9) should return 4.
    Waiting:4. sleepDebt([8, 7, 6, 7, 6, 8], 6) should return 0.
    Waiting:5. sleepDebt([8, 9, 10, 9, 10, 7], 7) should return 0.
`);