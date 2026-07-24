/*
Anagram Checker
Given two strings, determine if they are anagrams of each other (contain the same characters in any order).

Ignore casing and white space.
*/

function areAnagrams(str1, str2) {
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')
}

const runTests = require('../../helpers/runTests');
runTests(areAnagrams, `
    Waiting:1. areAnagrams("listen", "silent") should return true.
    Waiting:2. areAnagrams("School master", "The classroom") should return true.
    Waiting:3. areAnagrams("A gentleman", "Elegant man") should return true.
    Waiting:4. areAnagrams("Hello", "World") should return false.
    Waiting:5. areAnagrams("apple", "banana") should return false.
    Waiting:6. areAnagrams("cat", "dog") should return false. 
`);