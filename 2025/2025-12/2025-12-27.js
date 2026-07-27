/*
Rock, Paper, Scissors
Given two strings, the first representing Player 1 and the second representing Player 2, determine the winner of a match of Rock, Paper, Scissors.

The input strings will always be "Rock", "Paper", or "Scissors".
"Rock" beats "Scissors".
"Paper" beats "Rock".
"Scissors" beats "Paper".

Return:

"Player 1 wins" if Player 1 wins.
"Player 2 wins" if Player 2 wins.
"Tie" if both players choose the same option.
*/

function rockPaperScissors(player1, player2) {

}

const runTests = require('../../helpers/runTests');
runTests(rockPaperScissors, [
    `assert.equal(rockPaperScissors("Rock", "Rock"), "Tie");`,
    `assert.equal(rockPaperScissors("Rock", "Paper"), "Player 2 wins");`,
    `assert.equal(rockPaperScissors("Scissors", "Paper"), "Player 1 wins");`,
    `assert.equal(rockPaperScissors("Rock", "Scissors"), "Player 1 wins");`,
    `assert.equal(rockPaperScissors("Scissors", "Scissors"), "Tie");`,
    `assert.equal(rockPaperScissors("Scissors", "Rock"), "Player 2 wins");`,
]);
