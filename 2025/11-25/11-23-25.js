/*
Character Count
Given a sentence string, return an array with a count of each character in alphabetical order.

Treat upper and lowercase letters as the same letter when counting.
Ignore numbers, spaces, punctuation, etc.
Return the count and letter in the format "letter count". For instance, "a 3".
All returned letters should be lowercase.
Do not return a count of letters that are not in the given string.
*/
function countCharacters(sentence) {
  let finalArr = [];
  let lastStop = 0;
  const myArr = sentence.toLowerCase().match(/[a-z]/g).sort();
  console.log(myArr)
  const mySet = new Set(myArr);
  const checkMatch = (letter) => {
    let count = 0;
    for (let i = lastStop; i < myArr.length; i++) {
      console.log('myArr[i] ',myArr[i]);
      console.log('letter ', letter);
      if (letter === myArr[i]) {
        count++
      } else {
        lastStop = i;
        break;
      }
    }
    return count;
  }
  mySet.keys().forEach((l) => finalArr.push(`${l} ${checkMatch(l)}`));
  console.log(finalArr);

  return finalArr;
}

//Tests
//countCharacters("hello world") //should return ["d 1", "e 1", "h 1", "l 3", "o 2", "r 1", "w 1"].
//countCharacters("I love coding challenges!") //should return ["a 1", "c 2", "d 1", "e 3", "g 2", "h 1", "i 2", "l 3", "n 2", "o 2", "s 1", "v 1"].
countCharacters("// TODO: Complete this challenge ASAP!") //should return ["a 3", "c 2", "d 1", "e 4", "g 1", "h 2", "i 1", "l 3", "m 1", "n 1", "o 3", "p 2", "s 2", "t 3"].