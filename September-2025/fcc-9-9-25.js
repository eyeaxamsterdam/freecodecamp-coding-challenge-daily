/* 
Unique Characters
Given a string, determine if all the characters in the string are unique.

Uppercase and lowercase letters should be considered different characters.
 */

function allUnique(str) {
    let unique;
    let splitStr = str.split('');
    for (let i = 0; i < splitStr.length; i++) {
      if (str.slice(i+1).includes(splitStr[i])) {
        unique = false;
        break;
      } else if (i === splitStr.length -1) {
        unique = true;        
      }
    }
  console.log(unique);
  return unique;
}

//Tests
allUnique("abc") //should return true.
allUnique("aA") //should return true.
allUnique("QwErTy123!@") //should return true.
allUnique("~!@#$%^&*()_+") //should return true.
allUnique("hello") //should return false.
allUnique("freeCodeCamp") //should return false.
allUnique("!@#*$%^&*()aA") //should return false.