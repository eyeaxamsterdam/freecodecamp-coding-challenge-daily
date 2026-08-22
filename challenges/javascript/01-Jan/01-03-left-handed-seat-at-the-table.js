/*
Left-Handed Seat at the Table
Given a 4x2 matrix (array of arrays) representing the seating arrangement for a meal, determine how many seats a left-handed person can sit at.

A left-handed person cannot sit where a right-handed person would be in the seat to the immediate left of them.

In the given matrix:

An "R" is a seat occupied by a right-handed person.
An "L" is a seat occupied by a left-handed person.
A "U" is an unoccupied seat.
Only unoccupied seats are available to sit at.
The seats in the top row are facing "down", and the seats in the bottom row are facing "up" (like a table), so left and right are relative to the seat's orientation.
Corner seats only have one seat next to them.

For example, in the given matrix:

`json
[
  ["U", "R", "U", "L"],
  ["U", "R", "R", "R"]
]
`

The top-left seat is cannot be sat in because there's a right-handed person to the left. The other two open seats can be sat in because there isn't a right-handed person to the left.

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/01-03
*/

function findLeftHandedSeats(table) {
    let count = 0;
    for (let r = 0; r < table.length; r++) {
        for (let c = 0; c < table[r].length; c++) {
            if (table[r][c] !== 'U') continue;
            const leftCol = r === 0 ? c + 1 : c - 1;
            if (table[r][leftCol] !== 'R') count++;
        }
    }
    return count;
}

const runTests = require('../../../helpers/runTests');
runTests(findLeftHandedSeats, [
    `assert.equal(findLeftHandedSeats([["U", "R", "U", "L"], ["U", "R", "R", "R"]]), 2);`,
    `assert.equal(findLeftHandedSeats([["U", "U", "U", "U"], ["U", "U", "U", "U"]]), 8);`,
    `assert.equal(findLeftHandedSeats([["U", "R", "U", "R"], ["L", "R", "R", "U"]]), 0);`,
    `assert.equal(findLeftHandedSeats([["L", "U", "R", "R"], ["L", "U", "R", "R"]]), 1);`,
    `assert.equal(findLeftHandedSeats([["U", "R", "U", "U"], ["U", "U", "L", "U"]]), 5);`,
]);
