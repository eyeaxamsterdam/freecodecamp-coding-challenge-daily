/*
Space Week Day 6: Moon Phase
For day six of Space Week, you will be given a date in the format "YYYY-MM-DD" and need to determine the phase of the moon for that day using the following rules:

Use a simplified lunar cycle of 28 days, divided into four equal phases:

"New": days 1 - 7
"Waxing": days 8 - 14
"Full": days 15 - 21
"Waning": days 22 - 28
After day 28, the cycle repeats with day 1, a new moon.

Use "2000-01-06" as a reference new moon (day 1 of the cycle) to determine the phase of the given day.
You will not be given any dates before the reference date.
Return the correct phase as a string.
*/

function moonPhase(dateString) {
    const date1 = new Date('2000-01-06'); // day 1
    const date2 = new Date(dateString); 
    const phase = (day) => {
        return day <= 7 ? "New" : day <= 14 ? 'Waxing' : day <= 21 ? 'Full' : 'Waning' 
    }
    const differenceInMilliseconds = date2 - date1;
  
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24) + 1;
    let leftOvers = differenceInDays%28;
    console.log(phase(leftOvers));
    return phase(leftOvers);
}

moonPhase("2000-01-12") //should return "New".
moonPhase("2000-01-13") //should return "Waxing".
moonPhase("2014-10-15") //should return "Full".
moonPhase("2012-10-21") //should return "Waning".
moonPhase("2022-12-14") //should return "New".