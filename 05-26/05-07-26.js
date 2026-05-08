/*
Longest Common Substring
Given a string, return the longest substring that appears more than once.

The substrings can overlap.
*/

const runTests = require("../helpers/runTests");

function getLongestSubstring(str) {
    let longestSubstr = ''; 
    let currentStr = ''
    let substr;
    let count = 0;
    
    for (let i=0;i<str.length;i++) {
        substr = '';
        currentStr = str.slice(i);
        for (let l of currentStr) {
            substr += l;
            let replace = substr.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const regex = new RegExp(`(?=${replace})`, 'g');
            const count = ((str.match(regex) || []).length);
            if (count > 1) {
                if (substr.length > longestSubstr.length) {
                    longestSubstr = substr;  
                }
            }
        };
    }

    return longestSubstr;
}

runTests(getLongestSubstring,`
    Waiting:1. getLongestSubstring("abracadabra") should return "abra".
    Waiting:2. getLongestSubstring("hello world hello") should return "hello".
    Waiting:3. getLongestSubstring("mississippi") should return "issi".
    Waiting:4. getLongestSubstring("ha ha ha ha ha ha ha") should return "ha ha ha ha ha ha".
    Waiting:5. getLongestSubstring("the quick brown fox jumped over the lazy dog that the quick brown fox jumped over") should return "the quick brown fox jumped over". 
`)

/*     
    */