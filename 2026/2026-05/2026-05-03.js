/*
Good Day
Given a time string in "HH:MM" format (24-hour clock), return:

"Good morning" for times 05:00 to 11:59
"Good afternoon" for times 12:00 to 17:59
"Good evening" for times 18:00 to 21:59
"Good night" for times 22:00 to 04:59
*/

function getGreeting(time) {
    const target = new Date(2020,1,1,time.split(':')[0],time.split(':')[1]);
    const morning = new Date(2020,1,1,5,0);
    const afternoon = new Date(2020,1,1,12,0);
    const evening = new Date(2020,1,1,18,0);
    const night = new Date(2020,1,1,22,0);
    let response = 'Good ';

    if (target > night) response+= 'night';
    else if (target >= evening) response += 'evening';
    else if (target >= afternoon) response += 'afternoon';
    else if (target >= morning) response += 'morning';
    else response += 'night';

    return response;
}

//TESTS
const runTests = require('../../helpers/runTests');
runTests(getGreeting, [
    `assert.equal(getGreeting("06:30"), "Good morning");`,
    `assert.equal(getGreeting("12:00"), "Good afternoon");`,
    `assert.equal(getGreeting("21:59"), "Good evening");`,
    `assert.equal(getGreeting("00:01"), "Good night");`,
    `assert.equal(getGreeting("11:30"), "Good morning");`,
]);
