/*
Dice Odds
Given a number of six-sided dice to roll and a target sum, return the odds of rolling that sum as a string in the format "1 in X".

The number of dice will be between 1 and 6.
The target sum is always achievable with the given number of dice.
Round "X" to the nearest whole number.
*/

function getOdds(dice, target) {
    //gotta use recursion
    const countRolls = (numDice, targetSum, currentSum) => {
        if (numDice === 0) {
            return targetSum === currentSum ? 1 : 0;
        }

        let count = 0; 
        for (let roll = 1; roll <= 6; roll++) {
            count += countRolls(numDice -1, targetSum, currentSum + roll);
        }
        return count;
    }

    let odds = Math.round(6**dice/countRolls(dice,target,0));
    return `1 in ${odds}`
}

const runTests = require('../../helpers/runTests');
runTests(getOdds, `
    getOdds(1, 5) should return "1 in 6".
    getOdds(2, 4) should return "1 in 12".
    getOdds(3, 10) should return "1 in 8".
    getOdds(4, 7) should return "1 in 65".
    getOdds(5, 26) should return "1 in 111".
    getOdds(6, 35) should return "1 in 7776".
`);