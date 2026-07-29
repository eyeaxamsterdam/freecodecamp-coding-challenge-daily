/*
Battle of Words
Given two sentences representing your team and an opposing team, where each word from your team battles the corresponding word from the opposing team, determine which team wins using the following rules:

The given sentences will always contain the same number of words.
Words are separated by a single space and will only contain letters.
The value of each word is the sum of its letters.
Letters a to z correspond to the values 1 through 26. For example, a is 1, and z is 26.
A capital letter doubles the value of the letter. For example, A is 2, and Z is 52.
Words battle in order: the first word of your team battles the first word of the opposing team, and so on.
A word wins if its value is greater than the opposing word's value.
The team with more winning words is the winner.

Return "We win" if your team is the winner, "We lose" if your team loses, and "Draw" if both teams have the same number of wins.
*/

function battle(ourTeam, opponent) {
    const wordValue = (word) => {
        let total = 0;
        for (const char of word) {
            let value = char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;
            if (char === char.toUpperCase()) value *= 2;
            total += value;
        }
        return total;
    };

    const ourWords = ourTeam.split(' ');
    const opponentWords = opponent.split(' ');

    let ourWins = 0;
    let opponentWins = 0;
    for (let i = 0; i < ourWords.length; i++) {
        const ourValue = wordValue(ourWords[i]);
        const opponentValue = wordValue(opponentWords[i]);
        if (ourValue > opponentValue) ourWins++;
        else if (opponentValue > ourValue) opponentWins++;
    }

    if (ourWins > opponentWins) return "We win";
    if (opponentWins > ourWins) return "We lose";
    return "Draw";
}

const runTests = require('../../../helpers/runTests');
runTests(battle, [
    `assert.equal(battle("hello world", "hello word"), "We win");`,
    `assert.equal(battle("Hello world", "hello world"), "We win");`,
    `assert.equal(battle("lorem ipsum", "kitty ipsum"), "We lose");`,
    `assert.equal(battle("hello world", "world hello"), "Draw");`,
    `assert.equal(battle("git checkout", "git switch"), "We win");`,
    `assert.equal(battle("Cheeseburger with fries", "Cheeseburger with Fries"), "We lose");`,
    `assert.equal(battle("We must never surrender", "Our team must win"), "Draw");`,
]);
