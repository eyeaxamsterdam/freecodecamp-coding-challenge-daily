/*
Purge Most Frequent
Given an array of values, remove all occurrences of the most frequently occurring element and return the resulting array.

If multiple values are tied for most frequent, remove all of them.
Do not change any of the other elements or their order.
*/

function purgeMostFrequent(arr) {
    const counts = new Map();
    for (const v of arr) counts.set(v, (counts.get(v) || 0) + 1);
    const maxCount = Math.max(...counts.values());
    const toRemove = new Set([...counts.entries()].filter(([, c]) => c === maxCount).map(([v]) => v));
    return arr.filter(v => !toRemove.has(v));
}

const runTests = require('../../../helpers/runTests');
runTests(purgeMostFrequent, [
    `assert.deepEqual(purgeMostFrequent([1, 2, 2, 3]), [1, 3]);`,
    `assert.deepEqual(purgeMostFrequent(["a", "b", "d", "b", "c", "d", "c", "d", "c", "d"]), ["a", "b", "b", "c", "c", "c"]);`,
    `assert.deepEqual(purgeMostFrequent(["red", "blue", "green", "red", "blue", "green", "blue"]), ["red", "green", "red", "green"]);`,
    `assert.deepEqual(purgeMostFrequent([5, 5, 5, 5]), []);`,
    `assert.deepEqual(purgeMostFrequent([10, 12, 7, 3, 7, 7, 12, 12]), [10, 3]);`,
]);
