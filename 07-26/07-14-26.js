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

const runTests = require('../helpers/runTests');
runTests(petYears, `
    Passed:1. petYears("dog", 5) should return 35.
    Passed:2. petYears("cat", 9) should return 54.
    Passed:3. petYears("rabbit", 3) should return 24.
    Passed:4. petYears("hamster", 4) should return 120.
    Passed:5. petYears("guinea pig", 5) should return 60.
    Passed:6. petYears("goldfish", 2) should return 12.
    Passed:7. petYears("bird", 1) should return 5.
`);