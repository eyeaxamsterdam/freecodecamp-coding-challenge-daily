/*
Longest Word
Given a sentence string, return the longest word in the sentence.

Words are separated by a single space.
Only letters (a-z, case-insensitive) count toward the word's length.
If there are multiple words with the same length, return the first one that appears.
Return the word as it appears in the given string, with punctuation removed.
*/


function longestWord(sentence) {
  const regex = /a-zA-Z/g
  let longestLength = 0;
  let longestWord  = ''
  let arr = sentence.split(' ');
  arr.forEach(w => {
    let reduceStr = w.replace(/[^a-zA-Z]/g, '')
    if (reduceStr.length > longestLength) {
      longestLength = reduceStr.length;
      longestWord = reduceStr;
    }
  })
  console.log(longestWord);

  return longestWord;
}

//Tests

const runTests = require('../../../helpers/runTests');
runTests(longestWord, [
    `assert.equal(longestWord("The quick red fox"), "quick");`,
    `assert.equal(longestWord("Hello coding challenge."), "challenge");`,
    `assert.equal(longestWord("Do Try This At Home."), "This");`,
    `assert.equal(longestWord("This sentence... has commas, ellipses, and an exclamation point!"), "exclamation");`,
    `assert.equal(longestWord("A tie? No way!"), "tie");`,
    `assert.equal(longestWord("Wouldn't you like to know."), "Wouldnt");`,
]);
