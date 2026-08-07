/*
String Compression
Given a string sentence, return a compressed version of the sentence where consecutive duplicate words are replaced by the word followed with the number of times it repeats in parentheses.

Only consecutive duplicates are compressed.
Words are separated by single spaces.

For example, given "yes yes yes please", return "yes(3) please".
*/

function compressString(sentence) {
    const words = sentence.split(' ');
    const result = [];
    let i = 0;
    while (i < words.length) {
        let j = i;
        while (j < words.length && words[j] === words[i]) j++;
        const count = j - i;
        result.push(count > 1 ? `${words[i]}(${count})` : words[i]);
        i = j;
    }
    return result.join(' ');
}

const runTests = require('../../../helpers/runTests');
runTests(compressString, [
    `assert.equal(compressString("yes yes yes please"), "yes(3) please");`,
    `assert.equal(compressString("I have have have apples"), "I have(3) apples");`,
    `assert.equal(compressString("one one three and to the the the the"), "one(2) three and to the(4)");`,
    `assert.equal(compressString("route route route route route route tee tee tee tee tee tee"), "route(6) tee(6)");`,
]);
