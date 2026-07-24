/*
String Zipper
Given two strings, return a new string that interleaves their characters one at a time. If one string is longer, append the remaining characters at the end.

Begin with the first character of the first string.
*/

function zipStrings(a, b) {
    const long = a.length > b.length ? a.length : b.length;
    console.log('length ',long);
    let index =  0;
    let response = "";
    while (index < long) {
        if (a[index]) response += a[index];
        if (b[index]) response += b[index];
        index++;
    }
    return response;
}

const runTests = require('../../helpers/runTests');
runTests(zipStrings, [
    `assert.equal(zipStrings("abc", "123"), "a1b2c3");`,
    `assert.equal(zipStrings("acegikmoqsuwy", "bdfhjlnprtvxz"), "abcdefghijklmnopqrstuvwxyz");`,
    `assert.equal(zipStrings("day", "night"), "dnaiyght");`,
    `assert.equal(zipStrings("python", "javascript"), "pjyatvhaosncript");`,
    `assert.equal(zipStrings("feCdCm", "reoeap"), "freeCodeCamp");`,
]);
