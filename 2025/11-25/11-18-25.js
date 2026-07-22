/*
100 Characters
Welcome to the 100th Daily Coding Challenge!

Given a string, repeat its characters until the result is exactly 100 characters long. If your repetitions go over 100 characters, trim the extra so it's exactly 100.
*/

function oneHundred(chars) {
  let str = ''
  while (str.length < 100) {
    str += chars;
  }
  console.log(str.slice(0,100));
  return str.slice(0,100);
}

//Tests
oneHundred("One hundred ") //should return "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One ".
oneHundred("freeCodeCamp ") //should return "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC".
oneHundred("daily challenges ") //should return "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge".
oneHundred("!") //should return "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!".