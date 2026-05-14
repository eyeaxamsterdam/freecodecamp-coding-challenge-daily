/*
Smallest Gap
Given a string, return the substring between the two identical characters that have the smallest number of characters between them (smallest gap).

There will always be at least one pair of matching characters.
The returned substring should exclude the matching characters.
If two or more gaps are the same length, return the characters from the first one.
For example, given "ABCDAC", return "DA" because:

Only "A" and "C" repeat in the string.
The number of characters between the two "A" characters is 3, and between the "C" characters is 2.
So return the string between the two "C" characters.
*/

const runTests = require("../helpers/runTests");

function smallestGap(str) {
    [...str].forEach(l => {
        let regex = new RegExp(`(?<=${l}).*?(?=${l})`, 'g');
        console.log(l.match(regex));
    })
    return str;
}

runTests(smallestGap,`
    Waiting:1. smallestGap("ABCDAC") should return "DA".
    Waiting:2. smallestGap("racecar") should return "e".
    Waiting:3. smallestGap("A{5e^SD*F4i!o#q6e&rkf(po8|we9+kr-2!3}=4") should return "#q6e&rkf(p".
    Waiting:4. smallestGap("Hello World") should return "".
    Waiting:5. smallestGap("The quick brown fox jumps over the lazy dog.") should return "fox".
`)