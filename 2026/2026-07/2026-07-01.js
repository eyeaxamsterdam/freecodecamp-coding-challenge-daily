/*
Lucky Number
Given a string of a person's first and last name, calculate their lucky number using the following rules:

First and last names are separated by a space
Find the vowel and consonant count for each name
Multiply the smaller vowel and consonant counts by each other and then by the length of the smaller name
Do the same for the two larger counts and the larger name
Subtract the smaller value from the larger one to get their lucky number
If the final value is zero (0), return 13.
*/

function getLuckyNumber(name) {
    let getVowels = (n) => n.match(/[aeiouAEIOU]/g).length;
    let getConsonants = (n) => n.match(/[^aeiouAEIOU]/g).length;
    let vowels = [];
    let consonants = [];
    let shorter;
    let longer;
    let longerCount;
    let shorterCount;
    name.split(' ').forEach(n => {
        vowels.push(getVowels(n))  
        consonants.push(getConsonants(n))
        if (shorter === undefined || n.length < shorter.length) {
            longer = shorter;
            shorter = n
        }
        else longer = n;
    });
    longerCount = vowels.sort((a, b) => a - b)[1] * consonants.sort((a, b) => a - b)[1] * longer.length
    shorterCount = vowels.sort((a, b) => a - b)[0] * consonants.sort((a, b) => a - b)[0] * shorter.length
    let response = longerCount - shorterCount;
    return response === 0 ? 13 : response; 
}

const runTests = require('../../helpers/runTests');
runTests(getLuckyNumber, [
    `assert.equal(getLuckyNumber("John Doe"), 21);`,
    `assert.equal(getLuckyNumber("Olivia Lewis"), 52);`,
    `assert.equal(getLuckyNumber("James Wilson"), 18);`,
    `assert.equal(getLuckyNumber("Elizabeth Hernandez"), 81);`,
    `assert.equal(getLuckyNumber("Mike Walker"), 32);`,
    `assert.equal(getLuckyNumber("Chloe Perez"), 13);`,
]);
