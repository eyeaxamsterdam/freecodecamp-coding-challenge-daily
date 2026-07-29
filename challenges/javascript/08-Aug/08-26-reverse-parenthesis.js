/*
Reverse Parenthesis
Given a string that contains properly nested parentheses, return the decoded version of the string using the following rules:

All characters inside each pair of parentheses should be reversed.
Parentheses should be removed from the final result.
If parentheses are nested, the innermost pair should be reversed first, and then its result should be included in the reversal of the outer pair.
Assume all parentheses are evenly balanced and correctly nested.
*/

function decode(s) {
    const stack = [''];
    for (let char of s) {
        if (char === '(') {
            //create index in stack array
            stack.push('');
        } else if (char === ')') {
            //remove the last item of stack and reverse it.
            const inner = stack.pop().split('').reverse().join('');
            //add it back to the previous item in stack. 
            stack[stack.length - 1] += inner;
            console.log(stack);
        } else {
            stack[stack.length - 1] += char;
            console.log(stack);
        }
    }
    return stack[0];
}

const runTests = require('../../../helpers/runTests');
runTests(decode, [
    `assert.equal(decode("(f(b(dc)e)a)"), "abcdef");`,
    `assert.equal(decode("((is?)(a(t d)h)e(n y( uo)r)aC)"), "Can you read this?");`,
    `assert.equal(decode("f(Ce(re))o((e(aC)m)d)p"), "freeCodeCamp");`,
]);

