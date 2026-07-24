/*
Message Validator
Given a message string and a validation string, determine if the message is valid.

A message is valid if each word in the message starts with the corresponding letter in the validation string, in order.
Letters are case-insensitive.
Words in the message are separated by single spaces.
*/

function isValidMessage(message, validator) {
  let arrString = message.split(' ');
  let firstLetters = ''
  arrString.forEach(w => firstLetters += w[0]);
  console.log(firstLetters.toLowerCase() === validator.toLowerCase());
  return firstLetters.toLowerCase() === validator.toLowerCase();
}

//Tests

const runTests = require('../../helpers/runTests');
runTests(isValidMessage, [
    `assert.isTrue(isValidMessage("hello world", "hw"));`,
    `assert.isTrue(isValidMessage("ALL CAPITAL LETTERS", "acl"));`,
    `assert.isFalse(isValidMessage("Coding challenge are boring.", "cca"));`,
    `assert.isTrue(isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD"));`,
    `assert.isFalse(isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT"));`,
]);
