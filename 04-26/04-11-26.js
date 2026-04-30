/*
Rook and Bishop Attack
Given a string for the location of a rook on a chess board, and another for the location of a bishop, determine if one piece can attack another.

A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). It looks like this:


A8	B8	C8	D8	E8	F8	G8	H8
A7	B7	C7	D7	E7	F7	G7	H7
A6	B6	C6	D6	E6	F6	G6	H6
A5	B5	C5	D5	E5	F5	G5	H5
A4	B4	C4	D4	E4	F4	G4	H4
A3	B3	C3	D3	E3	F3	G3	H3
A2	B2	C2	D2	E2	F2	G2	H2
A1	B1	C1	D1	E1	F1	G1	H1

Rooks can move as many squares as they want in a horizontal or vertical direction.
Bishops can move as many squares as they want in any diagonal direction.
One piece can attack another if it can move to the location of that piece.
Return:

"rook" if the rook can attack the bishop.
"bishop" if the bishop can attack the rook.
"neither" if neither piece can attack one another.
*/


function rookBishopAttack(rook, bishop) {

    let splitPlace = bishop.split('');
    if (splitPlace.includes(rook[0]) || splitPlace.includes(rook[1])) return 'rook'
    let [letter,number] = splitPlace;
    letter = letter.charCodeAt(0)-64;
    number = parseInt(number);
    let results = [];
    let size = 8;

    const directions = [
        [+1, +1],
        [+1, -1],
        [-1, +1],
        [-1, -1]
    ]

    for (const [dc, dr] of directions) {
        let col = letter;
        let row = number;
        
        while (col <= size && col >= 1  && row <= size && row >= 1) {
            results.push([String.fromCharCode(col + 64),row].join(''));
            col += dc;
            row += dr;
        }
    }

    return results.includes(rook) ? 'bishop' : 'neither';

}




const runTests = require('../helpers/runTests');
runTests(rookBishopAttack, `
    Waiting:1. rookBishopAttack("A1", "A5") should return "rook".
    Waiting:2. rookBishopAttack("C3", "F6") should return "bishop".
    Waiting:3. rookBishopAttack("D4", "D7") should return "rook".
    Waiting:4. rookBishopAttack("B7", "H1") should return "bishop".
    Waiting:5. rookBishopAttack("B3", "C5") should return "neither".
    Waiting:6. rookBishopAttack("G3", "E8") should return "neither"
`);