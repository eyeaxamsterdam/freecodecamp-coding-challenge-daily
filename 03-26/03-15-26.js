/*
Captured Chess Pieces
Given an array of strings representing chess pieces you still have on the board, calculate the value of the pieces your opponent has captured.

In chess, you start with 16 pieces:

Piece	Abbreviation	Quantity	Value
Pawn	"P"	8	1
Rook	"R"	2	5
Knight	"N"	2	3
Bishop	"B"	2	3
Queen	"Q"	1	9
King	"K"	1	0
The given array will only contain the abbreviations above.
Any of the 16 pieces not included in the given array have been captured.
Return the total value of all captured pieces, unless...
If the King has been captured, return "Checkmate".
*/

function getCapturedValue(pieces) {
    const kingCaptured = !pieces.includes('K');
    const BANK = {
        P: {count: 8, points: 1 },
        R:  {count: 2, points: 5},
        N: {count: 2, points: 3},
        B: {count: 2, points: 3},
        Q: {count: 1, points: 9},
        K: {count: 1, points: 0}
    }
    const total = Object.keys(BANK).reduce((a,b) => a + BANK[b]['count'] * BANK[b]['points'],0);
    const reduced = pieces.reduce((a, b) => a - BANK[b]['points'],total); 
    return kingCaptured ? 'Checkmate' : reduced; 
}

const runTests = require('../helpers/runTests');
runTests(getCapturedValue, `
    Waiting:1. getCapturedValue(["P", "P", "P", "P", "P", "P", "R", "R", "N", "B", "Q", "K"]) should return 8.
    Waiting:2. getCapturedValue(["P", "P", "P", "P", "P", "R", "B", "K"]) should return 26.
    Waiting:3. getCapturedValue(["K", "P", "P", "N", "P", "P", "R", "P", "B", "P", "N", "B"]) should return 16.
    Waiting:4. getCapturedValue(["P", "Q", "N", "P", "P", "B", "K", "P", "R", "R", "P", "P", "B", "P"]) should return 4.
    Waiting:5. getCapturedValue(["P", "K"]) should return 38.
    Waiting:6. getCapturedValue(["N", "P", "P", "B", "K", "P", "Q", "N", "P", "P", "R", "R", "P", "P", "P", "B"]) should return 0.
    Waiting:7. getCapturedValue(["N", "P", "P", "B", "P", "R", "Q", "P", "P", "P", "B"]) should return "Checkmate".
`);
