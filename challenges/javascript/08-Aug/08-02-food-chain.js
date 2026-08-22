/*
Food Chain
Given an array of [predator, prey] pairs, return the food chain from the apex predator down to the bottom.

The apex predator is the animal that is never prey to another animal.
Return the chain as an array of strings.
*/

function getFoodChain(pairs) {
    const nextOf = new Map(pairs);
    const isPrey = new Set(pairs.map(([, prey]) => prey));
    const [apex] = pairs.find(([predator]) => !isPrey.has(predator));

    const chain = [apex];
    while (nextOf.has(chain[chain.length - 1])) {
        chain.push(nextOf.get(chain[chain.length - 1]));
    }
    return chain;
}

const runTests = require('../../../helpers/runTests');
runTests(getFoodChain, [
    `assert.deepEqual(getFoodChain([["cat", "mouse"]]), ["cat", "mouse"]);`,
    `assert.deepEqual(getFoodChain([["wolf", "deer"], ["deer", "grass"]]), ["wolf", "deer", "grass"]);`,
    `assert.deepEqual(getFoodChain([["hawk", "snake"], ["snake", "frog"], ["frog", "fly"]]), ["hawk", "snake", "frog", "fly"]);`,
    `assert.deepEqual(getFoodChain([["rabbit", "grass"], ["fox", "rabbit"], ["eagle", "fox"]]), ["eagle", "fox", "rabbit", "grass"]);`,
    `assert.deepEqual(getFoodChain([["seal", "salmon"], ["herring", "shrimp"], ["orca", "seal"], ["shrimp", "plankton"], ["salmon", "herring"]]), ["orca", "seal", "salmon", "herring", "shrimp", "plankton"]);`,
]);
