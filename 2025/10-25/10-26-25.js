/*
Duration Formatter
Given an integer number of seconds, return a string representing the same duration in the format "H:MM:SS", where "H" is the number of hours, "MM" is the number of minutes, and "SS" is the number of seconds. Return the time using the following rules:

Seconds: Should always be two digits.
Minutes: Should omit leading zeros when they aren't needed. Use "0" if the duration is less than one minute.
Hours: Should be included only if they're greater than zero.
*/

function format(time) {
    let hours = time > 3600 ? (Math.floor(time/3600) + ':') : '';
    hours ? time -= (parseInt(hours)*3600) : null;
    let minutes = hours ? (String(Math.floor(time/60)).padStart(2,'0') + ':') : time > 60 ? (Math.floor(time/60) + ':') : '0:';
    minutes ? time -= (parseInt(minutes)*60) : null;
    let seconds = String(time % 60).padStart(2,'0');
    let fullTime = hours + minutes + seconds;
    console.log(fullTime)
    
    return fullTime;
}

format(500); //should return "8:20".
format(4000) //should return "1:06:40".
format(1) //should return "0:01".
format(5555) //should return "1:32:35".
format(99999) //should return "27:46:39".