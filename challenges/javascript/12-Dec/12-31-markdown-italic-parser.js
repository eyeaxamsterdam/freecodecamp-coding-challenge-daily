/*
Markdown Italic Parser
Given a string that may include some italic text in Markdown, return the equivalent HTML string.

Italic text in Markdown is any text that starts and ends with a single asterisk (*) or a single underscore (_).
There cannot be any spaces between the text and the asterisk or underscore, but there can be spaces in the text itself.
Convert all italic occurrences to HTML i tags and return the string.

For example, given "*This is italic*", return "<i>This is italic</i>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.
*/

function parseItalics(markdown) {
    return markdown
        .replace(/\*(\S(?:.*?\S)?)\*/g, '<i>$1</i>')
        .replace(/_(\S(?:.*?\S)?)_/g, '<i>$1</i>');
}

const runTests = require('../../../helpers/runTests');
runTests(parseItalics, [
    `assert.equal(parseItalics("*This is italic*"), "<i>This is italic</i>");`,
    `assert.equal(parseItalics("_This is also italic_"), "<i>This is also italic</i>");`,
    `assert.equal(parseItalics("*This is not italic *"), "*This is not italic *");`,
    `assert.equal(parseItalics("_ This is also not italic_"), "_ This is also not italic_");`,
    `assert.equal(parseItalics("The *quick* brown fox _jumps_ over the *lazy* dog."), "The <i>quick</i> brown fox <i>jumps</i> over the <i>lazy</i> dog.");`,
]);
