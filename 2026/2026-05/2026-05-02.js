/*
Deepest Brackets
Given a string containing balanced brackets, return the content of the deepest nested brackets.

Brackets can be any of the three types: (), [], and {}.
The input will always have a single deepest group.
For example, given "(hello (world))", return "world".
*/

const runTests = require("../../helpers/runTests");

function getDeepestBrackets(str) {
    const opens = '([{';
    const closes = ')]}';
    let stack = [];
    let maxDepth = 0;
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (opens.includes(char)) {
            stack.push(i);
        } else if (closes.includes(char)) {
            const openIdx = stack.pop();
            const depth = stack.length + 1;
            if (depth > maxDepth) {
                maxDepth = depth;
                result = str.slice(openIdx + 1, i);
            }
        }
    }

    console.log(result);
    return result;
}

runTests(getDeepestBrackets, [
    `assert.equal(getDeepestBrackets("(hello (world))"), "world");`,
    `assert.equal(getDeepestBrackets("[outer [inner] outer]"), "inner");`,
    `assert.equal(getDeepestBrackets("{a{b}c{d{e}f}g}"), "e");`,
    `assert.equal(getDeepestBrackets("[the {quick (brown [fox] jumped) over (the) lazy} dog]"), "fox");`,
    `assert.equal(getDeepestBrackets("f[(r)e{e}C{o[(d){e(C)}a]m}]p"), "C");`,
]);
