/*
Truncate the Text 2
Given a string, return a new string that is truncated so that the total width of the characters does not exceed 50 units.

Each character has a specific width:

Letters	Width
"ilI"	1
"fjrt"	2
"abcdeghkmnopqrstuvwxyzJL"	3
"ABCDEFGHKMNOPQRSTUVWXYZ"	4
The table above includes all upper and lower case letters. Additionally:

Spaces (" ") have a width of 2

Periods (".") have a width of 1

If the given string is 50 units or less, return the string as-is, otherwise

Truncate the string and add three periods at the end ("...") so its total width, including the three periods, is as close as possible to 50 units without going over.
*/

const WIDTH = {
    1: 'ilI.',
    2: 'fjrt ',
    3: 'abcdeghkmnopqsuvwxyzJL',
    4: 'ABCDEFGHKMNOPQRSTUVWXYZ'
}
function truncateText(str) {
    const whichWidth = (l) => {
        return Number(Object.keys(WIDTH).find(size => WIDTH[size].includes(l)))
    }

    const totalWidth = str.split('').reduce((sum, l) => sum + whichWidth(l), 0);
    if (totalWidth <= 50) return str;

    let units = 0;
    let finalStr = '';
    for (let index = 0; index < str.length; index++) {
        const w = whichWidth(str[index]);
        if (units + w + 3 > 50) break;
        units += w;
        finalStr += str[index];
    }
    return finalStr + '...';
}

const runTests = require('../helpers/runTests');
runTests(truncateText, `
    Waiting:1. truncateText("The quick brown fox") should return "The quick brown f...".
    Waiting:2. truncateText("The silky smooth sloth") should return "The silky smooth s...".
    Waiting:3. truncateText("THE LOUD BRIGHT BIRD") should return "THE LOUD BRIG...".
    Waiting:4. truncateText("The fast striped zebra") should return "The fast striped z...".
    Waiting:5. truncateText("The big black bear") should return "The big black bear".
    `);