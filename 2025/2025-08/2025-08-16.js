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
    areAnagrams("listen", "silent") should return true.
    areAnagrams("School master", "The classroom") should return true.
    areAnagrams("A gentleman", "Elegant man") should return true.
    areAnagrams("Hello", "World") should return false.
    areAnagrams("apple", "banana") should return false.
    areAnagrams("cat", "dog") should return false. 
`);