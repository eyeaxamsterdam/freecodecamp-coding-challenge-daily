/*
P@ssw0rd Str3ngth!
Given a password string, return "weak", "medium", or "strong" based on the strength of the password.

A password is evaluated according to the following rules:

It is at least 8 characters long.
It contains both uppercase and lowercase letters.
It contains at least one number.
It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.

Return "weak" if the password meets fewer than two of the rules.
Return "medium" if the password meets 2 or 3 of the rules.
Return "strong" if the password meets all 4 rules.
*/

function checkStrength(password) {
    const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*'];
    const onlyLetters = password.match(/[a-zA-Z]/g) ? password.match(/[a-zA-Z]/g).join('') : null;
    let strength = 4;
    if (password.length < 8) strength--;
    if (!onlyLetters || onlyLetters.toUpperCase() === onlyLetters || onlyLetters.toLowerCase() === onlyLetters) strength--;
    if ([...password].filter(char => char.match(/[0-9]/g)).length === 0) strength--;
    if ([...password].filter(char => specialChars.includes(char)).length === 0) strength--
    return strength === 4 ? 'strong' : strength < 2 ? 'weak' : 'medium';
}

const runTests = require('../../../helpers/runTests');
runTests(checkStrength, [
    `assert.equal(checkStrength("123456"), "weak");`,
    `assert.equal(checkStrength("pass!!!"), "weak");`,
    `assert.equal(checkStrength("Qwerty"), "weak");`,
    `assert.equal(checkStrength("PASSWORD"), "weak");`,
    `assert.equal(checkStrength("PASSWORD!"), "medium");`,
    `assert.equal(checkStrength("PassWord%^!"), "medium");`,
    `assert.equal(checkStrength("qwerty12345"), "medium");`,
    `assert.equal(checkStrength("S3cur3P@ssw0rd"), "strong");`,
    `assert.equal(checkStrength("C0d3&Fun!"), "strong");`,
]);
