/*
Name Initials
Given a full name as a string, return their initials.

Names to initialize are separated by a space.
Initials should be made uppercase.
Initials should be separated by dots.
For example, "Tommy Millwood" returns "T.M.".
*/

function getInitials(name) {
    return name.split(' ').map(name => name[0].toUpperCase() + '.').join('');
}

const runTests = require('../../../helpers/runTests');
runTests(getInitials, [
    `assert.equal(getInitials("Tommy Millwood"), "T.M.");`,
    `assert.equal(getInitials("Savanna Puddlesplash"), "S.P.");`,
    `assert.equal(getInitials("Frances Cowell Conrad"), "F.C.C.");`,
    `assert.equal(getInitials("Dragon"), "D.");`,
    `assert.equal(getInitials("Dorothy Vera Clump Haverstock Norris"), "D.V.C.H.N.");`,
]);
