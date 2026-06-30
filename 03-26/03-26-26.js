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

const runTests = require('../helpers/runTests');
runTests(getMovieNightCost, `
    Waiting:1. getMovieNightCost("Saturday", "10:00pm", 1) should return "$12.00".
    Waiting:2. getMovieNightCost("Sunday", "10:00am", 1) should return "$10.00".
    Waiting:3. getMovieNightCost("Tuesday", "7:20pm", 2) should return "$10.00".
    Waiting:4. getMovieNightCost("Wednesday", "5:40pm", 3) should return "$30.00".
    Waiting:5. getMovieNightCost("Monday", "11:50am", 4) should return "$32.00".
    Waiting:6. getMovieNightCost("Friday", "4:30pm", 5) should return "$50.00".
    Waiting:7. getMovieNightCost("Tuesday", "11:30am", 1) should return "$5.00".
`);