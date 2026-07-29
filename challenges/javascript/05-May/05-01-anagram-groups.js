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

const runTests = require('../../../helpers/runTests');
runTests(groupAnagrams, [
    `const groups = groupAnagrams(["listen", "silent", "hello", "enlist", "world"]);
    const sorted = groups.map(g => g.sort()).sort((a, b) => a[0].localeCompare(b[0]));
    assert.deepEqual(sorted, [["enlist", "listen", "silent"], ["hello"], ["world"]]);`,
    `const groups = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
    const sorted = groups.map(g => g.sort()).sort((a, b) => a[0].localeCompare(b[0]));
    assert.deepEqual(sorted, [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]]);`,
    `const groups = groupAnagrams(["care", "race", "acre", "pots", "stop", "tops", "opts", "post", "spot", "evil", "vile", "live", "veil"]);
    const sorted = groups.map(g => g.sort()).sort((a, b) => a[0].localeCompare(b[0]));
    assert.deepEqual(sorted, [["acre", "care", "race"], ["evil", "live", "veil", "vile"], ["opts", "post", "pots", "spot", "stop", "tops"]]);`,
    `const groups = groupAnagrams(["algorithms", "logarithms", "education", "cautioned", "auctioned", "triangle", "integral", "alerting", "relating"]);
    const sorted = groups.map(g => g.sort()).sort((a, b) => a[0].localeCompare(b[0]));
    assert.deepEqual(sorted, [["alerting", "integral", "relating", "triangle"], ["algorithms", "logarithms"], ["auctioned", "cautioned", "education"]]);`,
]);
