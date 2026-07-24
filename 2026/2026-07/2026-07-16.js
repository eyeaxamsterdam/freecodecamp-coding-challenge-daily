/*
Pig Latin Converter
Given a string, convert it to Pig Latin using the following rules:

If a word begins with a vowel ("a", "e", "i", "o", or "u"), add "way" to the end. For example, "universe" converts to "universeway".
If a word begins with one or more consonants, move them to the end and add "ay". For example, "hello" converts to "ellohay".
Preserve the case of the first letter. For example, "Hello" converts to "Ellohay".
*/

function pigLatin(str) {
    const vowels = ['a','e','i','o','u'];
    const strArr = str.split(' ');
    const buildWord = w => {
        let index = 0
        let capital = w[0].toUpperCase() === w[0];
        let vowel = false;
        let wordArr = w.split('');
        while (vowel === false) {
            if (!vowels.includes(wordArr[0])) {
                wordArr.shift();
                wordArr.push(w[index].toLowerCase());
                index++
            }
            else vowel = true;
        }
        let wordStr = wordArr.join('');
        return capital ? wordStr.charAt(0).toUpperCase() + wordStr.slice(1) + 'ay': wordStr + 'ay'; 
    }
    const response = strArr.map( w => {
        if (vowels.includes(w[0])) return w + 'way';
        else return buildWord(w);
    });
    return response.join(' ');
}

const runTests = require('../../helpers/runTests');
runTests(pigLatin, `
    Waiting:1. pigLatin("universe") should return "universeway".
    Waiting:2. pigLatin("hello") should return "ellohay".
    Waiting:3. pigLatin("hello universe") should return "ellohay universeway".
    Waiting:4. pigLatin("Hello universe") should return "Ellohay universeway".
    Waiting:5. pigLatin("Pig Latin is fun") should return "Igpay Atinlay isway unfay".
    Waiting:6. pigLatin("The quick brown fox jumped over the lazy dog") should return "Ethay uickqay ownbray oxfay umpedjay overway ethay azylay ogday".
`);