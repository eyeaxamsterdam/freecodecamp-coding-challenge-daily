/*
Credit Card Masker
Given a string of credit card numbers, return a masked version of it using the following constraints:

The string will contain four sets of four digits (0-9), with all sets being separated by a single space, or a single hyphen (-).
Replace all numbers, except the last four, with an asterisk (*).
Leave the remaining characters unchanged.
For example, given "4012-8888-8888-1881" return "****-****-****-1881".
*/

function mask(card) {
    let lastFour = card.slice(-4);
    let regex = /[0-9]/g;
    let numbers = card.slice(0,-4).replace(regex, '*');
    console.log(numbers + lastFour);
    return numbers + lastFour
}

//Tests
mask("4012-8888-8888-1881") //should return "****-****-****-1881".
mask("5105 1051 0510 5100") //should return "**** **** **** 5100".
mask("6011 1111 1111 1117") //should return "**** **** **** 1117".
mask("2223-0000-4845-0010") //should return "****-****-****-0010".