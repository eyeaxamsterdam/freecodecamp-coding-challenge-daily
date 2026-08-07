/*
Scaled Image
Given a string representing the width and height of an image, and a number to scale the image, return the scaled width and height.

The input string is in the format "WxH". For example, "800x600".
The scale is a number to multiply the width and height by.

Return the scaled dimensions in the same "WxH" format.

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/01-25
*/

function scaleImage(size, scale) {
    const [w, h] = size.split('x').map(Number);
    return `${Math.round(w * scale)}x${Math.round(h * scale)}`;
}

const runTests = require('../../../helpers/runTests');
runTests(scaleImage, [
    `assert.equal(scaleImage("800x600", 2), "1600x1200");`,
    `assert.equal(scaleImage("100x100", 10), "1000x1000");`,
    `assert.equal(scaleImage("1024x768", 0.5), "512x384");`,
    `assert.equal(scaleImage("300x200", 1.5), "450x300");`,
]);
