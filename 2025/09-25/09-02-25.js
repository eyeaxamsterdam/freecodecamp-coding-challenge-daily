/* 
RGB to Hex
Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.

Here are some example outputs for a given input:

Input	Output
"rgb(255, 255, 255)"	"#ffffff"
"rgb(1, 2, 3)"	"#010203"
Make any letters lowercase.
Return a # followed by six characters. Don't use any shorthand values.
*/


function rgbToHex(rgb) {
  const numbers = rgb.match(/\d+/g).map(Number);
  let rgbHex = '#'

  numbers.forEach((num) => {
    num < 16 ? rgbHex += '0'+ num.toString(16) : rgbHex += num.toString(16)
    });

    console.log(rgbHex)
    return rgbHex;
}


//Tests
rgbToHex("rgb(255, 255, 255)") //should return "#ffffff".
rgbToHex("rgb(1, 11, 111)") //should return "#010b6f".
rgbToHex("rgb(173, 216, 230)") //should return "#add8e6".
rgbToHex("rgb(79, 123, 201)") //should return "#4f7bc9".