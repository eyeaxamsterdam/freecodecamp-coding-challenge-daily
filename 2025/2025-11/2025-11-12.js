/*
Email Signature Generator
Given strings for a person's name, title, and company, return an email signature as a single string using the following rules:

The name should appear first, preceded by a prefix that depends on the first letter of the name. For names starting with (case-insensitive):
A-I: Use >> as the prefix.
J-R: Use -- as the prefix.
S-Z: Use :: as the prefix.
A comma and space (, ) should follow the name.
The title and company should follow the comma and space, separated by " at " (with spaces around it).
For example, given "Quinn Waverly", "Founder and CEO", and "TechCo" return "--Quinn Waverly, Founder and CEO at TechCo".
*/

function generateSignature(name, title, company) {
  let signature = '';
  let regex1 = /[A-I]/
  let regex2 = /[J-R]/
  signature += (regex1.test(name.charAt(0)) ? '>>' : regex2.test(name.charAt(0)) ? '--' : '::');
  signature += name + ', ' + title + ' at ' + company;
  console.log(signature)
  return signature;
}

//Tests

const runTests = require('../../helpers/runTests');
runTests(generateSignature, [
    `assert.equal(generateSignature("Quinn Waverly", "Founder and CEO", "TechCo"), "--Quinn Waverly, Founder and CEO at TechCo");`,
    `assert.equal(generateSignature("Alice Reed", "Engineer", "TechCo"), ">>Alice Reed, Engineer at TechCo");`,
    `assert.equal(generateSignature("Tina Vaughn", "Developer", "example.com"), "::Tina Vaughn, Developer at example.com");`,
    `assert.equal(generateSignature("B. B.", "Product Tester", "AcmeCorp"), ">>B. B., Product Tester at AcmeCorp");`,
    `assert.equal(generateSignature("windstorm", "Cloud Architect", "Atmospheronics"), "::windstorm, Cloud Architect at Atmospheronics");`,
]);
