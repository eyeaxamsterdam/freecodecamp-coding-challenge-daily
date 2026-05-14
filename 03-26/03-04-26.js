/*
Playing Card Values
Given an array of playing cards, return a new array with the numeric value of each card.

Card Values:

An Ace ("A") has a value of 1.
Numbered cards ("2" - "10") have their face value: 2 - 10, respectively.
Face cards: Jack ("J"), Queen ("Q"), and King ("K") are each worth 10.
Suits:

Each card has a suit: Spades ("S"), Clubs ("C"), Diamonds ("D"), or Hearts ("H").
Card Format:

Each card is represented as a string: "valueSuit". For Example: "AS" is the Ace of Spades, "10H" is the Ten of Hearts, and "QC" is the Queen of Clubs.
*/

function cardValues(cards) {
    let filtered = cards.map(c => {
        let card = c.slice(0,-1);
        return card === 'A' ? 1 : ['J','Q','K'].includes(card) ? 10 : Number(card);
    })
    return filtered;
}

const runTests = require('../helpers/runTests');
runTests(cardValues, `
    Waiting:1. cardValues(["3H", "4D", "5S"]) should return [3, 4, 5].
    Waiting:2. cardValues(["AS", "10S", "10H", "6D", "7D"]) should return [1, 10, 10, 6, 7].
    Waiting:3. cardValues(["8D", "QS", "2H", "JC", "9C"]) should return [8, 10, 2, 10, 9].
    Waiting:4. cardValues(["AS", "KS"]) should return [1, 10].
    Waiting:5. cardValues(["10H", "JH", "QH", "KH", "AH"]) should return [10, 10, 10, 10, 1].
`);