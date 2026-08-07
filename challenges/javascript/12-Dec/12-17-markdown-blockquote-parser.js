/*
Markdown Blockquote Parser
Given a string that includes a blockquote in Markdown, return the equivalent HTML string.

A blockquote in Markdown is any line that:

Starts with zero or more spaces
Followed by a greater-than sign (>)
Then, one or more spaces
And finally, the blockquote text.

Return the blockquote text surrounded by opening and closing HTML blockquote tags.

For example, given "> This is a quote", return <blockquote>This is a quote</blockquote>.

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/12-17
*/

function parseBlockquote(markdown) {
    const [, text] = markdown.match(/^\s*>\s+(.*)$/);
    return `<blockquote>${text}</blockquote>`;
}

const runTests = require('../../../helpers/runTests');
runTests(parseBlockquote, [
    `assert.equal(parseBlockquote("> This is a quote"), "<blockquote>This is a quote</blockquote>");`,
    `assert.equal(parseBlockquote(" > This is also a quote"), "<blockquote>This is also a quote</blockquote>");`,
    `assert.equal(parseBlockquote("  >    So  Is  This"), "<blockquote>So  Is  This</blockquote>");`,
]);
