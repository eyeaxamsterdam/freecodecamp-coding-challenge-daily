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
countRectangles(1, 3) //should return 6.
countRectangles(3, 2) //should return 18.
countRectangles(1, 2) //should return 3.
countRectangles(5, 4) //should return 150.
countRectangles(11, 19) //should return 12540.


/*
WOw I hated this one;
*/