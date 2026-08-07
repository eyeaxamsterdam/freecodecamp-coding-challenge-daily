/*
Leap Year Calculator
Given an integer year, determine whether it is a leap year.

A year is a leap year if it satisfies the following rules:

The year is evenly divisible by 4, and
The year is not evenly divisible by 100, unless
The year is evenly divisible by 400.
*/

function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

const runTests = require('../../../helpers/runTests');
runTests(isLeapYear, [
    `assert.isTrue(isLeapYear(2024));`,
    `assert.isFalse(isLeapYear(2023));`,
    `assert.isFalse(isLeapYear(2100));`,
    `assert.isTrue(isLeapYear(2000));`,
    `assert.isFalse(isLeapYear(1999));`,
    `assert.isTrue(isLeapYear(2040));`,
    `assert.isFalse(isLeapYear(2026));`,
]);
