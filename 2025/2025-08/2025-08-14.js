/*
S P A C E J A M
Given a string, remove all spaces from the string, insert two spaces between every character, convert all alphabetical letters to uppercase, and return the result.

Non-alphabetical characters should remain unchanged (except for spaces).
*/

function spaceJam(s) {
    let trim = s.replace(/\s+/g, "")
    return trim.split('').map(l => l.toUpperCase()).join('  ').trim();
}

const runTests = require('../../helpers/runTests');
runTests(spaceJam, `
    spaceJam("freeCodeCamp") should return "F  R  E  E  C  O  D  E  C  A  M  P".
    spaceJam("   free   Code   Camp   ") should return "F  R  E  E  C  O  D  E  C  A  M  P".
    spaceJam("Hello World?!") should return "H  E  L  L  O  W  O  R  L  D  ?  !".
    spaceJam("C@t$ & D0g$") should return "C  @  T  $  &  D  0  G  $".
    spaceJam("allyourbase") should return "A  L  L  Y  O  U  R  B  A  S  E".
`);