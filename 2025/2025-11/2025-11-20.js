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

const runTests = require('../../helpers/runTests');
runTests(longestWord, `
    longestWord("The quick red fox") should return "quick".
    longestWord("Hello coding challenge.") should return "challenge".
    longestWord("Do Try This At Home.") should return "This".
    longestWord("This sentence... has commas, ellipses, and an exlamation point!") should return "exlamation".
    longestWord("A tie? No way!") should return "tie".
    longestWord("Wouldn't you like to know.") should return "Wouldnt".
`);
