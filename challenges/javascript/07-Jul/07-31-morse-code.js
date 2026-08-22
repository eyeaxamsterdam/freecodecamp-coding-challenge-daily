/*
Morse Code
Given a Morse code string, return the decoded message using the following table:

| Code | Letter | Code | Letter |
|------|--------|------|--------|
| .- | A | -. | N |
| -... | B | --- | O |
| -.-. | C | .--. | P |
| -.. | D | --.- | Q |
| . | E | .-. | R |
| ..-. | F | ... | S |
| --. | G | - | T |
| .... | H | ..- | U |
| .. | I | ...- | V |
| .--- | J | .-- | W |
| -.- | K | -..- | X |
| .-.. | L | -.-- | Y |
| -- | M | --.. | Z |

Letters are separated by a single space
Words are separated by three spaces
*/

function decodeMorse(code) {

}

const runTests = require('../../../helpers/runTests');
runTests(decodeMorse, [
    `assert.equal(decodeMorse("--.."), "Z");`,
    `assert.equal(decodeMorse("... --- ..."), "SOS");`,
    `assert.equal(decodeMorse("..-. .-. . . -.-. --- -.. . -.-. .- -- .--."), "FREECODECAMP");`,
    `assert.equal(decodeMorse(".... . .-.. .-.. ---   .-- --- .-. .-.. -.."), "HELLO WORLD");`,
    `assert.equal(decodeMorse("- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --."), "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG");`,
]);
