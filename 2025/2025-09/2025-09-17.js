/*
Given a string, return a URL-friendly version of the string using the following constraints:
All letters should be lowercase.
All characters that are not letters, numbers, or spaces should be removed.
All spaces should be replaced with the URL-encoded space code %20.
Consecutive spaces should be replaced with a single %20.
The returned string should not have leading or trailing %20.
 */

function generateSlug(str) {
    let changedStr = str.replace(/[^a-zA-Z0-9 ]/g, '').trim().toLowerCase().replace(/ +/g, '%20');
    console.log(changedStr);
  return changedStr;
}

const runTests = require('../../helpers/runTests');
runTests(generateSlug, [
    `assert.equal(generateSlug("helloWorld"), "helloworld");`,
    `assert.equal(generateSlug("hello world!"), "hello%20world");`,
    `assert.equal(generateSlug(" hello-world "), "helloworld");`,
    `assert.equal(generateSlug("hello  world"), "hello%20world");`,
    `assert.equal(generateSlug("  ?H^3-1*1]0! W[0%R#1]D  "), "h3110%20w0r1d");`,
]);
