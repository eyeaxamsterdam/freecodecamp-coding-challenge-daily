/*
Trail Traversal
Given an array of strings representing your trail map, return a string of the moves needed to get to your goal.

The given strings will contain the values:

"C": Your current location
"G": Your goal
"T": Traversable parts of the trail
"-": Untraversable parts of the map
Return a string with the moves needed to follow the trail from your location to your goal where:

"R" is a move right

"D" is a move down

"L" is a move left


There will always be a single continuous trail, without any branching, from your current location to your goal.

Each trail location will have a maximum of two traversable locations touching it.

For example, given:

[
  "-CT--",
  "--T--",
  "--TT-",
  "---T-",
  "---G-"
]
Return "RDDRDD".
*/

function navigateTrail(map) {
    let guide = '';
    let lookAround = (direction, row, collumn) => {
        if (map[row][collumn] === 'G') {
            return 'complete!';
        }
        if (direction !== 'left' && collumn !== 0 && map[row][collumn-1] !== '-') {
            guide += 'L';  
            if (lookAround('right', row,collumn -1)) return guide;
        }
        if (direction !== 'right'&& collumn < map[0].length && map[row][collumn+1] !== '-') {
            guide += 'R';
            if (lookAround('left',row,collumn+1)) return guide;
        }
        if (direction !== 'up' && row !== 0 && map[row-1][collumn] !== '-') {
            guide += 'U';
            if (lookAround('down', row - 1,collumn)) return guide;
        }
        if (direction !== 'down' && row < map.length && map[row+1][collumn] !== '-') {
            guide += 'D';
            if (lookAround('up', row + 1,collumn)) return guide;
        }

    }
    
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 'C') return lookAround('',i,j)
        }
    }
}

const { DefaultToWordsOptions } = require('to-words');
const runTests = require('../helpers/runTests');
runTests(navigateTrail, `
    Waiting:1. navigateTrail(["-CT--", "--T--", "--TT-", "---T-", "---G-"]) should return "RDDRDD".
    Waiting:2. navigateTrail(["-----", "--TTG", "--T--", "--T--", "CTT--"]) should return "RRUUURR".
    Waiting:3. navigateTrail(["-C----", "TT----", "T-----", "TTTTT-", "----G-"]) should return "DLDDRRRRD".
    Waiting:4. navigateTrail(["--------", "-CTTT---", "----T---", "---GT---", "--------"]) should return "RRRDDL".
    Waiting:5. navigateTrail(["TTTTTTT-", "T-----T-", "T-----T-", "TTTT--TG", "---C----"]) should return "ULLLUUURRRRRRDDDR".
`);