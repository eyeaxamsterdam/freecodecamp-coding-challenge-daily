/*
Digit Rotation Escape
Given a positive integer, determine if it, or any of its rotations, is evenly divisible by its digit count.

A rotation means to move the first digit to the end. For example, after 1 rotation, 123 becomes 231.

Check rotation 0 (the given number) first.
Given numbers won't contain any zeros.
Return the first rotation number if one is found, or "none" if not.
*/

function getRotation(n) {
    let count = n.toString().length;
    let rotate = 0;
    let response;
    
    while (rotate < count) {
        if (n % count === 0) {
            return rotate;
        } 
        n = n.toString().slice(1) + n.toString()[0];
        rotate++;
    }
    
    return 'none';
}

const runTests = require('../../../helpers/runTests');
runTests(getRotation, [
    `assert.equal(getRotation(123), 0);`,
    `assert.equal(getRotation(13579), 3);`,
    `assert.equal(getRotation(24681), "none");`,
    `assert.equal(getRotation(84138789345), 6);`,
]);
