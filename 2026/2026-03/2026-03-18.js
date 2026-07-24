/*
Largest Number
Given a string of numbers separated by various punctuation, return the largest number.

The given string will only contain numbers and separators.
Separators can be commas (","), exclamation points ("!"), question marks ("?"), colons (":"), or semi-colons (";").
*/

function largestNumber(str) {
    const newstr = str.split(/[^-0-9]/);  
    const arr = (a,b) => b-a;
    const response = newstr.sort(arr);
    console.log(response[0]);
    return response[0];
}

//Tests:

const runTests = require('../../helpers/runTests');
runTests(largestNumber, [
    `assert.equal(largestNumber("1,2"), 2);`,
    `assert.equal(largestNumber("4;15:60,26?52!0"), 60);`,
    `assert.equal(largestNumber("-402,-1032!-569:-947;-633?-800!-1012;-402,-723?-8102!-3011"), -402);`,
    `assert.equal(largestNumber("12;-50,99.9,49.1!-10.1?88?16"), 99.9);`,
]);
