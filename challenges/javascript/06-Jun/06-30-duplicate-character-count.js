/*
Duplicate Character Count
Given two strings, return a count of characters from the second string that can be found in the first.

Duplicate characters in the second string are counted separately.
*/

function duplicateCharacterCount(str1, str2) {
    return str2.split('').reduce((a,b) => a + (str1.includes(b) ? 1 : 0),0)
}

const runTests = require('../../../helpers/runTests');
runTests(duplicateCharacterCount, [
    `assert.equal(duplicateCharacterCount("aloha", "hei"), 1);`,
    `assert.equal(duplicateCharacterCount("jambo", "bonjour"), 4);`,
    `assert.equal(duplicateCharacterCount("hello", "hola"), 3);`,
    `assert.equal(duplicateCharacterCount("ola", "hej"), 0);`,
    `assert.equal(duplicateCharacterCount("ciao", "konnichiwa"), 5);`,
    `assert.equal(duplicateCharacterCount("merhaba", "xin chao"), 2);`,
    `assert.equal(duplicateCharacterCount("hello world", "hello to everyone around the world"), 26);`,
]);
