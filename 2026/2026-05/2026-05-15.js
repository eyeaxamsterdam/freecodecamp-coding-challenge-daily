/*
Coffee Order Parser
Given a string for a coffee order, identify any menu items and return a formatted order.

Use the following menu items and prices:

Item	Price
"cold brew"	$4.50
"oat latte"	$5.00
"cappuccino"	$4.75
"espresso"	$3.00
"vanilla syrup"	$0.75
"caramel drizzle"	$0.60
"extra shot"	$0.50
"oat milk"	$0.75
"cream"	$0.75
Return a string with the matched items joined by " + ", followed by a colon and space (": "), and the total price.

For example, given "I'd like an oat latte with vanilla syrup and an extra shot please.", return "oat latte + vanilla syrup + extra shot: $6.25"

Items should appear in the order they appear in the menu and the total price should always have two decimal places.
*/

function formatCoffeeOrder(order) {
    const MENU = {"cold brew": 4.50, "oat latte": 5.00, "cappuccino": 4.75, "espresso": 3.00, "vanilla syrup": 0.75, "caramel drizzle": 0.60, "extra shot": 0.50, "oat milk": 0.75, "cream": 0.75}
    let total = 0;
    let items = '';
    Object.keys(MENU).forEach(w => {
        if (order.match(w)) {
            if (items.length > 0) {
                items += (' + ' + w);
            } else {
                items += w; 
            }
            total += MENU[w];
        }
    });
    return `${items}: $${total.toFixed(2)}`;
}

const runTests = require('../../helpers/runTests');
runTests(formatCoffeeOrder, [
    `assert.equal(formatCoffeeOrder("I'd like an oat latte with vanilla syrup and an extra shot please."), "oat latte + vanilla syrup + extra shot: $6.25");`,
    `assert.equal(formatCoffeeOrder("Give me a cappuccino with caramel drizzle, vanilla syrup, and some oat milk."), "cappuccino + vanilla syrup + caramel drizzle + oat milk: $6.85");`,
    `assert.equal(formatCoffeeOrder("Can I get a cold brew with some cream and an extra shot."), "cold brew + extra shot + cream: $5.75");`,
    `assert.equal(formatCoffeeOrder("Just an espresso please."), "espresso: $3.00");`,
    `assert.equal(formatCoffeeOrder("I'll take an oat latte with cream and an extra shot, and some vanilla syrup and caramel drizzle."), "oat latte + vanilla syrup + caramel drizzle + extra shot + cream: $7.60");`,
]);
