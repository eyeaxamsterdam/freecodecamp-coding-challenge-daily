/*
Free Shipping
Given an array of strings representing items in your shopping cart, and a number for the minimum order amount to qualify for free shipping, determine if the items in your shopping cart qualify for free shipping.

The given array will contain items from the list below:

| Item | Price |
| - | - |
| "shirt"	| 34.25 |
| "jeans"	| 48.50 |
| "shoes" |	75.00 |
| "hat"	| 19.95 |
| "socks" | 15.00 |
| "jacket" | 109.95 |
*/

function getsFreeShipping(cart, minimum) {

}

const runTests = require('../../helpers/runTests');
runTests(getsFreeShipping, [
    `assert.isTrue(getsFreeShipping(["shoes"], 50));`,
    `assert.isFalse(getsFreeShipping(["hat", "socks"], 50));`,
    `assert.isTrue(getsFreeShipping(["jeans", "shirt", "jacket"], 75));`,
    `assert.isFalse(getsFreeShipping(["socks", "socks", "hat"], 75));`,
    `assert.isTrue(getsFreeShipping(["shirt", "shirt", "jeans", "socks"], 100));`,
    `assert.isFalse(getsFreeShipping(["hat", "socks", "hat", "jeans", "shoes", "hat"], 200));`,
]);
