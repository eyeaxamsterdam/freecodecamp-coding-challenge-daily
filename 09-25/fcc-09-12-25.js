/*
Screen Time
Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:

If any single day has 10 hours or more, it's too much.
If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
If the average of the seven days is greater than or equal to 6 hours, it's too much.
*/

function tooMuchScreenTime(hours) {
    let fail;
    const sum = hours.reduce((acc, curr) => acc + curr, 0)
    console.log('sum ', sum);
    for (let i = 0; i < hours.length; i++) {
        if (sum >= 42) {
            console.log('over 42')
            fail = true;
            break
        } else if (hours[i] >= 10) {
            console.log('day over 10')
            fail = true;
            break
        } else if (i > 0 && (hours[i-1] + hours[i] + hours[i+1]) > 24) {
            console.log('3 days messed up')
            fail = true;
            break
        } else {
            fail = false;
        }
    }
    console.log(fail);
    return fail;
}

/*
tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]) should return false.
tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]) should return false.
tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]) should return false.
tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]) should return true.
tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]) should return true.
tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]) should return true.
tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]) should return true.
 */