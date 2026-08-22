/*
Most Frequent
Given an array of elements, return the element that appears most frequently.

There will always be a single most frequent element.

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/12-09
*/

function mostFrequent(arr) {
    const counts = [];
    for (const item of arr) {
        const entry = counts.find(([v]) => v === item);
        if (entry) entry[1]++;
        else counts.push([item, 1]);
    }
    return counts.reduce((best, entry) => entry[1] > best[1] ? entry : best)[0];
}

const runTests = require('../../../helpers/runTests');
runTests(mostFrequent, [
    `assert.equal(mostFrequent(["a", "b", "a", "c"]), "a");`,
    `assert.equal(mostFrequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9]), 2);`,
    `assert.isFalse(mostFrequent([true, false, "false", "true", false]));`,
    `assert.equal(mostFrequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60]), 40);`,
]);
