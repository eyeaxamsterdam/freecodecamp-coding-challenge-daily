/*
Palindrome Characters
Given a string, determine if it's a palindrome and return the middle character (if it's odd length) or middle two characters (if it's even).

A palindrome is a string that is the same forward and backward.
If it's not a palindrome, return "none".
*/

function palindromeLocator(str) {
    // function takes a string and finds the middle if its length is odd and the two middle characters if its even.
    const getMiddle = (s) => {
        return s.length % 2 !== 0 ? s[Math.floor(s.length/2)] : s[s.length/2 - 1] + s[s.length/2]
    }
    // if the string is the same forwads and backwards find the middle, otherwise return 'none'
    let compare = str.split('').reverse().join('') !== str ? 'none' : getMiddle(str);
    console.log(compare);
  return compare;
}

const runTests = require('../../helpers/runTests');
runTests(palindromeLocator, `
    palindromeLocator("racecar") should return "e".
    palindromeLocator("level") should return "v".
    palindromeLocator("freecodecamp") should return "none".
    palindromeLocator("noon") should return "oo".
    palindromeLocator("11100111") should return "00".
`);