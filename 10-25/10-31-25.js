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
spookify("hello_world") //should return "HeLlO~wOrLd".
spookify("Spooky_Case") //should return "SpOoKy~CaSe".
spookify("TRICK-or-TREAT") //should return "TrIcK~oR~tReAt".
spookify("c_a-n_d-y_-b-o_w_l") //should return "C~a~N~d~Y~~b~O~w~L".
spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts") //should return "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS".