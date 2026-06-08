/*
HSL Validator
Given a string, determine whether it is a valid CSS hsl() color value.

A valid HSL value must be in the format "hsl(h, s%, l%)", where:

h (hue) must be a number between 0 and 360 (inclusive).
s (saturation) must be a percentage between 0% and 100%.
l (lightness) must be a percentage between 0% and 100%.
Spaces are only allowed:

After the opening parenthesis
Before and/or after the commas
Before and/or after closing parenthesis
Optionally, the value can end with a semi-colon (";").

For example, "hsl(240, 50%, 50%)" is a valid HSL value.
*/

function isValidHSL(hsl) {
    if (hsl.match(/ \(/g)) return false; 
    let splithsl = hsl.split(',');
    const [h,s,l] = splithsl.map(num => num.replace(/[^0-9%]+/g, '')); 
    const checkh = Number(h) >= 0 && Number(h) <= 360;
    const checks = s[s.length - 1] === '%' && Number(s.replace(/\D+/, '')) <= 100 && Number(s.replace(/\D+/, '')) >= 0
    const checkl = l[l.length - 1] === '%' && Number(l.replace(/\D+/, '')) <= 100 && Number(l.replace(/\D+/, '')) >= 0
    return checkh === checks === checkl === true;
}

const runTests = require('../helpers/runTests');
runTests(isValidHSL, `
    Waiting:1. isValidHSL("hsl(240, 50%, 50%)") should return true.
    Waiting:2. isValidHSL("hsl( 200 , 50% , 75% )") should return true.
    Waiting:3. isValidHSL("hsl(99,60%,80%);") should return true.
    Waiting:4. isValidHSL("hsl(0, 0%, 0%) ;") should return true.
    Waiting:5. isValidHSL("hsl(  10  ,  20%   ,  30%   )    ;") should return true.
    Waiting:6. isValidHSL("hsl(361, 50%, 80%)") should return false.
    Waiting:7. isValidHSL("hsl(300, 101%, 70%)") should return false.
    Waiting:8. isValidHSL("hsl(200, 55%, 75)") should return false.
    Waiting:9. isValidHSL("hsl (80, 20%, 10%)") should return false.
`);