/*
Is It the Weekend?
Given a date in the format "YYYY-MM-DD", return the number of days left until the weekend.

The weekend starts on Saturday.
If the given date is Saturday or Sunday, return "It's the weekend!".
Otherwise, return "X days until the weekend.", where X is the number of days until Saturday.
If X is 1, use "day" (singular) instead of "days" (plural).
Make sure the calculation ignores your local timezone.
*/

function daysUntilWeekend(dateString) {
    let day = new Date(dateString).getDay();
    let daysUntil = 5 - day;
    let response = day === 5 || day === 6 ? "It's the weekend!" : `${daysUntil} ${daysUntil === 1 ? "day" : "days"} until the weekend.`;
    console.log(response);
    return response;
}

//Tests
daysUntilWeekend("2025-11-14") //should return "1 day until the weekend.".
daysUntilWeekend("2025-01-01") //should return "3 days until the weekend.".
daysUntilWeekend("2025-12-06") //should return "It's the weekend!".
daysUntilWeekend("2026-01-27") //should return "4 days until the weekend.".
daysUntilWeekend("2026-09-07") //should return "5 days until the weekend.".
daysUntilWeekend("2026-11-29") //should return "It's the weekend!".