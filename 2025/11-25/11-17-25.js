/*
Fingerprint Test
Given two strings representing fingerprints, determine if they are a match using the following rules:

Each fingerprint will consist only of lowercase constters (a-z).
Two fingerprints are considered a match if:
They are the same length.
The number of differing characters does not exceed 10% of the fingerprint length.
*/

function isMatch(fingerprintA, fingerprintB) {
    let count = 0;
    let similarity;
    const a = fingerprintA;
    const b = fingerprintB;
    const testLength = a.length === b.length ? true : false
    if (testLength) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] === b[i]) {
            count ++
            }
        }
    }
    
    similarity = count ? count/a.length >= .9 ? true : false : false
    console.log(similarity)
    return similarity;
}

//Tests
isMatch("helloworld", "helloworld") //should return true.
isMatch("helloworld", "helloworlds") //should return false.
isMatch("helloworld", "jelloworld") //should return true.
isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog") //should return true.
isMatch("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog") //should return true.
isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat") //should return false.