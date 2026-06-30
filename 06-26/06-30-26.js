/*
Duplicate Character Count
Given two strings, return a count of characters from the second string that can be found in the first.

Duplicate characters in the second string are counted separately.
*/

function duplicateCharacterCount(str1, str2) {
    return str2.split('').reduce((a,b) => a + (str1.includes(b) ? 1 : 0),0)
}

const runTests = require('../helpers/runTests');
runTests(duplicateCharacterCount, `
    Waiting:1. duplicateCharacterCount("aloha", "hei") should return 1.
    Waiting:2. duplicateCharacterCount("jambo", "bonjour") should return 4.
    Waiting:3. duplicateCharacterCount("hello", "hola") should return 3.
    Waiting:4. duplicateCharacterCount("ola", "hej") should return 0.
    Waiting:5. duplicateCharacterCount("ciao", "konnichiwa") should return 5.
    Waiting:6. duplicateCharacterCount("merhaba", "xin chao") should return 2.
    Waiting:7. duplicateCharacterCount("hello world", "hello to everyone around the world") should return 26.
`);