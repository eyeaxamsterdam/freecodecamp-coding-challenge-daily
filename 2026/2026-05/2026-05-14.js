/*
Mirror Image
Given two strings, determine if the second string is a mirror image of the first.

A mirror image is formed by reversing the string and replacing each character with its mirror equivalent.

Symmetric characters look like themselves in a mirror:
W, T, Y, U, I, O, H, A, X, V, M, w, o, x, v, 0, 8, =, +, :, |, -, _, *, ^, !, ., and the space ( ).

Mirrored pairs swap with each other in a mirror:


Character	Swaps with
[	         ]
{	         }         
<	         >
b	         d
p	         q
(	         )


If either string includes a character not in the lists above, it doesn't have mirror image that can be created from the characters.

For example, the mirrored image of "[HOW]" is "[WOH]".
*/

function isMirrorImage(str1, str2) {
    const SYMMETRIC = new Set(['W','T','Y','U','I','O','H','A','X','V','M','w','o','x','v','0','8','=','+',':','|','-','_','*','^','!',' ','.']);
    const SWAPPED = {'[':']', ']':'[', '{':'}', '}':'{', '<':'>', '>':'<', 'b':'d', 'd':'b', 'p':'q', 'q':'p', '(':')', ')':'('};

    if (str1.length !== str2.length) return false;

    for (let i = 0; i < str1.length; i++) {
        const left = str1[i];
        const right = str2[str2.length - 1 - i];

        if (!SYMMETRIC.has(left) && !(left in SWAPPED)) return false;
        if (!SYMMETRIC.has(right) && !(right in SWAPPED)) return false;

        if (SYMMETRIC.has(left)) {
            if (left !== right) return false;
        } else {
            if (SWAPPED[left] !== right) return false;
        }
    }
    return true;
}

const runTests = require('../../helpers/runTests');
runTests(isMirrorImage, `
    isMirrorImage("[HOW]", "[WOH]") should return true.
    isMirrorImage("MOM", "MOM") should return true.
    isMirrorImage("vow", "wov") should return true.
    isMirrorImage("TIM", "TIM") should return false.
    isMirrorImage("{WOW}", "}WOW{") should return false.
    isMirrorImage("XXVII", "IIV%X") should return false.
    isMirrorImage("><(((*>", "<*)))><") should return true.
    isMirrorImage("WTYUIOHAXVMwoxv08=+:|-_*^!.[]{}<>bdpq()", "()pqbd<>{}[].!^*_-|:+=80vxowMVXAHOIUYTW") should return true.
`);