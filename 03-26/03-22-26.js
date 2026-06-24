/*
Coffee Roast Detector
Given a string representing the beans used to make a cup of coffee, determine the roast of the cup.

The given string will contain the following characters, each representing a type of bean:

An apostrophe (') is a light roast bean worth 1 point each.
A dash (-) is a medium roast bean worth 2 points each.
A period (.) is a dark roast bean worth 3 points each.
The roast level is determined by the average of all the beans.

Return:

"Light" if the average is less than 1.75.
"Medium" if the average is 1.75 to 2.5.
"Dark" if the average is greater than 2.5.
*/

const ROAST = {
    "'" : 1,
    "-" : 2,
    "." : 3
}
function detectRoast(beans) {
    const total = beans.split('').reduce((a,b) => a + ROAST[b], 0);
    const average = total/beans.length;
    return average > 2.5 ? 'Dark' : average > 1.74 ? 'Medium' : 'Light';

}

const runTests = require('../helpers/runTests');
runTests(detectRoast, `
    Waiting:1. detectRoast("''-''''''-'-''--''''") should return "Light".
    Waiting:2. detectRoast(".'-''-''..'''.-.-''-") should return "Medium".
    Waiting:3. detectRoast("--.''--'-''.--..-.--") should return "Medium".
    Waiting:4. detectRoast("-...'-......-..-...-") should return "Dark".
    Waiting:5. detectRoast(".--.-..-......----.'") should return "Medium".
    Waiting:6. detectRoast("..-..-..-..-....-.-.") should return "Dark".
    Waiting:7. detectRoast("-'-''''''..-'.''-'.'") should return "Light".
`);
