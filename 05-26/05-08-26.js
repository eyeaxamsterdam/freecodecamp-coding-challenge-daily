/*
Medication Reminder
Given an array of medications and a string representing the current time, return the next medication you need to take and how long until you need to take it.

Each medication is in the format [name, lastTaken], where name is the name of the medication and lastTaken is the time it was last taken.
All given times will be in "HH:MM" (24-hour) format.
Use the following medication schedule:

Name	Schedule
Deployxitrin	08:00, 16:00
Debuggamanizole	07:00, 13:00, 21:00
Mergeflictamine	every 4 hours
Return a string in the format "{name} in Hh Mm". For example, "Debuggamanizole in 2h 0m" or "Deployxitrin in 1h 5m".
*/

function medicationReminder(medications, currentTime) {
    const schedule = {Deployxitrin: ['08:00', '16:00'], Debuggamanizole: ['07:00', '13:00', '21:00'], Mergeflictamine: []}

    const toMinutes = (time) => {
        const [hrs, mins] = time.split(':').map(Number);
        return hrs * 60 + mins;
    };

    const subtractTimes = (time1, time2) => toMinutes(time1) - toMinutes(time2);

    // build Mergeflictamine schedule based on last taken
    medications.forEach(med => {
        if (med[0] === 'Mergeflictamine') {
            let totalMins = toMinutes(med[1]) + 4 * 60;
            while (totalMins < 1440) {
                const h = Math.floor(totalMins / 60);
                const m = totalMins % 60;
                schedule.Mergeflictamine.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
                totalMins += 4 * 60;
            }
        }
    });

    let nextDiff = Infinity;
    let nextTime = '';
    let nextMed = '';

    Object.keys(schedule).forEach(med => {
        schedule[med].forEach(time => {
            const diff = subtractTimes(time, currentTime);
            if (diff > 0 && diff < nextDiff) {
                nextDiff = diff;
                const h = Math.floor(diff / 60);
                const m = diff % 60;
                nextTime = `${h}h ${m}m`;
                nextMed = med;
            }
        });
    });
    console.log(`${nextMed} in ${nextTime}`)
    return `${nextMed} in ${nextTime}`;
}

const runTests = require('../helpers/runTests');
runTests(medicationReminder, `
    Waiting:1. medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "10:00"]], "11:00") should return "Debuggamanizole in 2h 0m".
    Waiting:2. medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "13:00"], ["Mergeflictamine", "14:00"]], "14:55") should return "Deployxitrin in 1h 5m".
    Waiting:3. medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "13:00"], ["Mergeflictamine", "14:00"]], "17:15") should return "Mergeflictamine in 0h 45m".
    Waiting:4. medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "09:00"]], "12:59") should return "Debuggamanizole in 0h 1m".
    Waiting:5. medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "21:00"], ["Mergeflictamine", "03:00"]], "06:55") should return "Debuggamanizole in 0h 5m".
    Waiting:6. medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "07:30"]], "08:00") should return "Mergeflictamine in 3h 30m".
`);
