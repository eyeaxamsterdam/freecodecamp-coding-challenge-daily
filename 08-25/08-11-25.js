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

const runTests = require('../../helpers/runTests');
runTests(isBalanced, `
    Waiting:1. isBalanced("racecar") should return true.
    Waiting:2. isBalanced("Lorem Ipsum") should return true.
    Waiting:3. isBalanced("Kitty Ipsum") should return false.
    Waiting:4. isBalanced("string") should return false.
    Waiting:5. isBalanced(" ") should return true.
    Waiting:6. isBalanced("abcdefghijklmnopqrstuvwxyz") should return false.
    Waiting:7. isBalanced("123A#b!E&*456-o.U") should return true.
`);