/*
Contrast Rating 1
Given a contrast ratio and a boolean indicating whether the text is large, return the WCAG rating using the following table:

| Rating | Normal Text | Large Text |
|--------|-------------|------------|
| "AAA" | 7.0+ | 4.5+ |
| "AA" | 4.5+ | 3.0+ |
| "Fail" | below 4.5 | below 3.0 |
*/

function getContrastRating(ratio, isLargeText) {
    const BANK = {
        'AAA': {Normal: 7, Large: 4.5},
        'AA': {Normal: 4.5, Large: 3},
        'Fail': {Normal: 4.4, Large: 2.9}
    }
    const size = isLargeText ? 'Large' : 'Normal'
    let myArr = Object.keys(BANK)
    for (let i = 0; i < myArr.length; i++) {
        let rating = myArr[i];
        if (rating !== 'Fail') {
            if (Number(ratio) >= BANK[rating][size]) {
                return rating;
            }
        } else {
            if (Number(ratio) <= BANK[rating][size]) return rating;
        }
    }
}

const runTests = require('../../../helpers/runTests');
runTests(getContrastRating, [
    `assert.equal(getContrastRating("7.5", false), "AAA");`,
    `assert.equal(getContrastRating("4.8", false), "AA");`,
    `assert.equal(getContrastRating("4.2", false), "Fail");`,
    `assert.equal(getContrastRating("4.5", true), "AAA");`,
    `assert.equal(getContrastRating("3.0", true), "AA");`,
    `assert.equal(getContrastRating("2.7", false), "Fail");`,
]);
