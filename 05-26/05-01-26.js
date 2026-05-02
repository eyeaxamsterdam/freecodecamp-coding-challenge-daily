/*
Anagram Groups
Given an array of words, return a 2d array of the words grouped into anagrams.

Words are anagrams if they contain the same letters in any order.
Each word belongs to exactly one group.
Return order doesn't matter.
For example, given ["listen", "silent", "hello", "enlist", "world"], return [["listen", "silent", "enlist"], ["hello"], ["world"]].
*/

function groupAnagrams(words) {
    const matches = words.reduce((acc, word) => {
        const key = word.split('').sort().join('');
        if (!acc[key]) acc[key] = [];
        acc[key].push(word);
        console.log('acc ', acc);
        return acc;
    }, {});
    console.log('matches ', Object.values(matches));
    return Object.values(matches);
}

const runTests = require('../helpers/runTests');
runTests(groupAnagrams, `
   Waiting:1. groupAnagrams(["listen", "silent", "hello", "enlist", "world"]) should return [["listen", "silent", "enlist"], ["hello"], ["world"]].
    Waiting:2. groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]) should return [["eat","tea","ate"],["tan","nat"],["bat"]].
    Waiting:3. groupAnagrams(["care", "race", "acre", "pots", "stop", "tops", "opts", "post", "spot", "evil", "vile", "live", "veil"]) should return [["care","race","acre"],["pots","stop","tops","opts","post","spot"],["evil","vile","live","veil"]].
    Waiting:4. groupAnagrams(["algorithms", "logarithms", "education", "cautioned", "auctioned", "triangle", "integral", "alerting", "relating"]) should return [["algorithms","logarithms"],["education","cautioned","auctioned"],["triangle","integral","alerting","relating"]]. 
`);