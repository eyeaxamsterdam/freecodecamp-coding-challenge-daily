/*
Itinerary Arrangements
Given an array of at least two optional stops for a day trip, return the number of valid itinerary arrangements.

The itinerary always includes "breakfast", "lunch", and "dinner", these will not be passed in as arguments. The optional stops can be placed anywhere in the itinerary, subject to the following rules:

"breakfast" is always first, with at least one stop before "lunch".
"lunch" must appear before "dinner", with at least one stop in between.
At most, one optional stop may appear after "dinner".
Return the number of valid arrangements.
*/

function countArrangements(available, pick) {
    let result = 1;
    for (let i = 0; i < pick; i++) {
        result *= (available - i);
    }
    return result;
}

function getItineraryCount(stops) {
    const n = stops.length;
    let total = 0;

    for (let c = 0; c <= 1; c++) {
        for (let a = 1; a <= n - 1 - c; a++) {
            const b = n - a - c;
            if (b < 1) continue;

            const arrangements = countArrangements(n, a) * countArrangements(n - a, b) * countArrangements(n - a - b, c);
            total += arrangements;
        }
    }

    return total;
}

const runTests = require('../helpers/runTests');
runTests(getItineraryCount, `
    Waiting:1. getItineraryCount(["library", "park"]) should return 2.
    Waiting:2. getItineraryCount(["library", "park", "arcade"]) should return 18.
    Waiting:3. getItineraryCount(["library", "park", "arcade", "store"]) should return 120.
    Waiting:4. getItineraryCount(["library", "park", "arcade", "store", "cafe"]) should return 840.
    Waiting:5. getItineraryCount(["library", "park", "arcade", "store", "cafe", "market", "museum"]) should return 55440.
`);