/*
Consonant Case
Given a string representing a variable name, convert it to consonant case using the following rules:

All consonants should be converted to uppercase.
All vowels (a, e, i, o, u in any case) should be converted to lowercase.
All hyphens (-) should be converted to underscores (_).
*/

function toConsonantCase(str) {
    return str.split('').map(ch => {
        if (ch === '-') return '_';
        if (/[aeiou]/i.test(ch)) return ch.toLowerCase();
        if (/[a-z]/i.test(ch)) return ch.toUpperCase();
        return ch;
    }).join('');
}

const runTests = require('../../../helpers/runTests');
runTests(toConsonantCase, [
    `assert.equal(toConsonantCase("helloworld"), "HeLLoWoRLD");`,
    `assert.equal(toConsonantCase("HELLOWORLD"), "HeLLoWoRLD");`,
    `assert.equal(toConsonantCase("_hElLO-WOrlD-"), "_HeLLo_WoRLD_");`,
    `assert.equal(toConsonantCase("_~-generic_~-variable_~-name_~-here-~_"), "_~_GeNeRiC_~_VaRiaBLe_~_NaMe_~_HeRe_~_");`,
]);
