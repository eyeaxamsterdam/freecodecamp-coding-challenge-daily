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

const runTests = require('../../helpers/runTests');

runTests(getInitials, `
getInitials("Tommy Millwood") should return "T.M.".
getInitials("Savanna Puddlesplash") should return "S.P.".
getInitials("Frances Cowell Conrad") should return "F.C.C.".
getInitials("Dragon") should return "D.".
getInitials("Dorothy Vera Clump Haverstock Norris") should return "D.V.C.H.N.".
`)