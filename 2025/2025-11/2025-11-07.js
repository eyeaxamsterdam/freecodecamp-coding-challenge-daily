/*
Counting Cards
A standard deck of playing cards has 13 unique cards in each suit. Given an integer representing the number of cards to pick from the deck, return the number of unique combinations of cards you can pick.

Order does not matter. Picking card A then card B is the same as picking card B then card A.
For example, given 52, return 1. There's only one combination of 52 cards to pick from a 52 card deck. And given 2, return 1326, There's 1326 card combinations you can end up with when picking 2 cards from the deck.
*/

function combinations(cards) {

    const factor = (num) => {
        if (num < 0) {
            return "Factorial is not defined for negative numbers.";
        } else if (num === 0 || num === 1) {
            return 1;
        } else {
            return Array.from({ length: num }, (_, i) => i + 1)
            .reduce((acc, current) => acc * current, 1);
        }
    };

    const maths = (n,r) => {
        let answer = factor(n)/(factor(r)*(factor(n-r)));
        console.log(answer);
    }

  return maths(52,cards);
}

//Tests

const runTests = require('../../helpers/runTests');
runTests(combinations, [
    `assert.equal(combinations(52), 1);`,
    `assert.equal(combinations(1), 52);`,
    `assert.equal(combinations(2), 1326);`,
    `assert.equal(combinations(5), 2598960);`,
    `assert.equal(combinations(10), 15820024220);`,
    `assert.equal(combinations(50), 1326);`,
]);
