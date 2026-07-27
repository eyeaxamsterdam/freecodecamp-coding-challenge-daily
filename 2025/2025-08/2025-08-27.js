/*
Unorder of Operations
Given an array of integers and an array of string operators, apply the operations to the numbers sequentially from left-to-right. Repeat the operations as needed until all numbers are used. Return the final result.

For example, given [1, 2, 3, 4, 5] and ['+', '*'], return the result of evaluating 1 + 2 * 3 + 4 * 5 from left-to-right ignoring standard order of operations.

Valid operators are +, -, *, /, and %.
*/

function evaluate(numbers, operators) {
    const apply = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
    };

    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        const operator = operators[(i - 1) % operators.length];
        result = apply[operator](result, numbers[i]);
    }
    return result;
}

const runTests = require('../../helpers/runTests');
runTests(evaluate, [
    `assert.equal(evaluate([5, 6, 7, 8, 9], ['+', '-']), 3);`,
    `assert.equal(evaluate([17, 61, 40, 24, 38, 14], ['+', '%']), 38);`,
    `assert.equal(evaluate([20, 2, 4, 24, 12, 3], ['*', '/']), 60);`,
    `assert.equal(evaluate([11, 4, 10, 17, 2], ['*', '*', '%']), 30);`,
    `assert.equal(evaluate([33, 11, 29, 13], ['/', '-']), -2);`,
]);
