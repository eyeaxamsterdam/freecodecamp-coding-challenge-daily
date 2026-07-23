/*
String Mirror
Given a string, return a new string that consists of the given string with a reversed copy of itself appended to the end of it.
*/

function mirror(str) {
    return str + str.split('').reverse().join('');
}

const runTests = require('../../helpers/runTests');
runTests(mirror, `
    Waiting:1. mirror("freeCodeCamp") should return "freeCodeCamppmaCedoCeerf".
    Waiting:2. mirror("RaceCar") should return "RaceCarraCecaR".
    Waiting:3. mirror("helloworld") should return "helloworlddlrowolleh".
    Waiting:4. mirror("The quick brown fox...") should return "The quick brown fox......xof nworb kciuq ehT".
`);
