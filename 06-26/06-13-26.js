/*
Zoning Regulations
Given a 2D grid (array of arrays) representing a city's building layout, return the coordinates of all buildings that are violating zoning rules.

Each cell in the grid contains one of the labels from the table below. A building is in violation if any of its (up to) 4 neighbors, horizontal or vertical, are a type it cannot be adjacent to.

Label	Type	Cannot be adjacent to
"i"	industrial	"R", "I"
"A"	Agricultural	"C"
"R"	Residential	"i", "C"
"I"	Institutional	"i"
"C"	Commercial	"R", "A"
"" (empty string)	undeveloped	no restrictions
Return the coordinates of all violating cells as an array of [row, col] pairs, in any order. If no violations exist, return an empty array.
*/

function getZoneViolations(grid) {
    const RESTRICTIONS = {
        i: ['R','I'],
        A: ['C'],
        R: ['i','C'],
        I: ['i'],
        C: ['R','A'],
        "":[]
    }
    const rows = grid.length;
    const response = []
    for (let r = 0; r < rows; r++) {
        const cols = grid[r].length;
        for (let c = 0; c < cols; c++) {
            const restricted = RESTRICTIONS[grid[r][c]];
            if (restricted.length === 0) continue;
            const neighbors = [
                r > 0 ? grid[r-1][c] : null,
                r < rows-1 ? grid[r+1][c] : null,
                c > 0 ? grid[r][c-1] : null,
                c < cols-1 ? grid[r][c+1] : null,
            ];
            if (neighbors.some(n => restricted.includes(n))) response.push([r,c]);
        }
    }
    return response;
}

const runTests = require('../helpers/runTests');
runTests(getZoneViolations, `
    Waiting:1. getZoneViolations([["R", "C"], ["", "C"]]) should return [[0, 0], [0, 1]].
    Waiting:2. getZoneViolations([["", "i"], ["", "R"], ["R", "I"]]) should return [[0, 1], [1, 1]].
    Waiting:3. getZoneViolations([["A", "i", "C"], ["A", "", "C"], ["R", "R", "I"]]) should return [].
    Waiting:4. getZoneViolations([["R", "R", "C", "R", "R"], ["R", "I", "C", "", "A"], ["R", "R", "", "i", "A"]]) should return [[0, 1], [0, 2], [0, 3]].
    Waiting:5. getZoneViolations([["R", "A", "A", "", "i", "i"], ["R", "I", "", "C", "i", "i"], ["R", "", "C", "C", "A", "A"], ["R", "R", "C", "I", "R", "R"]]) should return [[2, 3], [2, 4], [3, 1], [3, 2]].
`);