/*
Game Theory
Given two equal length strings representing two players' strategies for a game, return the scores as an array [player1, player2].

The given strings will only contain one of two letters: "C" (cooperate) or "D" (defect).
Each character represents one round, scored as follows:
If both players cooperate, each scores 3.
If both players defect, each scores 1.
If one player defects and the other cooperates, the defector scores 5 and the cooperator scores 0
*/

function playGame(p1, p2) {
  const scoreKey = { C: { C: 3, D: 0 }, D: { D: 1, C: 5 } };
  return p1.split('').reduce(([s1, s2], b, i) =>
    [s1 + scoreKey[b][p2[i]], s2 + scoreKey[p2[i]][b]], [0, 0]);
}

const runTests = require('../../helpers/runTests');
runTests(playGame, `
    playGame("CCCC", "CCCC") should return [12, 12].
    playGame("DDDD", "DDDD") should return [4, 4].
    playGame("CCDD", "CDDD") should return [5, 10].
    playGame("CCCDCDCCCDDC", "CCDDCDCDDCCD") should return [24, 34].
    playGame("DDCCDDDDCDDCDDDCDD", "CCDCCCDCCCDCCCCDCC") should return [66, 21].
`);