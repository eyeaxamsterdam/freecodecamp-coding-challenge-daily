/*
Array Sum Finder
Given an array of numbers and a target number, return the first subset of two or more numbers that adds up to the target.

The "first" subset is the one whose elements have the lowest possible indices, prioritizing the earliest index first.
Each number in the array may only be used once.
If no valid subset exists, return "Sum not found".
Return the matching numbers as an array in the order they appear in the original array.
*/

function findSum(arr, target) {
    
   let found = false;
   function findSubset(startIndex, currentSubset, currentSum, depth = 0) {
    if (currentSubset.length >= 2 && currentSum === target) {
        console.log('FOUND IT::: ', currentSubset, ' adds to: ', currentSum);
        found = true;
        return currentSubset;
    }

    for (let i = startIndex; i < arr.length; i++) {
        currentSubset.push(arr[i]);
        console.log('  '.repeat(depth) + `depth ${depth} | CHECKING NEXT ONE i=${i} subset=[${currentSubset}]`);
        console.log('  '.repeat(depth), 'current start = ', currentSubset[0], 'current number: ', arr[i], 'next number = ', arr[i + 1] ? arr[i + 1] : 'the end');
        const subsetFound = findSubset(i + 1, currentSubset, currentSum + arr[i], depth + 1);
        if (found) {
            return subsetFound;
        }
        currentSubset.pop();
        console.log('  '.repeat(depth) + `depth ${depth} | BACKTRACKING  i=${i - 1} subset=[${currentSubset}]`);
    }
} 
    
    const response = findSubset(0, [], 0, 0);
    console.log(response);
    return response || 'Sum not found'; 
}

//Tests:
findSum([5, 6, 7, 8, 9], 17) //should return [8, 9].
//findSum([1, 2, 3, 4, 5], 5) //should return [1, 4].
//findSum([1, 2, 3, 4, 5], 6) //should return [1, 2, 3].
//findSum([-1, -2, 3, 4], 1) //should return [-1, -2, 4].
//findSum([3, 1, 4, 1, 5, 9, 2, 6], 10) //should return [3, 1, 4, 2].
//findSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 20) //should return [1, 2, 3, 5, 9].
//findSum([7, 9, 4, 2, 5], 10) //should return "Sum not found".