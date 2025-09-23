/*
String Mirror
Given two strings, determine if the second string is a mirror of the first.

A string is considered a mirror if it contains the same letters in reverse order.
Treat uppercase and lowercase letters as distinct.
Ignore all non-alphabetical characters.

*/

function isMirror(str1, str2) {
  let reverseArray = []
  let regex = /[^a-zA-Z]/g
  let splitStr2 = str2.replace(regex, '').split('');
    for (let i = splitStr2.length-1; i >= 0; i--) {
      reverseArray.push(splitStr2[i]);
    }
    
  let reverseStr2 = reverseArray.join('');
  let filterStr1 = str1.replace(regex, '');

  let isEqual = filterStr1 === reverseStr2 ? true : false
  console.log(isEqual);
  return isEqual;
}

isMirror("helloworld", "helloworld") //should return false.
isMirror("Hello World", "dlroW olleH") //should return true.
isMirror("RaceCar", "raCecaR") //should return true.
isMirror("RaceCar", "RaceCar") //should return false.
isMirror("Mirror", "rorrim") //should return false.
isMirror("Hello World", "dlroW-olleH") //should return true.