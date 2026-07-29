/*
Equation Validation
Given a string representing a math equation, determine whether it is correct.

The left side may contain up to three positive integers and the operators +, -, *, and /.
The equation will be given in the format: "number operator number = number" (with two or three numbers on the left). For example: "2 + 2 = 4" or "2 + 3 - 1 = 4".
The right side will always be a single integer.
Follow standard order of operations: multiplication and division are evaluated before addition and subtraction, from left-to-right.
*/

const runTests = require("../../../helpers/runTests");

function isValidEquation(equation) { 
    let left = eval(equation.split('=')[0]);
    let right = eval(equation.split('=')[1]);
    return left === right;
}

runTests(isValidEquation, [
    `assert.isTrue(isValidEquation("2 + 2 = 4"));`,
    `assert.isTrue(isValidEquation("2 + 3 - 1 = 4"));`,
    `assert.isTrue(isValidEquation("8 / 2 = 4"));`,
    `assert.isTrue(isValidEquation("10 * 5 = 50"));`,
    `assert.isTrue(isValidEquation("2 - 2 = 0"));`,
    `assert.isTrue(isValidEquation("2 + 9 / 3 = 5"));`,
    `assert.isTrue(isValidEquation("20 - 2 * 3 = 14"));`,
    `assert.isFalse(isValidEquation("2 + 5 = 6"));`,
    `assert.isFalse(isValidEquation("10 - 2 * 3 = 24"));`,
    `assert.isFalse(isValidEquation("3 + 9 / 3 = 4"));`,
]);
