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

capitalize("this is a simple sentence.") //should return "This is a simple sentence.".
capitalize("hello world. how are you?") //should return "Hello world. How are you?".
capitalize("i did today's coding challenge... it was fun!!") //should return "I did today's coding challenge... It was fun!!".
capitalize("crazy!!!strange???unconventional...sentences.") //should return "Crazy!!!Strange???Unconventional...Sentences.".
capitalize("there's a space before this period . why is there a space before that period ?") //should return "There's a space before this period . Why is there a space before that period ?".