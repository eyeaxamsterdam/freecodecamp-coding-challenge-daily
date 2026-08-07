/*
Consonant Count
Given a string and a target number, determine whether the string contains exactly the target number of consonants.

Consonants are all alphabetic characters except "a", "e", "i", "o", and "u" in any case.
Ignore digits, punctuation, spaces, and other non-letter characters when counting.
*/

function hasConsonantCount(text, target) {
    const consonants = (text.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
    return consonants === target;
}

const runTests = require('../../../helpers/runTests');
runTests(hasConsonantCount, [
    `assert.isTrue(hasConsonantCount("helloworld", 7));`,
    `assert.isFalse(hasConsonantCount("eieio", 5));`,
    `assert.isTrue(hasConsonantCount("freeCodeCamp Rocks!", 11));`,
    `assert.isFalse(
      hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 24)
    );`,
    `assert.isTrue(
      hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 23)
    );`,
]);
