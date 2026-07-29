/*
Capitalized Fibonacci
Given a string, return a new string where each letter is capitalized if its index is a Fibonacci number, and lowercased otherwise.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

The first character is at index 0.
If the index of non-letter characters is a Fibonacci number, leave it unchanged.
*/

function capitalizeFibonacci(str) {
    const sequence = [0, 1, 1];
    while (str.length > sequence[sequence.length -1]) {
        sequence.push(sequence[sequence.length-1] + sequence[sequence.length-2]);                        
    } 
    let arrStr = str.split('').map((char, index) => sequence.includes(index) ? char.toUpperCase() : char.toLowerCase());
    return arrStr.join('');
}

const runTests = require('../../../helpers/runTests');
runTests(capitalizeFibonacci, [
    `assert.equal(capitalizeFibonacci("hello world"), "HELLo woRld");`,
    `assert.equal(capitalizeFibonacci("HELLO WORLD"), "HELLo woRld");`,
    `assert.equal(capitalizeFibonacci("hello, world!"), "HELLo, wOrld!");`,
    `assert.equal(capitalizeFibonacci("The quick brown fox jumped over the lazy dog."), "THE qUicK broWn fox jUmped over thE lazy dog.");`,
    `assert.equal(capitalizeFibonacci("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar ex nibh, vel ullamcorper ligula egestas quis. Integer tincidunt fringilla accumsan. Integer et metus placerat, gravida felis at, pellentesque nisl."), "LOREm ipSum dOlor sit amet, consecTetur adipiscing elit. proin pulvinar ex nibh, vel ullaMcorper ligula egestas quis. integer tincidunt fringillA accumsan. integer et metus placerat, gravida felis at, pellentesque nisl.");`,
]);
