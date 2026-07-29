/* 
Pangram
Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

Ignore non-alphabetical characters in the word or sentence.
Ignore letter casing in the word or sentence.
*/


function isPangram(sentence, letters) {
  let cleanSentence = sentence.replace(/[^a-zA-Z\s]+/g, "").replace(/ +/g, '')
  let sentenceSet = new Set(cleanSentence.toLowerCase());
  let lettersSet = new Set(letters.toLowerCase());
  console.log('sentenceSet', sentenceSet);
  console.log('lettersSet', lettersSet);
  let isSubset = lettersSet.isSubsetOf(sentenceSet) && sentenceSet.isSubsetOf(lettersSet);
  console.log(isSubset);

  return isSubset;
}

//Tests

const runTests = require('../../../helpers/runTests');
runTests(isPangram, [
    `assert.isTrue(isPangram("hello", "helo"));`,
    `assert.isFalse(isPangram("hello", "hel"));`,
    `assert.isFalse(isPangram("hello", "helow"));`,
    `assert.isTrue(isPangram("hello world", "helowrd"));`,
    `assert.isTrue(isPangram("Hello World!", "helowrd"));`,
    `assert.isFalse(isPangram("Hello World!", "heliowrd"));`,
    `assert.isFalse(isPangram("freeCodeCamp", "frcdmp"));`,
    `assert.isTrue(isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz"));`,
]);
