/*Wake-Up Alarm
Given a string representing the time you set your alarm and a string representing the time you actually woke up, determine if you woke up early, on time, or late.

Both times will be given in "HH:MM" 24-hour format.
Return:

"early" if you woke up before your alarm time.
"on time" if you woke up at your alarm time, or within the 10 minute snooze window after the alarm time.
"late" if you woke up more than 10 minutes after your alarm time.
Both times are on the same day.
*/

function alarmCheck(alarmTime, wakeTime) {
    const toMinutes = t => { 
        const [h, m] = t.split(':'); 
        return Number(h) * 60 + Number(m);
    };
    const alarm = toMinutes(alarmTime);
    const wake = toMinutes(wakeTime);
    return wake < alarm ? 'early' : wake > alarm + 10 ? 'late' : 'on time';
}

const runTests = require('../../helpers/runTests');
runTests(alarmCheck, `
    alarmCheck("07:00", "06:45") should return "early".
    alarmCheck("06:30", "06:30") should return "on time".
    alarmCheck("08:10", "08:15") should return "on time".
    alarmCheck("09:30", "09:45") should return "late".
    alarmCheck("08:15", "08:25") should return "on time".
    alarmCheck("05:45", "05:56") should return "late".
    alarmCheck("04:30", "04:00") should return "early".
`);