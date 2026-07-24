/*
Best Hand
Given an array of five strings representing playing cards, return the name of the best hand.

Each card is represented as a two-character string: the rank followed by the suit, "2h" for example.
Ranks, from low to high, are: "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", and "A".
Suits are: "h", "d", "c", and "s".
Aces ("A") can be used as high or low in a straight.
The hands, in order from worst to best, are:

Name	Description
"High Card"	No pair or better
"Pair"	Two of one rank
"Two Pair"	Two of one rank and two of another
"Three of a Kind"	Three of one rank
"Straight"	Five ranks in a row
"Flush"	Five of the same suit
"Full House"	Three of one rank, and two of another
"Four of a Kind"	Four of one rank
"Straight Flush"	Five ranks in a row of the same suit
"Royal Flush"	"A", "K", "Q", "J", "T" of the same suit
Return the name of the best hand.
*/

function getBestHand(cards) {
    const DECK = ['1','2','3','4','5','6','7','8','9','T','J','Q','K','A']

    const royalFlush = c => {
        const seen = new Set();
        const allowed = new Set(DECK.slice(-5)) 
        const mapped = c.map(card => card[0]);
        for (const card of mapped) {
            if (!allowed.has(card)) return false;
            if (seen.has(card)) return false;
            seen.add(card);
        }
        return seen.size === allowed.size && 'Royal Flush';
    }

    const straightFlush = c => {
        const hand = c.map(c => c[0]);
        const suit = c.map(c => c[1]);
        const suitSet = new Set(suit).size
        const indices = hand.map(card => DECK.indexOf(card));
        if (new Set(indices).size !== 5) return false;
        indices.sort((a,b) => a - b);
        const isAceLow = indices[4] === 13 && indices[0] === 1 && indices[3] === 4;
        return (indices[4] - indices[0] === 4 || isAceLow) && suitSet === 1 && 'Straight Flush';
    }

    const fourOfAKind = c => {
        const hand = c.map(c => c[0]);
        let check = hand.filter(item => item === hand[0]);
        if (check.length !== 4) check = hand.filter(item => item === hand[1]);
        return check.length === 4 && 'Four of a Kind';
    }

    const fullHouse = c => {
        const hand = c.map(c => c[0]);
        return new Set(hand).size === 2 && 'Full House';
    }

    const flush = c => {
        const hand = c.map(c => c[1]);
        return new Set(hand).size === 1 && 'Flush';
    }

    const straight = c => {
        const hand = c.map(c => c[0]);
        const indices = hand.map(card => DECK.indexOf(card));
        if (new Set(indices).size !== 5) return false;
        indices.sort((a, b) => a - b);
        const isAceLow = indices[4] === 13 && indices[0] === 1 && indices[3] === 4;
        return (indices[4] - indices[0] === 4 || isAceLow) && 'Straight';
    } 

    const threeOfAKind = c => {
        const hand = c.map(c => c[0]);
        let check = hand.filter(item => item === hand[0]);
        if (check.length !== 3) check = hand.filter(item => item === hand[1]);
        if (check.length !== 3) check = hand.filter(item => item === hand[3]);
        return check.length === 3 && 'Three of a Kind';
    }

    const twoPair = c => {
        const hand = c.map(c => c[0]);
        return new Set(hand).size === 3 && 'Two Pair';
    }

    const pair = c => {
        const hand = c.map(c => c[0]);
        return new Set(hand).size === 4 && 'Pair';
    }

    return royalFlush(cards) || straightFlush(cards) || fourOfAKind(cards) || fullHouse(cards) || flush(cards) || straight(cards) || threeOfAKind(cards) || twoPair(cards) || pair(cards) || 'High Card'
}

const runTests = require('../../helpers/runTests');
runTests(getBestHand, [
    `assert.equal(getBestHand(["7s", "7h", "7d", "2c", "5h"]), "Three of a Kind");`,
    `assert.equal(getBestHand(["Ks", "Kh", "Kd", "4s", "4h"]), "Full House");`,
    `assert.equal(getBestHand(["2h", "5h", "7h", "9h", "Jh"]), "Flush");`,
    `assert.equal(getBestHand(["As", "Ah", "Ad", "Ac", "Kh"]), "Four of a Kind");`,
    `assert.equal(getBestHand(["Ts", "Th", "9d", "9c", "8h"]), "Two Pair");`,
    `assert.equal(getBestHand(["9c", "8c", "7c", "6c", "5c"]), "Straight Flush");`,
    `assert.equal(getBestHand(["As", "Kh", "Jd", "8c", "5h"]), "High Card");`,
    `assert.equal(getBestHand(["As", "2h", "3d", "4c", "5h"]), "Straight");`,
    `assert.equal(getBestHand(["Ts", "Th", "7c", "6d", "5h"]), "Pair");`,
    `assert.equal(getBestHand(["As", "Ks", "Qs", "Js", "Ts"]), "Royal Flush");`,
]);
