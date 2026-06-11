/*
Itinerary Arrangements
Given an array of at least two optional stops for a day trip, return the number of valid itinerary arrangements.

The itinerary always includes "breakfast", "lunch", and "dinner", these will not be passed in as arguments. The optional stops can be placed anywhere in the itinerary, subject to the following rules:

"breakfast" is always first, with at least one stop before "lunch".
"lunch" must appear before "dinner", with at least one stop in between.
At most, one optional stop may appear after "dinner".
Return the number of valid arrangements.
*/
//what the crap this one is hard.

// Computes the number of ordered ways to pick `pick` items from `available` items.
// This is a partial permutation: available * (available-1) * ... down to `pick` factors.
// e.g. countArrangements(4, 2) = 4 * 3 = 12
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

    // The itinerary has 3 fixed slots: [breakfast] ...a stops... [lunch] ...b stops... [dinner] ...c stops
    // c = stops after dinner (0 or 1, per the rules)
    // a = stops between breakfast and lunch (at least 1)
    // b = stops between lunch and dinner (at least 1)
    // All optional stops must be used: a + b + c = n
    for (let c = 0; c <= 1; c++) {
        for (let a = 1; a <= n - 1 - c; a++) {
            const b = n - a - c; // remaining stops go between lunch and dinner
            if (b < 1) continue; // must have at least 1 stop between lunch and dinner

            // Multiply the ordered arrangements for each slot independently:
            // - pick `a` stops from all n for the first slot
            // - pick `b` from the remaining (n-a) for the second slot
            // - pick `c` from the remaining (n-a-b) for the third slot
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