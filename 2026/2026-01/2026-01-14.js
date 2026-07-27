/*
Markdown Link Parser
Given the string of a link in Markdown, return the equivalent HTML string.

A Markdown image has the following format: "[link_text](link_url)". Return the string of the HTML a tag with the href set to the link_url and the link_text as the tag content.

For example, given "[freeCodeCamp](https://freecodecamp.org/)" return '<a href="https://freecodecamp.org/">freeCodeCamp</a>';

Note: The console may not display HTML tags in strings when logging messages — check the browser console to see logs with tags included.
*/

function parseLink(markdown) {

}

const runTests = require('../../helpers/runTests');
runTests(parseLink, [
    `assert.equal(parseLink("[freeCodeCamp](https://freecodecamp.org/)"), '<a href="https://freecodecamp.org/">freeCodeCamp</a>');`,
    `assert.equal(parseLink("[Donate to our charity.](https://www.freecodecamp.org/donate/)"), '<a href="https://www.freecodecamp.org/donate/">Donate to our charity.</a>');`,
    `assert.equal(parseLink("[Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.](https://github.com/freeCodeCamp/freeCodeCamp/)"), '<a href="https://github.com/freeCodeCamp/freeCodeCamp/">Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.</a>');`,
]);
