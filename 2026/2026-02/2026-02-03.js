/*
String Mirror
Given a string, return a new string that consists of the given string with a reversed copy of itself appended to the end of it.
*/

function mirror(str) {
    return str + str.split('').reverse().join('');
}

const runTests = require('../../helpers/runTests');
runTests(mirror, [
    `assert.equal(mirror("freeCodeCamp"), "freeCodeCamppmaCedoCeerf");`,
    `assert.equal(mirror("RaceCar"), "RaceCarraCecaR");`,
    `assert.equal(mirror("helloworld"), "helloworlddlrowolleh");`,
    `assert.equal(mirror("The quick brown fox..."), "The quick brown fox......xof nworb kciuq ehT");`,
]);
