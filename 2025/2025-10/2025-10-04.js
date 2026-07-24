/*
Space Week Day 1: Stellar Classification
October 4th marks the beginning of World Space Week. The next seven days will bring you astronomy-themed coding challenges.

For today's challenge, you are given the surface temperature of a star in Kelvin (K) and need to determine its stellar classification based on the following ranges:

"O": 30,000 K or higher
"B": 10,000 K - 29,999 K
"A": 7,500 K - 9,999 K
"F": 6,000 K - 7,499 K
"G": 5,200 K - 5,999 K
"K": 3,700 K - 5,199 K
"M": 0 K - 3,699 K

Return the classification of the given star.
*/

function classification(temp) {
    if (temp >= 30000) {
        return "O";
    } else if (temp >= 10000 && temp < 30000) {
        return "B";
    } else if (temp >= 7500 && temp < 10000) {
        return "A";
    } else if (temp >= 6000 && temp < 7500) {
        return "F";
    } else if (temp >= 5200 && temp < 6000) {
        return "G";
    } else if (temp >= 3700 && temp < 5200) {
        return "K";
    } else if (temp >= 0 && temp < 3700) {
        return "M";
    }
}

classification(5778) //should return "G".
classification(2400) //should return "M".
classification(9999) //should return "A".
classification(3700) //should return "K".
classification(3699) //should return "M".
classification(210000) //should return "O".
classification(6000) //should return "F".
classification(11432) //should return "B".
