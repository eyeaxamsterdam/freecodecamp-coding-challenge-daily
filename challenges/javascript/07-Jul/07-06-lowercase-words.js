/*
lowercase words
Given a string, return only the words that are entirely lowercase, in their original order and with a space between each word.
*/

function getLowercaseWords(str) {
    return str.split(' ').filter(word =>  word === word.toLowerCase()).join(' ');
}
const runTests = require('../../../helpers/runTests');
runTests(getLowercaseWords, [
    `assert.equal(getLowercaseWords("hello GOOD world"), "hello world");`,
    `assert.equal(getLowercaseWords("these are all lowercase"), "these are all lowercase");`,
    `assert.equal(getLowercaseWords("less is NoT more"), "less is more");`,
    `assert.equal(getLowercaseWords("DonT eat pizza every OTHER day"), "eat pizza every day");`,
    `assert.equal(getLowercaseWords("the Super quick AND snEaky brown fox Leapt anD jumped over aNd AROUND the lazy SloW dog"), "the quick brown fox jumped over the lazy dog");`,
]);
