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

  console.log(finalStr);

  return finalStr;
}

toCamelCase("hello world") //should return "helloWorld".
toCamelCase("HELLO WORLD") //should return "helloWorld".
toCamelCase("secret agent-X") //should return "secretAgentX".
toCamelCase("FREE cODE cAMP") //should return "freeCodeCamp".
toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk") //should return "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk".