/*
Message Decoder
Given a secret message string, and an integer representing the number of letters that were used to shift the message to encode it, return the decoded string.

A positive number means the message was shifted forward in the alphabet.
A negative number means the message was shifted backward in the alphabet.
Case matters, decoded characters should retain the case of their encoded counterparts.
Non-alphabetical characters should not get decoded.
*/

function decode(message, shift) {
    const regex = /[^0-9A-Za-z]/g
    const checkCode = (code,lCase) => {
        let trueShift = code; 
        let lowTarget = lCase === 'upper' ? 64 : 96;
        let highTarget = lCase === 'upper' ? 90 : 121;
        while (trueShift < lowTarget) {
            trueShift += 26;
        }
        while (trueShift > highTarget) {
            trueShift -= 26;
        }
        return trueShift;
    }
    return message.split('').map(l => {
        let lCase = l.toUpperCase() === l ? 'upper' : 'lower';
        let encodedNum = l.charCodeAt(0);
        let check = encodedNum - shift;
        let trueCode = checkCode(check,lCase);
        if (l.match(regex)) return l;
        else return String.fromCharCode(trueCode)
    }).join('');
}

const runTests = require('../../helpers/runTests');
runTests(decode, `
    Waiting:1. decode("Xlmw mw e wigvix qiwweki.", 4) should return "This is a secret message."
    Waiting:2. decode("Byffi Qilfx!", 20) should return "Hello World!"
    Waiting:3. decode("Zqd xnt njzx?", -1) should return "Are you okay?"
    Waiting:4. decode("oannLxmnLjvy", 9) should return "freeCodeCamp"
`);