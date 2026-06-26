/*
Blood Bank
Given an array of the inventory at a blood bank and an array of patient blood type requests, return a string in the format "X of Y patients served". Where X is the maximum number of patients that can receive blood from the bank's inventory, and Y is the total number of patients.

Each entry in both arrays is one of the following blood types: "AB", "A", "B", or "O".

Compatibility rules:

"AB" can receive from any blood type.
"A" can receive from "A" and "O".
"B" can receive from "B" and "O".
"O" can only receive from "O".
Duplicate entries in the given arrays represent quantity.
*/
const DONORS = {
     O: ['O'],
     B: ['B', 'O'],
     A: ['A', 'O'],
    AB: ['AB', 'A', 'B', 'O'],
}

const triageBlood = (bank, patients) => {
    let served = 0;
    const inventory = {};
    bank.forEach(b => inventory[b] = (inventory[b] || 0) + 1);

    const priority = { O: 0, B: 1, A: 2, AB: 3 };
    const patientsArranged = [...patients].sort((a, b) => priority[a] - priority[b]);

    patientsArranged.forEach(patient => {
        for (const bloodType of DONORS[patient]) {
            if (inventory[bloodType] > 0) {
                inventory[bloodType]--;
                served++;
                break;
            }
        }
    });

    return `${served} of ${patients.length} patients served`;
}


triageBlood(["O","O", "A", "A","B"], ["O","A", "A", "B", "AB"]);

const runTests = require('../helpers/runTests');
runTests(triageBlood, `
    Waiting:1. triageBlood(["O", "A", "B", "AB"], ["O", "A", "B", "AB"]) should return "4 of 4 patients served".
    Waiting:2. triageBlood(["A", "A", "B", "B", "AB"], ["O", "A", "B", "B", "B"]) should return "3 of 5 patients served".
    Waiting:3. triageBlood(["O", "A", "B", "AB"], ["AB", "AB", "AB", "AB", "AB"]) should return "4 of 5 patients served".
    Waiting:4. triageBlood(["O", "O", "O", "O", "O"], ["O", "A", "B", "AB"]) should return "4 of 4 patients served".
    Waiting:5. triageBlood(["A", "O", "B", "AB", "B", "AB", "O", "A", "A"], ["O", "A", "B", "AB", "A", "B", "A", "A", "B", "A", "B"]) should return "8 of 11 patients served".
    Waiting:6. triageBlood(["O", "B", "AB", "AB", "O", "A", "A", "AB", "O", "B", "B", "AB", "A", "B", "AB"], ["O", "A", "B", "B", "A", "B", "AB", "A", "B", "A", "O", "AB", "AB", "O"]) should return "13 of 14 patients served".
`);