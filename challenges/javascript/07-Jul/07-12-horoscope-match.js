/*
Horoscope Match
Given two star sign strings, return their compatibility percentage.

The signs are arranged in a wheel of 12 positions in this order: "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", wrapping back to "Aries" after "Pisces". Find the shortest distance between the two signs and return the compatibility:

Distance	Compatibility
0	"100%"
1	"40%"
2	"80%"
3	"30%"
4	"90%"
5	"20%"
6	"50%"
*/
const distance = {
0: "100%",
1: "40%",
2: "80%",
3: "30%",
4: "90%",
5: "20%",
6: "50%"
}
const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
function horoscopeMatch(sign1, sign2) {
    const sign1index = signs.indexOf(sign1);
    const sign2index = signs.indexOf(sign2);
    if (sign1index === sign2index) return distance['0']; 
    const higher = sign1index > sign2index ? sign1index : sign2index;
    const lower = sign1index < sign2index ? sign1index : sign2index;
    return higher - lower > 6 ? distance[lower + 12 - higher] : distance[higher - lower];
}

const runTests = require('../../../helpers/runTests');
runTests(horoscopeMatch, [
    `assert.equal(horoscopeMatch("Libra", "Sagittarius"), "80%");`,
    `assert.equal(horoscopeMatch("Gemini", "Scorpio"), "20%");`,
    `assert.equal(horoscopeMatch("Pisces", "Aries"), "40%");`,
    `assert.equal(horoscopeMatch("Capricorn", "Cancer"), "50%");`,
    `assert.equal(horoscopeMatch("Aquarius", "Aquarius"), "100%");`,
    `assert.equal(horoscopeMatch("Virgo", "Taurus"), "90%");`,
    `assert.equal(horoscopeMatch("Leo", "Scorpio"), "30%");`,
]);
