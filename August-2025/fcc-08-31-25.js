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
generateHex("yellow") //should return "Invalid color".
generateHex("red") ///should return a six-character string.
generateHex("red") //should return a valid six-character hex color code.
generateHex("red") //should return a valid hex color with a higher red value than other colors.
generateHex("red") //twice should return two different hex color values where red is dominant.
generateHex("green") //twice should return two different hex color values where green is dominant.
generateHex("blue") //1twice should return two different hex color values where blue is dominant.