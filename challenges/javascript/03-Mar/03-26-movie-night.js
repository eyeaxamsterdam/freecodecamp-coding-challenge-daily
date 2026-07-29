/*
Movie Night
Given a string for the day of the week, another string for a showtime, and an integer number of tickets, return the total cost of the movie tickets for that showing.

The given day will be one of:

"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"
"Sunday"
The showtime will be given in the format "H:MMam" or "H:MMpm". For example "10:00am" or "10:00pm".

Return the total cost in the format "$D.CC" using these rules:

Weekend (Friday - Sunday): $12.00 per ticket.
Weekday (Monday - Thursday): $10.00 per ticket.
Matinee (before 5:00pm): subtract $2.00 per ticket (except on Tuesdays).
Tuesdays: all tickets are $5.00 each.
*/
const TICKETS = {
    Monday: 10.00,
    Tuesday: 5.00,
    Wednesday: 10.00,
    Thursday: 12.00,
    Friday: 12.00,
    Saturday: 12.00,
    Sunday: 12.00
}
function getMovieNightCost(day, showtime, numberOfTickets) {
    let totalperticket = TICKETS[day];
    if (day !== 'Tuesday' && ((showtime.includes('p') && Number(showtime.split(':')[0]) < 5) || showtime.includes('a')))  totalperticket -= 2
    return `$${(totalperticket * numberOfTickets).toFixed(2)}`
}

const runTests = require('../../../helpers/runTests');
runTests(getMovieNightCost, [
    `assert.equal(getMovieNightCost("Saturday", "10:00pm", 1), "$12.00");`,
    `assert.equal(getMovieNightCost("Sunday", "10:00am", 1), "$10.00");`,
    `assert.equal(getMovieNightCost("Tuesday", "7:20pm", 2), "$10.00");`,
    `assert.equal(getMovieNightCost("Wednesday", "5:40pm", 3), "$30.00");`,
    `assert.equal(getMovieNightCost("Monday", "11:50am", 4), "$32.00");`,
    `assert.equal(getMovieNightCost("Friday", "4:30pm", 5), "$50.00");`,
    `assert.equal(getMovieNightCost("Tuesday", "11:30am", 1), "$5.00");`,
]);
