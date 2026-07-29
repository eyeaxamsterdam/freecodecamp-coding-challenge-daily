/*
Hex Generator
Given a named CSS color string, generate a random hexadecimal (hex) color code that is dominant in the given color.

The function should handle "red", "green", or "blue" as an input argument.
If the input is not one of those, the function should return "Invalid color".
The function should return a random six-character hex color code where the input color value is greater than any of the others.
Example of valid outputs for a given input:
Input	Output
"red"	"FF0000"
"green"	"00FF00"
"blue"	"0000FF"
*/

function generateHex(color) {
    //initialize the string that will hold the response
    let finalString = ''
    //object to hold the color constraints and assign the highest number directly to the color.
    let colorObj = {red: 0, green: 0, blue: 0}

    //reusable function since the range is different. highest num must be over 2, then other nums must be lower than highest num/first number generated.
    const generateColor = (lowNum, highNum) => {
        let randomNum = Math.floor(Math.random() * (highNum - lowNum + 1)) + 1;
        return randomNum
    }

    //if under 16 (single digit) give add a leading zero so the length is correct.
    const convertToHexidecimal = (num) => {
        return num < 16 ? '0' + num.toString(16) : num.toString(16);
    }

    //initialize the main color so we can make sure the others are lower than this
    let mainColor = generateColor(2,255);
    
    //magic happens here. iterates over the object keys. If color given isn't in the object, throw error, otherwise if the key matches the given color, assign the 
    // highest number to it. Otherwise generate another random number that is from zero to the highest number
    Object.keys(colorObj).forEach(key => {
        if (!(color in colorObj)) {
            finalString = 'Invalid color';
        }
        else if (key === color) { 
            colorObj[key] = mainColor;
            finalString += convertToHexidecimal(mainColor).toUpperCase();
        } else {
            let nextColor = generateColor(0,mainColor-1);
            colorObj[key] = nextColor;
            finalString += convertToHexidecimal(nextColor).toUpperCase();
        }
    });
    //check it
    console.log(finalString)   

  return finalString;
}


//Tests
generateHex("red") ///should return a six-character string.
generateHex("red") //twice should return two different hex color values where red is dominant.
generateHex("green") //twice should return two different hex color values where green is dominant.
generateHex("blue") //1twice should return two different hex color values where blue is dominant.

const runTests = require('../../../helpers/runTests');
runTests(generateHex, [
    `assert.equal(generateHex("yellow"), "Invalid color");`,
    `assert.lengthOf(generateHex("red"), 6);`,
    `const hex = generateHex("red").toUpperCase();
    const isValidHex = /^[0-9A-F]{6}$/.test(hex);
    assert.isTrue(isValidHex);`,
    `const hex = generateHex("red").toUpperCase();
    const isValidHex = /^[0-9A-F]{6}$/.test(hex);
    assert.isTrue(isValidHex);
    
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    
    assert.isAbove(r, g);
    assert.isAbove(r, b);`,
    `const hex1 = generateHex("red").toUpperCase();
    const isValidHex1 = /^[0-9A-F]{6}$/.test(hex1)
    assert.isTrue(isValidHex1);
    
    const r1 = parseInt(hex1.slice(0, 2), 16);
    const g1 = parseInt(hex1.slice(2, 4), 16);
    const b1 = parseInt(hex1.slice(4, 6), 16);
    
    assert.isAbove(r1, g1);
    assert.isAbove(r1, b1);
    
    const hex2 = generateHex("red").toUpperCase();
    const isValidHex2 = /^[0-9A-F]{6}$/.test(hex2);
    assert.isTrue(isValidHex2);
    
    const r2 = parseInt(hex2.slice(0, 2), 16);
    const g2 = parseInt(hex2.slice(2, 4), 16);
    const b2 = parseInt(hex2.slice(4, 6), 16);
    
    assert.isAbove(r2, g2);
    assert.isAbove(r2, b2);
    assert.notEqual(hex1, hex2);`,
    `const hex1 = generateHex("green").toUpperCase();
    const isValidHex1 = /^[0-9A-F]{6}$/.test(hex1)
    assert.isTrue(isValidHex1);
    
    const r1 = parseInt(hex1.slice(0, 2), 16);
    const g1 = parseInt(hex1.slice(2, 4), 16);
    const b1 = parseInt(hex1.slice(4, 6), 16);
    
    assert.isAbove(g1, r1);
    assert.isAbove(g1, b1);
    
    const hex2 = generateHex("green").toUpperCase();
    const isValidHex2 = /^[0-9A-F]{6}$/.test(hex2);
    assert.isTrue(isValidHex2);
    
    const r2 = parseInt(hex2.slice(0, 2), 16);
    const g2 = parseInt(hex2.slice(2, 4), 16);
    const b2 = parseInt(hex2.slice(4, 6), 16);
    
    assert.isAbove(g2, r2);
    assert.isAbove(g2, b2);
    assert.notEqual(hex1, hex2);`,
    `const hex1 = generateHex("blue").toUpperCase();
    const isValidHex1 = /^[0-9A-F]{6}$/.test(hex1)
    assert.isTrue(isValidHex1);
    
    const r1 = parseInt(hex1.slice(0, 2), 16);
    const g1 = parseInt(hex1.slice(2, 4), 16);
    const b1 = parseInt(hex1.slice(4, 6), 16);
    
    assert.isAbove(b1, r1);
    assert.isAbove(b1, g1);
    
    const hex2 = generateHex("blue").toUpperCase();
    const isValidHex2 = /^[0-9A-F]{6}$/.test(hex2);
    assert.isTrue(isValidHex2);
    
    const r2 = parseInt(hex2.slice(0, 2), 16);
    const g2 = parseInt(hex2.slice(2, 4), 16);
    const b2 = parseInt(hex2.slice(4, 6), 16);
    
    assert.isAbove(b2, r2);
    assert.isAbove(b2, g2);
    assert.notEqual(hex1, hex2);`,
]);
