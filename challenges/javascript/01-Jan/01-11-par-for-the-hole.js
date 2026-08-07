/*
Par for the Hole
Given two integers, the par for a golf hole and the number of strokes a golfer took on that hole, return the golfer's score using golf terms.

Return:

"Hole in one!" if it took one stroke.
"Eagle" if it took two strokes less than par.
"Birdie" if it took one stroke less than par.
"Par" if it took the same number of strokes as par.
"Bogey" if it took one stroke more than par.
"Double bogey" if took two strokes more than par.
*/

function golfScore(par, strokes) {
    if (strokes === 1) {
        console.log('Hole in one!')
        return 'Hole in one!'
    } else if (strokes === (par - 2)) {
        console.log('Eagle')
        return 'Eagle'
    } else if (strokes === (par - 1)) {
        console.log('Birdie')
        return 'Birdie'
    } else if (strokes === par) {
        console.log('Par')
        return 'Par'
    } else if (strokes === (par + 1)) {
        console.log('Bogey')
        return 'Bogey'
    } else if (strokes === (par + 2)) {
        console.log('Double bogey')
        return 'Double bogey'
    }
}

const runTests = require('../../../helpers/runTests');
runTests(golfScore, [
    `assert.equal(golfScore(3, 3), "Par");`,
    `assert.equal(golfScore(4, 3), "Birdie");`,
    `assert.equal(golfScore(3, 1), "Hole in one!");`,
    `assert.equal(golfScore(5, 7), "Double bogey");`,
    `assert.equal(golfScore(4, 5), "Bogey");`,
    `assert.equal(golfScore(5, 3), "Eagle");`,
]);
