/*
Rectangle Count
Given two positive integers representing the width and height of a rectangle, determine how many rectangles can fit in the given one.

Only count rectangles with integer width and height.
For example, given 1 and 3, return 6. Three 1x1 rectangles, two 1x2 rectangles, and one 1x3 rectangle.
*/

function countRectangles(width, height) {
    let count = 0;

    for (let i = 1; i <= width; i++) {
        for (let j = 1; j <= height; j++) {
            count += (width - i + 1) * (height - j + 1);
        }
    }
    console.log(count);

    return count;
}

//Tests


/*
WOw I hated this one;
*/

const runTests = require('../../helpers/runTests');
runTests(countRectangles, [
    `assert.equal(countRectangles(1, 3), 6);`,
    `assert.equal(countRectangles(3, 2), 18);`,
    `assert.equal(countRectangles(1, 2), 3);`,
    `assert.equal(countRectangles(5, 4), 150);`,
    `assert.equal(countRectangles(11, 19), 12540);`,
]);
