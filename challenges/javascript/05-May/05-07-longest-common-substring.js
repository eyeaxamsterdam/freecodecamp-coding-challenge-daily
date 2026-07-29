/*
Longest Common Substring
Given a string, return the longest substring that appears more than once.

The substrings can overlap.
*/

const runTests = require("../../../helpers/runTests");

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

runTests(getLongestSubstring, [
    `assert.equal(getLongestSubstring("abracadabra"), "abra");`,
    `assert.equal(getLongestSubstring("hello world hello"), "hello");`,
    `assert.equal(getLongestSubstring("mississippi"), "issi");`,
    `assert.equal(getLongestSubstring("ha ha ha ha ha ha ha"), "ha ha ha ha ha ha");`,
    `assert.equal(getLongestSubstring("the quick brown fox jumped over the lazy dog that the quick brown fox jumped over"), "the quick brown fox jumped over");`,
]);
