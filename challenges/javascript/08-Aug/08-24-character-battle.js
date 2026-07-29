/*
Character Battle
Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:

Characters a-z have a strength of 1-26, respectively.
Characters A-Z have a strength of 27-52, respectively.
Digits 0-9 have a strength of their face value.
All other characters have a value of zero.
Each character can only fight one battle.

For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:

"Opponent retreated" if your army has more characters than the opposing army.
"We retreated" if the opposing army has more characters than yours.
"We won" if your army won more battles.
"We lost" if the opposing army won more battles.
"It was a tie" if both armies won the same number of battles.
*/

function battle(myArmy, opposingArmy) {
    if (myArmy.length > opposingArmy.length) return "Opponent retreated";
    if (opposingArmy.length > myArmy.length) return "We retreated";

    const strength = (char) => {
        if (char >= 'a' && char <= 'z') return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        if (char >= 'A' && char <= 'Z') return char.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
        if (char >= '0' && char <= '9') return Number(char);
        return 0;
    };

    let myWins = 0;
    let opponentWins = 0;
    for (let i = 0; i < myArmy.length; i++) {
        const mine = strength(myArmy[i]);
        const theirs = strength(opposingArmy[i]);
        if (mine > theirs) myWins++;
        else if (theirs > mine) opponentWins++;
    }

    if (myWins > opponentWins) return "We won";
    if (opponentWins > myWins) return "We lost";
    return "It was a tie";
}

const runTests = require('../../../helpers/runTests');
runTests(battle, [
    `assert.equal(battle("Hello", "World"), "We lost");`,
    `assert.equal(battle("pizza", "salad"), "We won");`,
    `assert.equal(battle("C@T5", "D0G$"), "We won");`,
    `assert.equal(battle("kn!ght", "orc"), "Opponent retreated");`,
    `assert.equal(battle("PC", "Mac"), "We retreated");`,
    `assert.equal(battle("Wizards", "Dragons"), "It was a tie");`,
    `assert.equal(battle("Mr. Smith", "Dr. Jones"), "It was a tie");`,
]);
