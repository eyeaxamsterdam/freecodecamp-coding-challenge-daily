/*
Acronym Builder
Given a string containing one or more words, return an acronym of the words using the following constraints:

The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
The acronym should ignore the first letter of these words unless they are the first word of the given string: a, for, an, and, by, and of.
The acronym letters should be returned in the order they are given.
The acronym should not contain any spaces.
*/


function buildAcronym(str) {
    let acronym = ''; 
    const badWords = ['a', 'for', 'an', 'and', 'by', 'of'];
    //let arr = str.toUpperCase().split(' ');
    str.toUpperCase().split(' ').forEach((word, index) => {
        index === 0 || !badWords.includes(word.toLowerCase()) ? acronym += word[0] : null;
    });
    console.log(acronym);
  return acronym;
}

const runTests = require('../../helpers/runTests');
runTests(buildAcronym, [
    `assert.equal(buildAcronym("Search Engine Optimization"), "SEO");`,
    `assert.equal(buildAcronym("Frequently Asked Questions"), "FAQ");`,
    `assert.equal(buildAcronym("National Aeronautics and Space Administration"), "NASA");`,
    `assert.equal(buildAcronym("Federal Bureau of Investigation"), "FBI");`,
    `assert.equal(buildAcronym("Light Amplification by Stimulated Emission of Radiation"), "LASER");`,
    `assert.equal(buildAcronym("By the way"), "BTW");`,
    `assert.equal(buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily"), "AUHWPOTIMSH");`,
]);
