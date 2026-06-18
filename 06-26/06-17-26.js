/*
Spellcaster
Given a string of spell codes you are casting, calculate the total score.

Each character in the string represents a spell:

Code	Spell	Category	Base Score
"f"	Fire	Destruction	3
"l"	Lightning	Destruction	3
"i"	Ice	Control	2
"w"	Wind	Control	2
"h"	Heal	Restoration	1
"s"	Shield	Restoration	1
A combo multiplier is applied based on how many spells in a row have been cast from different categories:

The first spell always scores at base value.
Each consecutive spell from a different category than the previous increases the multiplier by 1.
Casting a spell from the same category as the previous resets the multiplier back to 1.
The score for each spell is its base score multiplied by the current multiplier.
Return the total score from the sequence of spells.
*/

const BANK = {
    "f": {Spell: 'Fire', Category: 'Destruction', Score: 3},
    "l": {Spell: 'Lighting', Category: 'Destruction', Score: 3}, 
    "i": {Spell: 'Ice', Category: 'Control', Score: 2}, 
    "w": {Spell: 'Wind', Category: 'Control', Score: 2}, 
    "h": {Spell: 'Heal', Category: 'Restoration', Score: 1}, 
    "s": {Spell: 'Shield', Category: 'Restoration', Score: 1} 
}

function cast(spells) {
    let response = spells.split('').reduce((a,b) => {
        const [spell,category,score] = Object.values(BANK[b]);
        if (a.prevChar !== null) {
            a.multiplier = BANK[a.prevChar]['Category'] !== category ? a.multiplier + 1 : 1
        }
        a.prevChar = b;
        a.total += (score * a.multiplier);
        return a;
    },{total: 0, multiplier: 1, prevChar: null})
    return response.total;
}

const runTests = require('../helpers/runTests');
runTests(cast, `
    Waiting:1. cast("fihwl") should return 33.
    Waiting:2. cast("lwswfi") should return 45.
    Waiting:3. cast("wislhfl") should return 37.
    Waiting:4. cast("sihwlih") should return 50.
    Waiting:5. cast("wishlfihwslwifihl") should return 101.
`);