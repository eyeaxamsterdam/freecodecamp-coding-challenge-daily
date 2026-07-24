/*
Last Letter
Given a string, return the letter from the string that appears last in the alphabet.

If two or more letters tie for the last in the alphabet, return the first one.
Ignore all non-letter characters.
*/

function getLastLetter(str) {
    let arranged = str.split('').sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    for (let i = str.length-1; i > 0; i--) {
        if (arranged[i].toLowerCase() === arranged[i -1].toLowerCase()) {
            continue
        } 
        return arranged[i];
    }
}

const runTests = require('../../helpers/runTests');

runTests(getLastLetter, `
getLastLetter("world") should return "w".
getLastLetter("Hello World") should return "W".
getLastLetter("The quick brown fox jumped over the lazy dog.") should return "z".
getLastLetter("HeLl0") should return "L".
getLastLetter("!#$ er@R asd fT.,> 2t0e9") should return "T".
`);