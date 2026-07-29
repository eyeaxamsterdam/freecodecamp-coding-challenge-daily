/* 
Sentence Capitalizer
Given a paragraph, return a new paragraph where the first letter of each sentence is capitalized.

All other characters should be preserved.
Sentences can end with a period (.), one or more question marks (?), or one or more exclamation points (!).
*/

function capitalize(paragarph) {
    let response = '';
    const sentences = paragarph.match(/[^.!?]+[.!?]+/g) || [];

    let capitalizeSentence = (s) => {
      let newSentence = '';
      for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
          newSentence += s[i].toUpperCase() + s.slice(i+1,s.length);
          break
        } else newSentence += s[i]
      }
      return newSentence
    }

    sentences.forEach((sentence) => response += capitalizeSentence(sentence));
    console.log(response);    
    return response;
}

const runTests = require('../../../helpers/runTests');
runTests(capitalize, [
    `assert.equal(capitalize("this is a simple sentence."), "This is a simple sentence.");`,
    `assert.equal(capitalize("hello world. how are you?"), "Hello world. How are you?");`,
    `assert.equal(capitalize("i did today's coding challenge... it was fun!!"), "I did today's coding challenge... It was fun!!");`,
    `assert.equal(capitalize("crazy!!!strange???unconventional...sentences."), "Crazy!!!Strange???Unconventional...Sentences.");`,
    `assert.equal(capitalize("there's a space before this period . why is there a space before that period ?"), "There's a space before this period . Why is there a space before that period ?");`,
]);
