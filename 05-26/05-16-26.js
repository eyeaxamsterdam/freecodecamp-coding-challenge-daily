/*
Longest Domino Chain
Given a 2D array representing a set of dominoes, return the longest valid chain.

Each domino is a pair of numbers from 0–6, e.g. [3, 2].
A chain is valid when the second number of each domino matches the first number of the next.
The first number of the first domino and the second number of the last one don't need to match anything.
Any domino can be flipped, so [3, 2] can be played as [2, 3].
There is always exactly one longest valid chain.
For example, given [[1, 2], [4, 5], [2, 3]], return [[1, 2], [2, 3]].
*/

function getLongestChain(dominoes) {
    let longestChain = [];

    function buildChain(chain, used) {
        if (chain.length > longestChain.length) {
            longestChain = [...chain];
        }

        const lastValue = chain[chain.length - 1][1];

        for (let i = 0; i < dominoes.length; i++) {
            if (used.has(i)) continue;

            const [a, b] = dominoes[i];
            used.add(i);

            if (a === lastValue) {
                chain.push([a, b]);
                buildChain(chain, used);
                chain.pop();
            }
            if (b === lastValue) {
                chain.push([b, a]);
                buildChain(chain, used);
                chain.pop();
            }

            used.delete(i);
        }
    }

    for (let i = 0; i < dominoes.length; i++) {
        const [a, b] = dominoes[i];
        const used = new Set([i]);

        buildChain([[a, b]], used);
        if (a !== b) buildChain([[b, a]], used);
    }

    return longestChain;
}

const runTests = require('../helpers/runTests');
runTests(getLongestChain, `
    Waiting:1. getLongestChain([[1, 2], [4, 5], [2, 3]]) should return [[1, 2], [2, 3]].
    Waiting:2. getLongestChain([[2, 1], [4, 3], [5, 3]]) should return [[4, 3], [3, 5]].
    Waiting:3. getLongestChain([[1, 2], [3, 4], [2, 3], [4, 0]]) should return [[1, 2], [2, 3], [3, 4], [4, 0]].
    Waiting:4. getLongestChain([[6, 6], [6, 1], [1, 1], [0, 3], [2, 3], [4, 1], [5, 6]]) should return [[4, 1], [1, 1], [1, 6], [6, 6], [6, 5]].
    Waiting:5. getLongestChain([[0, 4], [3, 3], [0, 3], [5, 6], [4, 5], [4, 2], [5, 5], [1, 2], [4, 4]]) should return [[3, 3], [3, 0], [0, 4], [4, 4], [4, 5], [5, 5], [5, 6]].
`); 