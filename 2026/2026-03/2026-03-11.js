/*
Word Length Converter
Given a string of words, return a new string where each word is replaced by its length.

Words in the given string will be separated by a single space
Keep the spaces in the returned string.
For example, given "hello world", return "5 5".
*/

function convertWords(str) {
    return str.split(' ').map(w => w.length).join(' ');
}

const runTests = require('../../helpers/runTests');
runTests(convertWords, [
    `assert.equal(convertWords("hello world"), "5 5");`,
    `assert.equal(convertWords("Thanks and happy coding"), "6 3 5 6");`,
    `assert.equal(convertWords("The quick brown fox jumps over the lazy dog"), "3 5 5 3 5 4 3 4 3");`,
    `assert.equal(convertWords("Lorem ipsum dolor sit amet consectetur adipiscing elit donec ut ligula vehicula iaculis orci vel semper nisl"), "5 5 5 3 4 11 10 4 5 2 6 8 7 4 3 6 4");`,
]);
