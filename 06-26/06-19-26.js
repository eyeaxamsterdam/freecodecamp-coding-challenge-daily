/*
Rental Cost
Given a rental timestamp, a return timestamp, and a rental tier, return the total cost of the rental including any late fees.

Given timestamps are UTC ISO strings, for example: "2026-06-18T18:30:00Z".
The rental tier is the number of days before the rental is due back: 1, 3, or 7.
Rentals are due back by 12:00 PM UTC or earlier on the last day of the rental period. For example, a 1-day rental checked out at any time on March 15 is due back by 12:00 PM UTC on March 16.
Each day past the due date and time incurs a late fee.
Pricing is as follows:

Tier	Base cost	Late fee per day
1 day	$4.99	$3.99
3 days	$3.99	$2.99
7 days	$2.99	$0.99
Return the total cost rounded to two decimal places in the format "$D.CC".
*/

const FEES = {
    1: {base: 4.99, fee: 3.99},
    3: {base: 3.99, fee: 2.99},
    7: {base: 2.99, fee: 0.99}
}

function addDays(date, n) {
  const result = new Date(date);
  result.setDate(result.getDate() + n);
  result.setHours(12, 0);
  return result;
}

function getRentalCost(rented, returned, tier) {
    let total = FEES[tier]['base'];
    let start = new Date(rented);
    let finish = new Date(returned);
    let dueDate = addDays(start, 1);
    console.log('DUE: ',dueDate.toString());
    console.log(dueDate - finish < 0 ? 'late' : 'early');
}

const runTests = require('../helpers/runTests');
runTests(getRentalCost, `
    Waiting:1. getRentalCost("2026-06-18T18:30:00Z", "2026-06-19T10:30:00Z", 1) should return "$4.99".
    Waiting:2. getRentalCost("2026-06-18T14:30:00Z", "2026-06-20T12:30:00Z", 1) should return "$12.97".
    Waiting:3. getRentalCost("2026-06-18T10:15:00Z", "2026-06-18T19:45:00Z", 3) should return "$3.99".
    Waiting:4. getRentalCost("2026-06-18T15:20:00Z", "2026-06-23T08:10:00Z", 3) should return "$9.97".
    Waiting:5. getRentalCost("2026-06-18T12:00:00Z", "2026-06-25T12:00:00Z", 7) should return "$2.99".
    Waiting:6. getRentalCost("2026-06-18T08:00:00Z", "2027-06-18T14:00:00Z", 7) should return "$358.40".
`);