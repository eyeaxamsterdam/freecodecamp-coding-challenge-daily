/*
2026 Winter Games Day 9: Skeleton
Given a string representing the curves on a skeleton track, determine the difficulty of the track.

The given string will only consist of the letters:
"L" for a left turn
"R" for a right turn
"S" for a straight segment

Each direction change adds 15 points (an "L" followed by an "R" or vice versa).
All other curves add 5 points each (all other "L" or "R" characters).
Straight segments add 0 points.

The difficulty of the track is based on the total score. Return:

"Easy" if the total is 0 - 100
"Medium" if the total is 101-200
"Hard" if the total is over 200

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/02-14
*/

function getDifficulty(track) {
    let score = 0;
    for (let i = 0; i < track.length; i++) {
        const curve = track[i];
        if (curve === 'S') continue;
        const prev = track[i - 1];
        score += prev !== curve && (prev === 'L' || prev === 'R') ? 15 : 5;
    }
    if (score <= 100) return 'Easy';
    if (score <= 200) return 'Medium';
    return 'Hard';
}

const runTests = require('../../../helpers/runTests');
runTests(getDifficulty, [
    `assert.equal(getDifficulty("SLSLLSRRLSRLRL"), "Easy");`,
    `assert.equal(getDifficulty("LLRSLRLRSLLRLRSLRRLRSRLLS"), "Hard");`,
    `assert.equal(getDifficulty("SRRRRLSLLRLRSSRLSRL"), "Medium");`,
    `assert.equal(getDifficulty("LSRLRLSRLRLSLRSLRLLRLSRLRLRSL"), "Hard");`,
    `assert.equal(getDifficulty("SLLSSLRLSLSLRSLSSLRL"), "Medium");`,
    `assert.equal(getDifficulty("SRSLSRSLSRRSLSRSRSLSRLSRSR"), "Easy");`,
]);
