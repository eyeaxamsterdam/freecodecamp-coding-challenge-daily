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

//Tests
golfScore(3, 3) //should return "Par".
golfScore(4, 3) //should return "Birdie".
golfScore(3, 1) //should return "Hole in one!".
golfScore(5, 7) //should return "Double bogey".
golfScore(4, 5) //should return "Bogey".
golfScore(5, 3) //should return "Eagle".