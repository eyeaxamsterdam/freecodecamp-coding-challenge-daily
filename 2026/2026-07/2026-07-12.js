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

const runTests = require('../../helpers/runTests');
runTests(horoscopeMatch, `
    Waiting:1. horoscopeMatch("Libra", "Sagittarius") should return "80%".
    Waiting:2. horoscopeMatch("Gemini", "Scorpio") should return "20%".
    Waiting:3. horoscopeMatch("Pisces", "Aries") should return "40%".
    Waiting:4. horoscopeMatch("Capricorn", "Cancer") should return "50%".
    Waiting:5. horoscopeMatch("Aquarius", "Aquarius") should return "100%".
    Waiting:6. horoscopeMatch("Virgo", "Taurus") should return "90%".
    Waiting:7. horoscopeMatch("Leo", "Scorpio") should return "30%".
`);