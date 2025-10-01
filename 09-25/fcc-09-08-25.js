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

buildAcronym("Search Engine Optimization") //should return "SEO".
buildAcronym("Frequently Asked Questions") //should return "FAQ".
buildAcronym("National Aeronautics and Space Administration") //should return "NASA".
buildAcronym("Federal Bureau of Investigation") //should return "FBI".
buildAcronym("For your information") //should return "FYI".
buildAcronym("By the way") //should return "BTW".
buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily") //should return "AUHWPOTIMSH".