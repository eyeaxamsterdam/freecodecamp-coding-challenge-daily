/*
Zodiac Finder
Given a date string in the format "YYYY-MM-DD", return the zodiac sign for that date using the following chart:

| Date Range | Zodiac Sign |
| - | - |
| March 21 - April 19 | "Aries" |
| April 20 - May 20 | "Taurus" |
| May 21 - June 20 | "Gemini" |
| June 21 - July 22 | "Cancer" |
| July 23 - August 22 | "Leo" |
| August 23 - September 22 | "Virgo" |
| September 23 - October 22 | "Libra" |
| October 23 - November 21 | "Scorpio" |
| November 22 - December 21 | "Sagittarius" |
| December 22 - January 19 | "Capricorn" |
| January 20 - February 18 | "Aquarius" |
| February 19 - March 20 | "Pisces" |

Zodiac signs are based only on the month and day, you can ignore the year.
*/

function getSign(dateStr) {
    const [, month, day] = dateStr.split('-').map(Number);
    const ranges = [
        { sign: "Capricorn", start: [12, 22], end: [1, 19] },
        { sign: "Aquarius", start: [1, 20], end: [2, 18] },
        { sign: "Pisces", start: [2, 19], end: [3, 20] },
        { sign: "Aries", start: [3, 21], end: [4, 19] },
        { sign: "Taurus", start: [4, 20], end: [5, 20] },
        { sign: "Gemini", start: [5, 21], end: [6, 20] },
        { sign: "Cancer", start: [6, 21], end: [7, 22] },
        { sign: "Leo", start: [7, 23], end: [8, 22] },
        { sign: "Virgo", start: [8, 23], end: [9, 22] },
        { sign: "Libra", start: [9, 23], end: [10, 22] },
        { sign: "Scorpio", start: [10, 23], end: [11, 21] },
        { sign: "Sagittarius", start: [11, 22], end: [12, 21] },
    ];
    const inRange = (m, d, [sm, sd], [em, ed]) => {
        const val = m * 100 + d;
        const startVal = sm * 100 + sd;
        const endVal = em * 100 + ed;
        if (startVal <= endVal) return val >= startVal && val <= endVal;
        return val >= startVal || val <= endVal;
    };
    return ranges.find(r => inRange(month, day, r.start, r.end)).sign;
}

const runTests = require('../../../helpers/runTests');
runTests(getSign, [
    `assert.equal(getSign("2026-01-31"), "Aquarius");`,
    `assert.equal(getSign("2001-06-10"), "Gemini");`,
    `assert.equal(getSign("1985-09-07"), "Virgo");`,
    `assert.equal(getSign("2023-03-19"), "Pisces");`,
    `assert.equal(getSign("2045-11-05"), "Scorpio");`,
    `assert.equal(getSign("1985-12-06"), "Sagittarius");`,
    `assert.equal(getSign("2025-12-30"), "Capricorn");`,
    `assert.equal(getSign("2018-10-08"), "Libra");`,
    `assert.equal(getSign("1958-05-04"), "Taurus");`,
]);
