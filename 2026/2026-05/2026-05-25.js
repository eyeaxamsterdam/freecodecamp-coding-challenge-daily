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
const runTests = require("../../helpers/runTests");
runTests(guessNumber,`
    guessNumber(50, 30) should return "higher".
    guessNumber(85, 99) should return "lower".
    guessNumber(2026, 2026) should return "you got it!".
    guessNumber(92904, 11283) should return "higher".
    guessNumber(230495, 423920) should return "lower".
    guessNumber(120349, 120349) should return "you got it!".
`);