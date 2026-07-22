/* 
Given a string of words, return a new string with the words in reverse order. For example, the first word should be at the end of the returned string, and the last word should be at the beginning of the returned string.

In the given string, words can be separated by one or more spaces.
The returned string should only have one space between words.
 */

function reverseSentence(sentence) {
    let sentenceReversedArr = []
    let splitSentence = sentence.split(' ');

    splitSentence.reverse().forEach(w => w !== '' && sentenceReversedArr.push(w))

    let str = sentenceReversedArr.join(' ');

    console.log(str);
  return str;
}

reverseSentence("world hello") //should return "hello world".
reverseSentence("push commit git") //should return "git commit push".
reverseSentence("npm  install  sudo") //should return "sudo install npm".
reverseSentence("import    default   function  export") //should return "export function default import".