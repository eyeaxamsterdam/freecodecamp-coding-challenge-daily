/*
Vowels and Consonants
Given a string, return an array with the number of vowels and number of consonants in the string.

Vowels consist of a, e, i, o, u in any case.
Consonants consist of all other letters in any case.
Ignore any non-letter characters.
For example, given "Hello World", return [3, 7].
*/

function count(str) {
  const VOWELS = ['a','e','i','o','u']
  let vowels = 0;
  let consenants = 0;
  let count = []
  const regex = /[a-zA-Z]/g
  const onlyLs = str.match(regex);
  onlyLs.forEach((l) => VOWELS.includes(l.toLowerCase()) ? vowels++ : consenants++);
  count = [vowels, consenants];
  console.log(count);
  return count;
}

//Tests
count("Hello World") //should return [3, 7].
count("JavaScript") //should return [3, 7].
count("Python") //should return [1, 5].
count("freeCodeCamp") //should return [5, 7].
count("Hello, World!") //should return [3, 7].
count("The quick brown fox jumps over the lazy dog.") //should return [11, 24]