/*
Binary Crossword
Given a character, determine if its 8-bit binary representation can be found in the following grid, horizontally or vertically in either direction:

0 1 0 0 0 0 0 1
0 1 1 0 1 1 1 1
0 1 0 0 0 1 0 0
0 1 1 0 0 1 0 1
0 1 0 1 0 0 1 0
0 1 0 1 0 1 0 0
0 1 1 0 1 0 0 0
1 0 1 0 1 1 1 0
For example, "A" has the binary representation 01000001, which appears in the first row from left to right.
*/

function isInCrossword(char) {
    const GRID = ['01000001', '01101111','01000100','01100101','01010010', '01010100','01101000','10101110' ]

    let binary = char.charCodeAt(0).toString(2);
    console.log(binary);

    for (let i = 0; i < GRID.length; i++) {
        // console.log('right',GRID[i])
        if (GRID[i].includes(binary)) return true;
        let reverse = GRID[i].split('').reverse().join('');
        // console.log('left', reverse);
        if (reverse.includes(binary)) return true;

    }

    let Itemlength = GRID[0].length

    for (let i = 0; i < Itemlength; i++) {
        let j = 0;
        let downArray = []
        while (j < GRID[i].length) {
            downArray.push(GRID[j].charAt(i));
            j++;
        }
        // console.log('downArray ', downArray.join(''));
        if (downArray.join('').includes(binary)) return true;
        let reverse = downArray.reverse()
        // console.log('up! binary ', binary, ' equals ', reverse.join(''));
        if (reverse.join('').includes(binary)) return true;

    }

    return false;
}


const runTests = require('../helpers/runTests');
runTests(isInCrossword, `
    Waiting:1. isInCrossword("I") should return true.
    Waiting:2. isInCrossword("D") should return true.
    Waiting:3. isInCrossword("0") should return true.
    Waiting:4. isInCrossword("u") should return true.
    Waiting:5. isInCrossword("Y") should return false.
    Waiting:6. isInCrossword("p") should return false.
    Waiting:7. isInCrossword("1") should return false.
    IDxting:8. isInCrossword("Q") should return false.
`);   