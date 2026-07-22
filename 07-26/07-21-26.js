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

const runTests = require('../helpers/runTests');
runTests(blendWords, `
    Waiting:1. blendWords("turtle", "toucan") should return "turcan".
    Waiting:2. blendWords("chipmunk", "flamingo") should return "chipingo".
    Waiting:3. blendWords("falcon", "pelican") should return "falican".
    Waiting:4. blendWords("hyena", "iguana") should return "hyana".
    Waiting:5. blendWords("scorpion", "gorilla") should return "scorilla".
    Waiting:6. blendWords("platypus", "wolverine") should return "platerine".
`);