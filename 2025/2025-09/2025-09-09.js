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

const runTests = require('../../helpers/runTests');
runTests(allUnique, [
    `assert.isTrue(allUnique("abc"));`,
    `assert.isTrue(allUnique("aA"));`,
    `assert.isTrue(allUnique("QwErTy123!@"));`,
    `assert.isTrue(allUnique("~!@#$%^&*()_+"));`,
    `assert.isFalse(allUnique("hello"));`,
    `assert.isFalse(allUnique("freeCodeCamp"));`,
    `assert.isFalse(allUnique("!@#*$%^&*()aA"));`,
]);
