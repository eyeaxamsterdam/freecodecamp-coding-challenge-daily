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

digitsOrLetters("abc123")

 
digitsOrLetters("abc123") //should return "tie".
digitsOrLetters("a1b2c3d") //should return "letters".
digitsOrLetters("1a2b3c4") //should return "digits".
digitsOrLetters("abc123!@#DEF") //should return "letters".
digitsOrLetters("H3110 W0R1D") //should return "digits".
digitsOrLetters("P455W0RD") //should return "tie".
