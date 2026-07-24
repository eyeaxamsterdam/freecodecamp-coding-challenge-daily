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
runTests(blendWords, `
    blendWords("turtle", "toucan") should return "turcan".
    blendWords("chipmunk", "flamingo") should return "chipingo".
    blendWords("falcon", "pelican") should return "falican".
    blendWords("hyena", "iguana") should return "hyana".
    blendWords("scorpion", "gorilla") should return "scorilla".
    blendWords("platypus", "wolverine") should return "platerine".
`);