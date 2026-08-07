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

Link: https://www.freecodecamp.org/learn/daily-coding-challenge/07-31
*/

const MORSE = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F',
    '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
    '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R',
    '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
    '-.--': 'Y', '--..': 'Z',
}

function decodeMorse(code) {
    return code
        .split('   ')
        .map(word => word.split(' ').map(letter => MORSE[letter]).join(''))
        .join(' ');
}

const runTests = require('../../../helpers/runTests');
runTests(decodeMorse, [
    `assert.equal(decodeMorse("--.."), "Z");`,
    `assert.equal(decodeMorse("... --- ..."), "SOS");`,
    `assert.equal(decodeMorse("..-. .-. . . -.-. --- -.. . -.-. .- -- .--."), "FREECODECAMP");`,
    `assert.equal(decodeMorse(".... . .-.. .-.. ---   .-- --- .-. .-.. -.."), "HELLO WORLD");`,
    `assert.equal(decodeMorse("- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --."), "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG");`,
]);
