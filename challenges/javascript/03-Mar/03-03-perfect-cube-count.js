/*
Perfect Cube Count
Given two integers, determine how many perfect cubes exist in the range between and including the two numbers.

The lower number is not guaranteed to be the first argument.
A number is a perfect cube if there exists an integer (n) where n * n * n = number. For example, 27 is a perfect cube because 3 * 3 * 3 = 27.
*/
function countPerfectCubes(a, b) {
    const higher = a > b ? a : b    
    const lower = a < b ? a : b
    const range = Array.from({ length: higher - lower + 1 }, (_, i) => lower + i);
    const filtered = range.filter((n) => Number.isInteger(Math.cbrt(n)));
    return filtered.length;
}

const runTests = require('../../../helpers/runTests');
runTests(countPerfectCubes, [
    `assert.equal(countPerfectCubes(3, 30), 2);`,
    `assert.equal(countPerfectCubes(1, 30), 3);`,
    `assert.equal(countPerfectCubes(30, 0), 4);`,
    `assert.equal(countPerfectCubes(-64, 64), 9);`,
    `assert.equal(countPerfectCubes(9214, -8127), 41);`,
]);
