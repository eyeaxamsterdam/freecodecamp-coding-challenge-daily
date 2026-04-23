/*
Unique Stair Climber
Given a number of stairs, return how many distinct ways someone can climb them taking either 1 or 2 steps at a time.
*/

function getUniqueClimbs(steps) {
    let firstPrevStep = 2;
    let secondPrevStep = 1;
    if (steps < 3) return steps;
    let totalSteps = 0;

    for (let i = 3; i <= steps; i++) {
        totalSteps = firstPrevStep + secondPrevStep;
        secondPrevStep = firstPrevStep;
        firstPrevStep = totalSteps;
    }
    console.log(totalSteps);
    return totalSteps;
}

//Tests:
getUniqueClimbs(4) // should return 5.
getUniqueClimbs(5) // should return 8.
getUniqueClimbs(10) // should return 89.
getUniqueClimbs(18) // should return 4181.
getUniqueClimbs(29) // should return 832040.
getUniqueClimbs(50) // should return 20365011074.