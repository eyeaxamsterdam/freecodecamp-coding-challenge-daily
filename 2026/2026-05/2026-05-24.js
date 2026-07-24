/* 05-24-26
Roman Numeral Fixer
Given a string of malformed Roman numerals, return the value in standard Roman numeral notation.

The input will only use additive notation, so each symbol adds its value to the total. As a reminder, here are the symbols and values:

Symbol	Value
"I"	1
"V"	5
"X"	10
"L"	50
"C"	100
"D"	500
"M"	1000
When re-encoding, use the largest possible symbol at each step, using subtractive pairs ("IV", "IX", "XL", "XC", "CD", "CM") where needed.
*/


function fixNumerals(str) {
    const NUMERALS = {"I": 1,"V": 5,"X": 10,"L": 50,"C": 100,"D": 500,"M": 1000};
    let total = str.split('').reduce((a, b) => a + NUMERALS[b], 0);

    const TABLE = [
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"],  [90, "XC"],  [50, "L"],  [40, "XL"],
        [10, "X"],   [9, "IX"],   [5, "V"],   [4, "IV"],  [1, "I"]
    ];

    let result = "";
    for (const [val, sym] of TABLE) {
        while (total >= val) {
            result += sym;
            total -= val;
        }
    }
    return result;
}
const runTests = require('../../helpers/runTests');
runTests(fixNumerals, [
    `assert.equal(fixNumerals("XIIIII"), "XV");`,
    `assert.equal(fixNumerals("IIIILX"), "LXIV");`,
    `assert.equal(fixNumerals("XXVVVIIIII"), "XL");`,
    `assert.equal(fixNumerals("MDCCLXXXXVIIII"), "MDCCXCIX");`,
    `assert.equal(fixNumerals("IIIIVVVVXXXXLLLLCCDD"), "MCDLXIV");`,
    `assert.equal(fixNumerals("ILCDMIVDIIXLCVCXDL"), "MMCMLXXXIV");`,
]);
