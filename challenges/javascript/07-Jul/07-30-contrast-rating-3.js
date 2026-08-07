/*
Contrast Rating 3
Given two arrays representing RGB values and a boolean indicating whether the text is large, return the WCAG contrast rating using the following method:

First, convert each RGB value to relative luminance:

Divide each channel [R, G, B] by 255 to get a value between 0 and 1
Apply the gamma correction formula to each channel:
If the channel value is less than or equal to 0.04045: channel / 12.92
Otherwise: ((channel + 0.055) / 1.055) ^ 2.4
Calculate luminance: 0.2126 * R + 0.7152 * G + 0.0722 * B

Then, calculate the contrast ratio by adding 0.05 to each luminance value, then dividing the lighter one by the darker one. The lighter one will always be the first argument.

Return the rating based on the contrast ratio using the following table:

| Rating | Normal Text | Large Text |
|--------|-------------|------------|
| "AAA" | 7.0+ | 4.5+ |
| "AA" | 4.5+ | 3.0+ |
| "Fail" | below 4.5 | below 3.0 |
*/

function getContrastRating(rgb1, rgb2, isLargeText) {
    const getLuminance = ([r, g, b]) => {
        const [R, G, B] = [r, g, b].map(c => {
            c /= 255
            return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
        })
        return 0.2126 * R + 0.7152 * G + 0.0722 * B
    }
    const l1 = getLuminance(rgb1)
    const l2 = getLuminance(rgb2)
    const ratio = (l1 + .05) / (l2 + .05)
    const category = isLargeText ? 'Large' : 'Normal'
    const ratings = {
        AAA: {Normal: 7.0, Large: 4.5},
        AA: {Normal: 4.5, Large: 3.0},
    }
    let find = Object.keys(ratings).find(r => ratio >= ratings[r][category]);
    return find || 'Fail';
}

const runTests = require('../../../helpers/runTests');
runTests(getContrastRating, [
    `assert.equal(getContrastRating([255, 255, 255], [0, 0, 0], false), "AAA");`,
    `assert.equal(getContrastRating([215, 188, 188], [55, 55, 55], false), "AA");`,
    `assert.equal(getContrastRating([143, 144, 210], [46, 47, 61], false), "Fail");`,
    `assert.equal(getContrastRating([167, 167, 210], [53, 10, 53], true), "AAA");`,
    `assert.equal(getContrastRating([135, 147, 155], [60, 70, 90], true), "AA");`,
    `assert.equal(getContrastRating([125, 210, 195], [105, 130, 90], true), "Fail");`,
]);
