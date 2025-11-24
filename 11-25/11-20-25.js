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
longestWord("The quick red fox") // return "quick".
longestWord("Hello coding challenge.") // return "challenge".
longestWord("Do Try This At Home.") // return "This".
longestWord("This sentence... has commas, ellipses, and an exlamation point!") // return "exlamation".
longestWord("A tie? No way!") // return "tie".
longestWord("Wouldn't you like to know.") // return "Wouldnt".