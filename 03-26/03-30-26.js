/*
Due Date
Given a date string, return the date 9 months in the future.

The given and return strings have the format "YYYY-MM-DD".
If the month nine months into the future doesn't contain the original day number, return the last day of that month.
*/

function getDueDate(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    const targetMonthRaw = (month - 1) + 9;           // 0-indexed
    const targetYear = year + Math.floor(targetMonthRaw / 12);
    const targetMonth = targetMonthRaw % 12;           // 0-indexed

    let result = new Date(targetYear, targetMonth, day);

    // If day overflowed (e.g. Feb 30 → Mar 2), clamp to last day of target month
    if (result.getMonth() !== targetMonth) {
        result = new Date(targetYear, targetMonth + 1, 0);
    }

    const y = result.getFullYear();
    const m = String(result.getMonth() + 1).padStart(2, '0');
    const d = String(result.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

const runTests = require('../helpers/runTests');
runTests(getDueDate, `
    Waiting:1. getDueDate("2025-03-30") should return "2025-12-30".
    Waiting:2. getDueDate("2025-04-27") should return "2026-01-27".
    Waiting:3. getDueDate("2025-05-29") should return "2026-02-28".
    Waiting:4. getDueDate("2026-06-30") should return "2027-03-30".
    Waiting:5. getDueDate("2026-10-11") should return "2027-07-11".
`);