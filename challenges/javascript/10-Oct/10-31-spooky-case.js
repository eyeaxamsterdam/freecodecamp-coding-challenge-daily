/*
SpOoKy~CaSe
Given a string representing a variable name, convert it to "spooky case" using the following constraints:

Replace all underscores (_), and hyphens (-) with a tilde (~).
Capitalize the first letter of the string, and every other letter after that. Ignore the tilde character when counting. Make all other letters lowercase.
For example, given hello_world, return HeLlO~wOrLd.
*/

function spookify(boo) {
    let letterCount = 0;
    let spookyText = ''
    const isLetter = l => /[a-zA-Z]/.test(l);
    const addLetter = (l) => {
        letterCount++
        return letterCount % 2 === 0 ? l.toLowerCase() : l.toUpperCase();
    }
    for (let i = 0; i < boo.length; i++) {
        spookyText += isLetter(boo[i]) ? addLetter(boo[i]) : '~'; 
    }

    console.log(spookyText);
    return spookyText;
}

//Tests

const runTests = require('../../../helpers/runTests');
runTests(spookify, [
    `assert.equal(spookify("hello_world"), "HeLlO~wOrLd");`,
    `assert.equal(spookify("Spooky_Case"), "SpOoKy~CaSe");`,
    `assert.equal(spookify("TRICK-or-TREAT"), "TrIcK~oR~tReAt");`,
    `assert.equal(spookify("c_a-n_d-y_-b-o_w_l"), "C~a~N~d~Y~~b~O~w~L");`,
    `assert.equal(spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts"), "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS");`,
]);
