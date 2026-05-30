/*
I Before E
Given a word or sentence, return a corrected version where every word follows the "I before E except after C" rule.

If a word contains "ei" not preceded by "c", replace it with "ie".
If a word contains "ie" preceded by "c", replace it with "ei".
All other words are left unchanged.
*/

function iBeforeE(sentence) {
    const regexEI = /(?<!c)ei/g;
    const regexIE = /cie/g; 
    const matchEI = sentence.match(regexEI);
    const matchIE = sentence.match(regexIE);
    matchEI && matchEI.forEach(str => sentence = sentence.replace(str, 'ie'));
    matchIE && matchIE.forEach(str => sentence = sentence.replace(str, 'cei'));
    return sentence;
}
console.log(iBeforeE("either"));

const runTests = require("../helpers/runTests");
runTests(iBeforeE, `
    Waiting:1. iBeforeE("beleive") should return "believe".
    Waiting:2. iBeforeE("recieve") should return "receive".
    Waiting:3. iBeforeE("we recieved a breif") should return "we received a brief".
    Waiting:4. iBeforeE("she beleived the friendly niece could percieve the greif") should return "she believed the friendly niece could perceive the grief".
    Waiting:5. iBeforeE("we recieved relief after the theif gave us a breif piece of feirce deceit") should return "we received relief after the thief gave us a brief piece of fierce deceit".
`);