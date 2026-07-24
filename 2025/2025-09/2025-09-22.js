/* 
Given a string, return "digits" if the string has more digits than letters, "letters" if it has more letters than digits, and "tie" if it has the same amount of digits and letters.

Digits consist of 0-9.
Letters consist of a-z in upper or lower case.
Ignore any other characters.

 */

function digitsOrLetters(str) {
    let response = ''
    const regexLetters = /[a-zA-Z]/g
    const regexDigits = /[0-9]/g

    const compareArrays = (letters,digits) => {
      return letters.length > digits.length ? 'letters' : letters.length < digits.length ? 'digits' : 'tie' 
    }

    response = compareArrays(str.match(regexLetters), str.match(regexDigits));

    console.log(response);

    return response;
}

const runTests = require('../../helpers/runTests');
runTests(digitsOrLetters, [
    `assert.equal(digitsOrLetters("abc123"), "tie");`,
    `assert.equal(digitsOrLetters("a1b2c3d"), "letters");`,
    `assert.equal(digitsOrLetters("1a2b3c4"), "digits");`,
    `assert.equal(digitsOrLetters("abc123!@#DEF"), "letters");`,
    `assert.equal(digitsOrLetters("H3110 W0R1D"), "digits");`,
    `assert.equal(digitsOrLetters("P455W0RD"), "tie");`,
]);
