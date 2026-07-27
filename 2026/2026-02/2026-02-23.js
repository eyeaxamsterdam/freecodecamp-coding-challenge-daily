/*
Blood Type Compatibility
Given a donor blood type and a recipient blood type, determine whether the donor can give blood to the recipient.

Each blood type consists of:

A letter: "A", "B", "AB", or "O"
And an Rh factor: "+" or "-"

Blood types will be one of the valid letters followed by an Rh factor. For example, "AB+" and "O-" are valid blood types.

Letter Rules:

"O" can donate to other letter type.
"A" can donate to "A" and "AB".
"B" can donate to "B" and "AB".
"AB" can donate only to "AB".

Rh Rules:

Negative ("-") can donate to both "-" and "+".
Positive ("+") can donate only to "+".

Both letter and Rh rule must pass for a donor to be able to donate to the recipient.
*/

function canDonate(donor, recipient) {

}

const runTests = require('../../helpers/runTests');
runTests(canDonate, [
    `assert.isTrue(canDonate("B+", "B+"));`,
    `assert.isTrue(canDonate("O-", "AB-"));`,
    `assert.isFalse(canDonate("O+", "A-"));`,
    `assert.isTrue(canDonate("A+", "AB+"));`,
    `assert.isFalse(canDonate("A-", "B-"));`,
    `assert.isTrue(canDonate("B-", "AB+"));`,
    `assert.isFalse(canDonate("B-", "A+"));`,
    `assert.isTrue(canDonate("O-", "O+"));`,
    `assert.isFalse(canDonate("O+", "O-"));`,
    `assert.isFalse(canDonate("AB+", "AB-"));`,
]);
