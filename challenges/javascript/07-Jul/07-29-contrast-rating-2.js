/*
Contrast Rating 2
Given two relative luminance values and a boolean indicating whether the text is large, return the WCAG contrast rating using the following method:

Calculate the contrast ratio by adding 0.05 to each luminance value, then dividing the lighter one by the darker one. The lighter one will always be the first argument.

Return the rating based on the contrast ratio using the following table:

| Rating | Normal Text | Large Text |
|--------|-------------|------------|
| "AAA" | 7.0+ | 4.5+ |
| "AA" | 4.5+ | 3.0+ |
| "Fail" | below 4.5 | below 3.0 |
*/

function getContrastRating(l1, l2, isLargeText) {
    const category = isLargeText ? 'Large' : 'Normal'
    //low limits
    const ratings = {
        AAA: {Normal: 7.0, Large: 4.5},
        AA: {Normal: 4.5, Large: 3.0},
    }
    const ratio = (l1 + .05) / (l2 + .05)
    let find = Object.keys(ratings).find(r => ratio >= ratings[r][category]);
    // if find is undefind return 'Fail'
    return find || 'Fail';
}

const runTests = require('../../../helpers/runTests');
runTests(getContrastRating, [
    `assert.equal(getContrastRating(1.0, 0.0, false), "AAA");`,
    `assert.equal(getContrastRating(0.9015, 0.1364, false), "AA");`,
    `assert.equal(getContrastRating(0.8965, 0.1628, false), "Fail");`,
    `assert.equal(getContrastRating(0.7469, 0.0957, true), "AAA");`,
    `assert.equal(getContrastRating(0.7489, 0.2018, true), "AA");`,
    `assert.equal(getContrastRating(0.6571, 0.1974, true), "Fail");`,
]);