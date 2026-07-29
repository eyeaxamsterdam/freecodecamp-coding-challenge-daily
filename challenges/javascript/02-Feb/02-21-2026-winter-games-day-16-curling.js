/*
2026 Winter Games Day 16: Curling
Given a 5x5 matrix representing the "house" at the end of a curling round, determine which team scores and how many points they score.

The layout:

The center cell (index [2, 2]) is the "button".
The 8 cells directly surrounding the button represent ring 1.
And the 16 cells on the outer edge of the house represent ring 2.

In the given matrix:

"." represents an empty space.
"R" represents a space with a red stone.
"Y" represents a space with a yellow stone.

Scoring rules:

Only one team can score per round. 
The team with the stone closest to the button scores.
The scoring team earns 1 point for each of their stones that is closer to the button than the opponent's closest stone.
The lower the ring number, the closer to the center the stone is.
If both teams' closest stone is the same distance from the center, no team scores.

Return:

A string in the format "team: number_of_points". e.g: "R: 2".
or "No points awarded" if neither team scored any points.

For example, given:

`js
[
  [".", ".", "R", ".", "."],
  [".", "R", ".", ".", "."],
  ["Y", ".", ".", ".", "."],
  [".", "R", ".", ".", "."],
  [".", ".", ".", ".", "."]
]
`

Return "R: 2". The two red stones in ring 1 are tied for the closest and are the only two stones closer than yellows closest.
*/

function scoreCurling(house) {

}

const runTests = require('../../../helpers/runTests');
runTests(scoreCurling, [
    `assert.equal(scoreCurling([[".", ".", "R", ".", "."], [".", "R", ".", ".", "."], ["Y", ".", ".", ".", "."], [".", "R", ".", ".", "."], [".", ".", ".", ".", "."]]), "R: 2");`,
    `assert.equal(scoreCurling([[".", ".", "R", ".", "."], [".", ".", ".", ".", "."], [".", ".", "Y", ".", "R"], [".", ".", "Y", "Y", "."], [".", "Y", "R", "R", "."]]), "Y: 3");`,
    `assert.equal(scoreCurling([[".", "R", "Y", ".", "."], ["Y", ".", ".", ".", "."], [".", ".", ".", ".", "."], [".", "Y", "R", "Y", "."], [".", ".", "R", "R", "."]]), "No points awarded");`,
    `assert.equal(scoreCurling([[".", "Y", "Y", ".", "."], ["Y", ".", ".", "R", "."], [".", ".", "R", ".", "."], [".", ".", "R", "R", "."], [".", "Y", "R", "Y", "."]]), "R: 4");`,
    `assert.equal(scoreCurling([["Y", "Y", "Y", "Y", "Y"], ["Y", "R", "R", "R", "Y"], ["Y", "R", "Y", "R", "Y"], ["Y", "R", "R", "R", "Y"], ["Y", "Y", "Y", "Y", "Y"]]), "Y: 1");`,
    `assert.equal(scoreCurling([["Y", "R", "Y", "R", "Y"], ["R", ".", ".", ".", "R"], ["Y", ".", ".", ".", "Y"], ["R", ".", ".", ".", "R"], ["Y", ".", ".", "R", "Y"]]), "No points awarded");`,
]);
