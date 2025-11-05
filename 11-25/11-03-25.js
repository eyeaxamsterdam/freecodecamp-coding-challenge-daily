/*
Word Counter
Given a sentence string, return the number of words that are in the sentence.

Words are any sequence of non-space characters and are separated by a single space.
*/

function countWords(sentence) {
    console.log(sentence.split(' ').length);
    return sentence.split(' ').length;
}

//Tests
countWords("Hello world") //should return 2.
countWords("The quick brown fox jumps over the lazy dog.") //should return 9.
countWords("I like coding challenges!") //should return 4.
countWords("Complete the challenge in JavaScript and Python.") //should return 7.
countWords("The missing semi-colon crashed the entire internet.") //should return 7.