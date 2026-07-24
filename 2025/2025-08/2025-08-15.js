/*
Jbelmud Text
Given a string, return a jumbled version of that string where each word is transformed using the following constraints:

The first and last letters of the words remain in place
All letters between the first and last letter are sorted alphabetically.
The input strings will contain no punctuation, and will be entirely lowercase.
*/

function jbelmu(text) {
    const jumbleWord = w => {
        if (w.length > 2) {
            const middleWord = w.slice(1,w.length-1).split('').sort();
            return w[0] + middleWord.join('') + w[w.length-1];
        }
        else return w;
    }
    return text.split(' ').map(w => jumbleWord(w)).join(' ');
}

const runTests = require('../../helpers/runTests');
runTests(jbelmu, `
    jbelmu("hello world") should return "hello wlord".
    jbelmu("i love jumbled text") should return "i love jbelmud text".
    jbelmu("freecodecamp is my favorite place to learn to code") should return "faccdeeemorp is my faiortve pacle to laern to cdoe".
    jbelmu("the quick brown fox jumps over the lazy dog") should return "the qciuk borwn fox jmpus oevr the lazy dog". 
`);