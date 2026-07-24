/*
Duplicate Character Count
Given two strings, return a count of characters from the second string that can be found in the first.

Duplicate characters in the second string are counted separately.
*/

function duplicateCharacterCount(str1, str2) {
    return str2.split('').reduce((a,b) => a + (str1.includes(b) ? 1 : 0),0)
}

const runTests = require('../../helpers/runTests');
runTests(duplicateCharacterCount, `
    duplicateCharacterCount("aloha", "hei") should return 1.
    duplicateCharacterCount("jambo", "bonjour") should return 4.
    duplicateCharacterCount("hello", "hola") should return 3.
    duplicateCharacterCount("ola", "hej") should return 0.
    duplicateCharacterCount("ciao", "konnichiwa") should return 5.
    duplicateCharacterCount("merhaba", "xin chao") should return 2.
    duplicateCharacterCount("hello world", "hello to everyone around the world") should return 26.
`);