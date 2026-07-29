/*
Periodic Spelling
Given a word, determine if it can be spelled using element symbols from the periodic table.

Ignore casing when spelling a word. "neon" can be spelled with the symbols "Ne", "O", and "N".
Here's a full list of the element symbols:

["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"];
Return an array of the elements used to spell the word, in their original casing and in the order to spell the word. Or, an empty array if it can't be spelled.
*/

const TABLE = 
    ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"];
function getPeriodicSpelling(word) {
    function solve(index) {
        console.log('index = ', word[index]);
        if (index === word.length) return [];  // reached end successfully

        const single = word[index].toUpperCase();
        const double = index < word.length - 1 ? single + word[index + 1] : null;
        console.log('single: ', single, 'double: ', double);

        // Try 2-char first
        if (double && TABLE.includes(double)) {
            const rest = solve(index + 2);
            console.log('double rest: ', rest);
            if (rest !== null) {
                console.log([double, ...rest]);
                return [double, ...rest];
            }
        }

        // Fall back to 1-char
        if (TABLE.includes(single)) {
            const rest = solve(index + 1);
            console.log('single rest: ', rest);
            if (rest !== null) {
                console.log([single, ...rest]);
                return [single, ...rest];
            }
        }

        return null;  // dead end — signal failure up the call stack
    }

    return solve(0) ?? [];
}


const runTests = require('../../../helpers/runTests');
runTests(getPeriodicSpelling, [
    `assert.deepEqual(getPeriodicSpelling("neon"), ["Ne", "O", "N"]);`,
    `assert.deepEqual(getPeriodicSpelling("rational"), ["Ra", "Ti", "O", "N", "Al"]);`,
    `assert.deepEqual(getPeriodicSpelling("yarn"), ["Y", "Ar", "N"]);`,
    `const result = JSON.stringify(getPeriodicSpelling("carbon"));
    const path1 = JSON.stringify(["C", "Ar", "B", "O", "N"]);
    const path2 = JSON.stringify(["Ca", "Rb", "O", "N"]);
    assert.isTrue(result === path1 || result === path2);`,
    `const result = JSON.stringify(getPeriodicSpelling("noisy"));
    const path1 = JSON.stringify(["N", "O", "I", "S", "Y"]);
    const path2 = JSON.stringify(["No", "I", "S", "Y"]);
    assert.isTrue(result === path1 || result === path2);`,
    `const result = JSON.stringify(getPeriodicSpelling("bicycles"));
    const path1 = JSON.stringify(["B", "I", "C", "Y", "Cl", "Es"]);
    const path2 = JSON.stringify(["Bi", "C", "Y", "Cl", "Es"]);
    assert.isTrue(result === path1 || result === path2);`,
    `const result = JSON.stringify(getPeriodicSpelling("optics"));
    const path1 = JSON.stringify(["O", "P", "Ti", "C", "S"]);
    const path2 = JSON.stringify(["O", "P", "Ti", "Cs"]);
    const path3 = JSON.stringify(["O", "Pt", "I", "C", "S"]);
    const path4 = JSON.stringify(["O", "Pt", "I", "Cs"]);
    assert.isTrue(result === path1 || result === path2 || result === path3 || result === path4);`,
    `assert.deepEqual(getPeriodicSpelling("value"), []);`,
]);
