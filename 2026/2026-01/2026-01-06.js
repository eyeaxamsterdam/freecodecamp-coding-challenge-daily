/*
vOwElcAsE
Given a string, return a new string where all vowels are converted to uppercase and all other alphabetical characters are converted to lowercase.

Vowels are "a", "e", "i", "o", and "u" in any case.
Non-alphabetical characters should remain unchanged.
*/

function vowelCase(str) {

}

const runTests = require('../../helpers/runTests');
runTests(vowelCase, [
    `assert.equal(vowelCase("vowelcase"), "vOwElcAsE");`,
    `assert.equal(vowelCase("coding is fun"), "cOdIng Is fUn");`,
    `assert.equal(vowelCase("HELLO, world!"), "hEllO, wOrld!");`,
    `assert.equal(vowelCase("git cherry-pick"), "gIt chErry-pIck");`,
    `assert.equal(vowelCase("HEAD~1"), "hEAd~1");`,
]);
