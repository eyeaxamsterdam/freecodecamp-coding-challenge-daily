/*
Spoken Duration
Given a number of seconds, return the duration in spoken English.

Break the duration into hours, minutes, and seconds.
Skip any zero values.
Use singular or plural as appropriate ("1 hour", "2 hours").
If present, join the last two units with "and", and the second and third to last units with a comma ("1 hour, 2 minutes and 3 seconds").
*/

function getSpokenDuration(seconds) {
    if (seconds === 0) return '0 seconds';
    let response = '';
    let hours = seconds >= 3600 ? Math.floor(seconds / 3600) : 0;
    let minutes = hours ? Math.floor((seconds%3600)/60) : seconds >= 60 ? Math.floor(seconds/60) : 0;
    let finalSeconds = seconds - (hours*3600) - (minutes*60)
    if (hours)  {
        const hoursLabel = hours !== 1 ? 'hours' : 'hour';
        response += `${hours} ${hoursLabel}`;
    }
    if (minutes) {
        const minutesLabel = minutes !== 1 ? 'minutes' : 'minute';
        if (hours) response += ', '; 
        response += `${minutes} ${minutesLabel}`;
    }
    if (finalSeconds) {
        const secondsLabel = finalSeconds !== 1 ? 'seconds' : 'second';
        if (hours || minutes) response += ' and '; 
        response += `${finalSeconds} ${secondsLabel}`;
    }
    return response;
}

const runTests = require('../../../helpers/runTests');
runTests(getSpokenDuration, [
    `assert.equal(getSpokenDuration(3723), "1 hour, 2 minutes and 3 seconds");`,
    `assert.equal(getSpokenDuration(7295), "2 hours, 1 minute and 35 seconds");`,
    `assert.equal(getSpokenDuration(8521), "2 hours, 22 minutes and 1 second");`,
    `assert.equal(getSpokenDuration(435), "7 minutes and 15 seconds");`,
    `assert.equal(getSpokenDuration(14455), "4 hours and 55 seconds");`,
    `assert.equal(getSpokenDuration(72000), "20 hours");`,
    `assert.equal(getSpokenDuration(1), "1 second");`,
]);
