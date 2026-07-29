/*
Truncate the Text
Given a string, return it as-is if it's 20 characters or shorter. If it's longer than 20 characters, truncate it to the first 17 characters and append "..." to the end of it (so it's 20 characters total) and return the result.
*/

function truncateText(text) {
    return text.length <= 20 ? text : text.slice(0,17) + '...'
}

const runTests = require('../../../helpers/runTests');
runTests(truncateText, [
    `assert.equal(truncateText("Hello, world!"), "Hello, world!");`,
    `assert.equal(truncateText("This string should get truncated."), "This string shoul...");`,
    `assert.equal(truncateText("Exactly twenty chars"), "Exactly twenty chars");`,
    `assert.equal(truncateText("....................."), "....................");`,
]);
