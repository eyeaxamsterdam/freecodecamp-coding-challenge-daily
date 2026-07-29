/*
Vowel Balance
Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

The string can contain any characters.
The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
If there's an odd number of characters in the string, ignore the center character.
*/

function isBalanced(s) {
    const VOWELS = ['a','e','i','o','u'];
    const countVowels = (w) => w.split('').filter((l)=> VOWELS.includes(l.toLowerCase())).length; 
    const str1 = s.slice(0,Math.floor(s.length/2));
    const str2 = s.slice(Math.ceil(s.length/2));
    return countVowels(str1) === countVowels(str2);
}

const runTests = require('../../../helpers/runTests');
runTests(isBalanced, [
    `assert.isTrue(isBalanced("racecar"));`,
    `assert.isTrue(isBalanced("Lorem Ipsum"));`,
    `assert.isFalse(isBalanced("Kitty Ipsum"));`,
    `assert.isFalse(isBalanced("string"));`,
    `assert.isTrue(isBalanced(" "));`,
    `assert.isFalse(isBalanced("abcdefghijklmnopqrstuvwxyz"));`,
    `assert.isTrue(isBalanced("123A#b!E&*456-o.U"));`,
]);
