/*
Longest Word
Given a sentence, return the longest word in the sentence.

Ignore periods (.) when determining word length.
If multiple words are ties for the longest, return the first one that occurs.
*/

function getLongestWord(sentence) {
    const regex = /[^a-zA-Z]/g
    const wordArray = sentence.split(/\s+/g).map(word => word.replace(regex, ''));
  
    let longestWord = wordArray.reduce((longest, current) => 
      current.length > longest.length ? current : longest,"");
    
    console.log(longestWord);

    return longestWord;
}


/* 
could abviously use for loop or arr.forEach to iterate through the wordArray and find the longest word, but reduce is more efficient.
*/

const runTests = require('../../helpers/runTests');
runTests(getLongestWord, [
    `assert.equal(getLongestWord("coding is fun"), "coding");`,
    `assert.equal(getLongestWord("Coding challenges are fun and educational."), "educational");`,
    `assert.equal(getLongestWord("This sentence has multiple long words."), "sentence");`,
]);
