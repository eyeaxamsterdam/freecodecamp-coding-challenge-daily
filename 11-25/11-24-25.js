/*
Message Validator
Given a message string and a validation string, determine if the message is valid.

A message is valid if each word in the message starts with the corresponding letter in the validation string, in order.
Letters are case-insensitive.
Words in the message are separated by single spaces.
*/

function isValidMessage(message, validator) {

  return message;
}

//Tests
isValidMessage("hello world", "hw") //should return true.
isValidMessage("ALL CAPITAL LETTERS", "acl") //should return true.
isValidMessage("Coding challenge are boring.", "cca") //should return false.
isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD") //should return true.
isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT") //should return false.
