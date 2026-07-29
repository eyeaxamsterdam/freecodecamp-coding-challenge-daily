/*
Smallest Gap
Given a string, return the substring between the two identical characters that have the smallest number of characters between them (smallest gap).

There will always be at least one pair of matching characters.
The returned substring should exclude the matching characters.
If two or more gaps are the same length, return the characters from the first one.
For example, given "ABCDAC", return "DA" because:

Only "A" and "C" repeat in the string.
The number of characters between the two "A" characters is 3, and between the "C" characters is 2.
So return the string between the two "C" characters.
*/

function smallestGap(str) {
    const lastSeen = {};
    const gaps = [];

    for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if (c in lastSeen) {
            gaps.push({ text: str.slice(lastSeen[c] + 1, i), start: lastSeen[c] + 1 });
        }
        lastSeen[c] = i;
    }

    return gaps.reduce((best, gap) => {
        if (gap.text.length < best.text.length ||
            (gap.text.length === best.text.length && gap.start < best.start)) {
            return gap;
        }
        return best;
    }).text;
}

const runTests = require('../../../helpers/runTests');
runTests(smallestGap, [
    `assert.equal(smallestGap("ABCDAC"), "DA");`,
    `assert.equal(smallestGap("racecar"), "e");`,
    `assert.equal(smallestGap("A{5e^SD*F4i!o#q6e&rkf(po8|we9+kr-2!3}=4"), "#q6e&rkf(p");`,
    `assert.equal(smallestGap("Hello World"), "");`,
    `assert.equal(smallestGap("The quick brown fox jumps over the lazy dog."), "fox");`,
]);
