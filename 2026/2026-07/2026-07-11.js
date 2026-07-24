/*
Five Dice
Given an array of five dice with values 1-6, return the best possible hand.

Here are the hands ranked lowest to highest:

Hand	Description
"no pair"	No pair or better
"pair"	Two dice with the same value
"two pair"	Two different pairs
"three of a kind"	Three dice with the same value
"small straight"	Four consecutive values
"large straight"	Five consecutive values
"full house"	Three of a kind and a pair
"four of a kind"	Four dice with the same value
"five of a kind"	All five dice with the same value
*/

function fiveDice(dice) {
    if (dice.filter(n => n == dice[0]).length === 5) return 'five of a kind'
    if (dice.filter(n => n == dice[0]).length === 4 || dice.filter(n => n == dice[1]).length === 4) return 'four of a kind'
    if (new Set(dice).size === 2) return 'full house';
    const arrangeDice = dice.sort((a,b) => a - b);
    let consecutive = (arr) => arr.every((n,i) => {
        if (i > 0) return n === arr[i-1] + 1;
        else return true;
    });
    if (consecutive(arrangeDice)) return 'large straight';
    if (consecutive(arrangeDice.slice(0,-1)) || consecutive(arrangeDice.slice(1))) return 'small straight'
    let kind = (arr,num,size) => {
        return arr.filter(n => n === num).length === size;
    }
    if (kind(dice,dice[0],3) === true || kind(dice,dice[1],3) === true || kind(dice,dice[2],3) === true) return 'three of a kind';
    if (new Set(dice).size === 3) return 'two pair';
    if (new Set(dice).size === 4) return 'pair';
    return 'no pair' 
}

const runTests = require('../../helpers/runTests');
runTests(fiveDice, `
    fiveDice([1, 1, 1, 1, 1]) should return "five of a kind".
    fiveDice([5, 5, 5, 6, 5]) should return "four of a kind".
    fiveDice([2, 5, 6, 4, 3]) should return "large straight".
    fiveDice([4, 3, 3, 3, 1]) should return "three of a kind".
    fiveDice([4, 6, 2, 6, 5]) should return "pair".
    fiveDice([1, 4, 5, 6, 2]) should return "no pair".
    fiveDice([1, 3, 4, 6, 2]) should return "small straight".
    fiveDice([2, 2, 5, 2, 5]) should return "full house".
    fiveDice([6, 4, 5, 6, 4]) should return "two pair".
`);