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
    let finalString = ''
    let colorObj = {red: 0, green: 0, blue: 0}

    const generateColor = (lowNum, highNum) => {
        let randomNum = Math.floor(Math.random() * (highNum - lowNum + 1)) + 1;
        return randomNum
    }

    const convertToHexidecimal = (num) => {
        return num < 16 ? '0' + num.toString(16) : num.toString(16);
    }

    let primaryColor = generateColor(2,255);
    
    Object.keys(colorObj).forEach(key => {
        if (!(color in colorObj)) {
            finalString = 'Invalid color';
        }
        else if (key === color) { 
            colorObj[key] = primaryColor;
            finalString += convertToHexidecimal(primaryColor).toUpperCase();
        } else {
            let nextColor = generateColor(0,primaryColor);
            colorObj[key] = nextColor;
            finalString += convertToHexidecimal(nextColor).toUpperCase();
        }
    });

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