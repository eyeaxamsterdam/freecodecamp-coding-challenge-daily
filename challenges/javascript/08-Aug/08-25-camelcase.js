/*
camelCase
Given a string, return its camel case version using the following rules:

Words in the string argument are separated by one or more characters from the following set: space ( ), dash (-), or underscore (_). Treat any sequence of these as a word break.
The first word should be all lowercase.
Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
All spaces and separators should be removed.
*/

function toCamelCase(s) {
  let finalStr = '';
  const regex =/[^a-zA-Z0-9]/
  const toArray = s.split(regex).filter((item) => item !== '');


  const capitalize = (str) => {
    let newStr = ''
    newStr = str[0].toUpperCase() + str.slice(1,str.length).toLowerCase();
    return newStr;
  }
  
  toArray.forEach((str, index) => {
    index === 0 ? finalStr += str.toLowerCase() : finalStr += capitalize(str);
  });

  return finalStr;
}
const runTests = require('../../../helpers/runTests');
runTests(toCamelCase, [
    `assert.equal(toCamelCase("hello world"), "helloWorld");`,
    `assert.equal(toCamelCase("HELLO WORLD"), "helloWorld");`,
    `assert.equal(toCamelCase("secret agent-X"), "secretAgentX");`,
    `assert.equal(toCamelCase("FREE cODE cAMP"), "freeCodeCamp");`,
    `assert.equal(toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk"), "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk");`,
]);
