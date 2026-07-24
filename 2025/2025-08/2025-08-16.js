/*
Anagram Checker
Given two strings, determine if they are anagrams of each other (contain the same characters in any order).

Ignore casing and white space.
*/

function areAnagrams(str1, str2) {
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')
}

const runTests = require('../../helpers/runTests');
runTests(areAnagrams, [
    `assert.isTrue(areAnagrams("listen", "silent"));`,
    `assert.isTrue(areAnagrams("School master", "The classroom"));`,
    `assert.isTrue(areAnagrams("A gentleman", "Elegant man"));`,
    `assert.isFalse(areAnagrams("Hello", "World"));`,
    `assert.isFalse(areAnagrams("apple", "banana"));`,
    `assert.isFalse(areAnagrams("cat", "dog"));`,
]);
