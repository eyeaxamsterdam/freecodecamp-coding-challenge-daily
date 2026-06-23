/*
Streaming Cost
Given an array representing movies in the cart of your streaming service, and a string for your subscription tier, return the total cost of the movies.

Each item in the cart is an object with a "format" ("HD" or "4K") and a "type" ("rent" or "buy"). Their costs are:

"rent"	"buy"
"HD"	$3.99	$12.99
"4K"	$5.99	$19.99
Apply the following subscription tier discounts:

"none": full price
"basic": 10% off
"premium": 25% off
Return the total cost rounded to two decimal places in the format "$D.CC".
*/
const COSTS = {
    rent: {'HD': 3.99, '4K': 5.99 },
    buy: {'HD': 12.99, '4K': 19.99 } 
}
const SERVICE = {
    none: 0,
    basic: .10,
    premium: .25,
}
function getStreamingBill(cart, subscription) {
    let total = 0;
    let sub = SERVICE[subscription];
    cart.forEach(obj => {
        let type = obj.type; 
        let format = obj.format;
        let cost = COSTS[type][format];
        total += (cost - (cost * sub));
    })    
    return `$${total.toFixed(2)}`
}

const runTests = require('../helpers/runTests');
runTests(getStreamingBill, `
    Waiting 1. getStreamingBill([{ format: "HD", type: "rent" }], "none") should return "$3.99".
    Waiting:2. getStreamingBill([{ format: "HD", type: "rent" }, { format: "HD", type: "buy" }], "premium") should return "$12.73".
    Waiting:3. getStreamingBill([{ format: "HD", type: "rent" }, { format: "HD", type: "rent" }, { format: "HD", type: "buy" }], "basic") should return "$18.87".
    Waiting:4. getStreamingBill([{ format: "4K", type: "buy" }, { format: "4K", type: "buy" }], "premium") should return "$29.98".
    Waiting:5. getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }], "none") should return "$42.96".
    Waiting:6. getStreamingBill([{ format: "HD", type: "rent" }, { format: "4K", type: "rent" }, { format: "HD", type: "buy" }, { format: "4K", type: "buy" }, { format: "HD", type: "buy" }], "basic") should return "$50.36". 

`);