/*
Pet Age Calculator
Given a pet type and age in human years, return the equivalent age in pet years using the following conversion table:

Pet	Multiplier
"dog"	7
"cat"	6
"rabbit"	8
"hamster"	30
"guinea pig"	12
"goldfish"	6
"bird"	5
*/

const AGE = {
  'dog': 7,
  'cat': 6,
  'rabbit': 8,
  'hamster': 30,
  'guinea pig': 12,
  'goldfish': 6,
  'bird': 5
}

function petYears(pet, age) {
  return age * AGE[pet];
}

const runTests = require('../../helpers/runTests');
runTests(petYears, [
    `assert.equal(petYears("dog", 5), 35);`,
    `assert.equal(petYears("cat", 9), 54);`,
    `assert.equal(petYears("rabbit", 3), 24);`,
    `assert.equal(petYears("hamster", 4), 120);`,
    `assert.equal(petYears("guinea pig", 5), 60);`,
    `assert.equal(petYears("goldfish", 2), 12);`,
    `assert.equal(petYears("bird", 1), 5);`,
]);
