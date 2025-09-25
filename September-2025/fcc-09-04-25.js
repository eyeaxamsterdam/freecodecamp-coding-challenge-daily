/*
Vowel Repeater
Given a string, return a new version of the string where each vowel is duplicated one more time than the previous vowel you encountered. For instance, the first vowel in the sentence should remain unchanged. The second vowel should appear twice in a row. The third vowel should appear three times in a row, and so on.

The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
The original vowel should keeps its case.
Repeated vowels should be lowercase.
All non-vowel characters should keep their original case.
*/

function repeatVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let vowelCount = 0;
    let finalStr = '';
    const strToArr = str.split('');

    const addToString = (letter,count) => {
      for (let i = 0; i < count; i++) {
        i === 0 ? finalStr += letter : finalStr += letter.toLowerCase()
      }
    }

    for (let i = 0; i < strToArr.length; i++) {
      if (vowels.includes(strToArr[i])) {
        vowelCount ++
        addToString(strToArr[i], vowelCount);
      } else {
        finalStr += strToArr[i]
      }
    }
    
    console.log(finalStr)
    return finalStr;
}

//Tests
repeatVowels("hello world") //should return "helloo wooorld".
repeatVowels("freeCodeCamp") //should return "freeeCooodeeeeCaaaaamp".
repeatVowels("AEIOU") //should return "AEeIiiOoooUuuuu".
repeatVowels("I like eating ice cream in Iceland") //should return "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand".