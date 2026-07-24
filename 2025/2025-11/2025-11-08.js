/*
Character Limit
In this challenge, you are given a string and need to determine if it fits in a social media post. Return the following strings based on the rules given:

"short post" if it fits within a 40-character limit.
"long post" if it's greater than 40 characters and fits within an 80-character limit.
"invalid post" if it's too long to fit within either limit.
*/

function canPost(message) {
    return message.length < 40 ? 'short post' : message.length < 80 ? 'long post' : 'invalid post'
}

//Tests

const runTests = require('../../helpers/runTests');
runTests(canPost, [
    `assert.equal(canPost("Hello world"), "short post");`,
    `assert.equal(canPost("This is a longer message but still under eighty characters."), "long post");`,
    `assert.equal(canPost("This message is too long to fit into either of the character limits for a social media post."), "invalid post");`,
]);
