/*
Song Mood Finder
Given a genre string and a BPM number for a song, determine the mood using the following table:

Mood	Genre	BPM Range
"focus"	"classical"	60–109
"focus"	"electronic"	60–89
"happy"	"pop"	60–180
"happy"	"classical"	110–180
"happy"	"rock"	60–129
"happy"	"electronic"	90–134
"hype"	"rock"	130–180
"hype"	"electronic"	135–180
*/
const REFERENCE = {
    classical: {focus: '60-109', happy: '110-180'},
    electronic: {focus: '60-89', happy: '90-134', hype: '135-180'},
    pop: {happy: '60-180'},
    rock: {happy: '60-129', hype: '130-180'}

}

function getMood(genre, bpm) {
    if (genre === 'pop') return 'happy';
    const range = m => m.split('-').map(n => Number(n));
    let arr = Object.keys(REFERENCE[genre]);
    for (let i = 0; i < arr.length; i++) {
        let bpmRange = range(REFERENCE[genre][arr[i]]);
        if (bpm >= bpmRange[0] && bpm <= bpmRange[1]) {
            return arr[i]; 
        }
    }
}


const runTests = require('../helpers/runTests');
runTests(getMood, `
    Waiting:1. getMood("rock", 111) should return "happy".
    Waiting:2. getMood("electronic", 74) should return "focus".
    Waiting:3. getMood("classical", 180) should return "happy".
    Waiting:4. getMood("rock", 155) should return "hype".
    Waiting:5. getMood("electronic", 90) should return "happy".
    Waiting:6. getMood("classical", 67) should return "focus".
    Waiting:7. getMood("pop", 100) should return "happy".
    Waiting:8. getMood("electronic", 135) should return "hype".
`);