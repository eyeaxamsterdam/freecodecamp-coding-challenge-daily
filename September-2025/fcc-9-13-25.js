/*
Missing Numbers
Given an array of integers from 1 to n, inclusive, return an array of all the missing integers between 1 and n (where n is the largest number in the given array).

The given array may be unsorted and may contain duplicates.
The returned array should be in ascending order.
If no integers are missing, return an empty array.
*/

function findMissingNumbers(arr) {
  // Convert to set to remove duplicates and for faster lookup
  const numSet = new Set(arr);

  // Find max value in the array to establish the range [1, n]
  const n = Math.max(...arr);

  // Prepare an array to hold the missing numbers
  const missingNumbers = [];

  // Check every integer between 1 and n to see if it's missing
  for (let i = 1; i <= n; i++) {
    if (!numSet.has(i)) {
      missingNumbers.push(i);
    }
  }
  console.log(missingNumbers);
  return missingNumbers;
}

findMissingNumbers([1, 3, 5]) //should return [2, 4].
findMissingNumbers([1, 2, 3, 4, 5]) //should return [].
findMissingNumbers([1, 10]) //should return [2, 3, 4, 5, 6, 7, 8, 9].
findMissingNumbers([10, 1, 10, 1, 10, 1]) //should return [2, 3, 4, 5, 6, 7, 8, 9].
findMissingNumbers([3, 1, 4, 1, 5, 9]) //should return [2, 6, 7, 8].
findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]) //should return [11].