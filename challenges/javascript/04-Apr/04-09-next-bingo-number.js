/*
Next Bingo Number
Given a bingo number, return the next bingo number sequentially.

A bingo number is a single letter followed by a number in its range according to this chart:

Letter	Number Range
"B"	1-15
"I"	16-30
"N"	31-45
"G"	46-60
"O"	61-75
For example, given "B10", return "B11", the next bingo number. If given the last bingo number, return "B1".
*/


function getNextBingoNumber(n) {
    let key = [];
    const bingo = ['B','I','N','G','O']
    let num = 1;
    for (let i = 0; i < bingo.length; i++) {
        while (num <= (15 * (i + 1))) {
            key.push(bingo[i] + num.toString()) 
            num++
        }

    }

    console.log(key[key.indexOf(n) + 1 ] || key[0]);

    return key[key.indexOf(n) + 1 ] || key[0]; 
} 

const runTests = require('../../../helpers/runTests');
runTests(getNextBingoNumber, [
    `assert.equal(getNextBingoNumber("B10"), "B11");`,
    `assert.equal(getNextBingoNumber("N33"), "N34");`,
    `assert.equal(getNextBingoNumber("I30"), "N31");`,
    `assert.equal(getNextBingoNumber("G60"), "O61");`,
    `assert.equal(getNextBingoNumber("O75"), "B1");`,
]);
