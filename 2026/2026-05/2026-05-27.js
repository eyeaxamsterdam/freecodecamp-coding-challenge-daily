/*
Pizza Party
Given an array of hours worked today per person, return the number of pizzas to order for a pizza party.

Divide each person's hours worked by 3 to get their slice count.
You can't eat a partial slice, so round each person's slice count up to the nearest whole number.
Each person gets a minimum of two slices.
Each pizza has 8 slices. Round the total number of pizzas up to the nearest whole pizza.
*/

function getPizzasToOrder(hoursWorked) {
    const slices = hoursWorked.reduce((a,b) => a+Math.max(Math.ceil(b/3),2),0);
    const pizzas = Math.ceil(slices/8);
    return pizzas; 
}

const runTests = require('../../helpers/runTests');
runTests(getPizzasToOrder, [
    `assert.equal(getPizzasToOrder([8, 8, 8]), 2);`,
    `assert.equal(getPizzasToOrder([10, 9, 8, 2, 2, 6, 10]), 3);`,
    `assert.equal(getPizzasToOrder([1, 2, 3, 4, 5]), 2);`,
    `assert.equal(getPizzasToOrder([8, 8, 8, 8, 8, 8, 8, 8]), 3);`,
    `assert.equal(getPizzasToOrder([9, 9, 6]), 1);`,
    `assert.equal(getPizzasToOrder([10, 12, 16, 9, 8, 11, 15, 8, 0]), 5);`,
]);
