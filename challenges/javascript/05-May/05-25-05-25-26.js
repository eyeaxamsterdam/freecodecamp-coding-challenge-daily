/* 05-25-26
Secret Number
Given a secret number and a guess, determine if the guess is correct.

Return:

"higher" if the secret number is higher than the guess.
"lower" if the secret number is lower than the guess.
"you got it!" if the guess is correct.
*/


function guessNumber(secret, guess) {
    return guess === secret && 'you got it!' || guess > secret && 'lower' || guess < secret && 'higher';
}
const runTests = require('../../../helpers/runTests');
runTests(guessNumber, [
    `assert.equal(guessNumber(50, 30), "higher");`,
    `assert.equal(guessNumber(85, 99), "lower");`,
    `assert.equal(guessNumber(2026, 2026), "you got it!");`,
    `assert.equal(guessNumber(92904, 11283), "higher");`,
    `assert.equal(guessNumber(230495, 423920), "lower");`,
    `assert.equal(guessNumber(120349, 120349), "you got it!");`,
]);
