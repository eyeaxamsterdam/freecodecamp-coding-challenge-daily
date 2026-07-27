/*
Markdown Bold Parser
Given a string that may include some bold text in Markdown, return the equivalent HTML string.

Bold text in Markdown is any text that starts and ends with two asterisks (**) or two underscores (__).
There cannot be any spaces between the text and the asterisks or underscores, but there can be
  spaces in the text itself.
Convert all bold occurrences to HTML b tags and return the string.

For example, given "**This is bold**", return "<b>This is bold</b>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.
*/

function parseBold(markdown) {

}

const runTests = require('../../helpers/runTests');
runTests(parseBold, [
    `assert.equal(parseBold("**This is bold**"), "<b>This is bold</b>");`,
    `assert.equal(parseBold("__This is also bold__"), "<b>This is also bold</b>");`,
    `assert.equal(parseBold("**This is not bold **"), "**This is not bold **");`,
    `assert.equal(parseBold("__ This is also not bold__"), "__ This is also not bold__");`,
    `assert.equal(parseBold("The **quick** brown fox __jumps__ over the **lazy** dog."), "The <b>quick</b> brown fox <b>jumps</b> over the <b>lazy</b> dog.");`,
]);
