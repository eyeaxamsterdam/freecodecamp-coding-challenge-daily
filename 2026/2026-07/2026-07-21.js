/*
Word Blender
Given two words, return a new word by combining the first half of the first word with the second half of the second word.

For odd-length words, the first half is the shorter half.
*/

function blendWords(word1, word2) {
    const getHalf = ((w,n) => n === 1 ? w.slice(0,Math.floor(w.length/2)) : w.slice(Math.floor(w.length/2)));
    const firstHalf = getHalf(word1,1);
    const secondHalf = getHalf(word2,2);
    return firstHalf+secondHalf;
}

const runTests = require('../../helpers/runTests');
runTests(blendWords, [
    `assert.equal(blendWords("turtle", "toucan"), "turcan");`,
    `assert.equal(blendWords("chipmunk", "flamingo"), "chipingo");`,
    `assert.equal(blendWords("falcon", "pelican"), "falican");`,
    `assert.equal(blendWords("hyena", "iguana"), "hyana");`,
    `assert.equal(blendWords("scorpion", "gorilla"), "scorilla");`,
    `assert.equal(blendWords("platypus", "wolverine"), "platerine");`,
]);
