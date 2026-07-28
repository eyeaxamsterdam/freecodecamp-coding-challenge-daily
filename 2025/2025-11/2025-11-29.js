/*
Ball Trajectory
Today's challenge is inspired by the video game Pong, which was released November 29, 1972.

Given a matrix (array of arrays) that includes the location of the ball (2), and the previous location of the ball (1), return the matrix indices for the next location of the ball.

The ball always moves in a straight line.
The movement direction is determined by how the ball moved from 1 to 2.
The edges of the matrix are considered walls. If the ball hits a:
top or bottom wall, it bounces by reversing its vertical direction.
left or right wall, it bounces by reversing its horizontal direction.
corner, it bounces by reversing both directions.
*/

function getNextLocation(matrix) {
    let location;
    const directions = { u: [-1,0], d: [1,0], l: [0,-1], r: [0,1], ur: [-1,1], ul: [-1,-1], dr: [1,1], dl: [1,-1] }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) location = [i,j];
            if (location) break;
        }
    }
    const [x,y] = location;
    const neighbors = Object.fromEntries(
        Object.entries(directions)
            .map(([name, [dx, dy]]) => {
                const row = matrix[x + dx];
                return [name, row ? row[y + dy] : undefined];
            })
    );
    const currentSpot = Object.keys(neighbors).find(item => neighbors[item] === 2);
    let [dx, dy] = directions[currentSpot];
    const [cx, cy] = [x + dx, y + dy];

    const nextX = cx + dx;
    const nextY = cy + dy;
    if (nextX < 0 || nextX >= matrix.length) dx = -dx;
    if (nextY < 0 || nextY >= matrix[0].length) dy = -dy;

    return [cx + dx, cy + dy];
}

const runTests = require('../../helpers/runTests');
runTests(getNextLocation, [
    `assert.deepEqual(getNextLocation([[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]]), [2, 3]);`,
    `assert.deepEqual(getNextLocation([[0,0,0,0], [0,0,1,0], [0,2,0,0], [0,0,0,0]]), [3, 0]);`,
    `assert.deepEqual(getNextLocation([[0,2,0,0], [1,0,0,0], [0,0,0,0], [0,0,0,0]]), [1, 2]);`,
    `assert.deepEqual(getNextLocation([[0,0,0,0], [0,0,0,0], [2,0,0,0], [0,1,0,0]]), [1, 1]);`,
    `assert.deepEqual(getNextLocation([[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]]), [2, 2]);`,
]);
