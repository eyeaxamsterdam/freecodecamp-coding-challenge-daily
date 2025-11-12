/*
Word Search
Given a matrix (an array of arrays) of single letters and a word to find, return the start and end indices of the word in the matrix.

The given matrix will be filled with all lowercase letters (a-z).
The word to find will always be in the matrix exactly once.
The word to find will always be in a straight line in one of these directions:
left to right
right to left
top to bottom
bottom to top
For example, given the matrix:

[
  ["a", "c", "t"],
  ["t", "a", "t"],
  ["c", "t", "c"]
]
And the word "cat", return:

[[0, 1], [2, 1]]
Where [0, 1] are the indices for the "c" (start of the word), and [2, 1] are the indices for the "t" (end of the word).
*/

function findWord(matrix, word) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const directions = [
    [1, 0],  // down
    [-1, 0], // up
    [0, 1],  // right
    [0, -1]  // left
  ];

  // Helper to check if a position is valid
  function isValid(r, c) {
    return r >= 0 && c >= 0 && r < rows && c < cols;
  }

  // Try to find the word starting from (r, c) in direction (dr, dc)
  function checkDirection(r, c, dr, dc) {
    for (let i = 0; i < word.length; i++) {
      const nr = r + dr * i;
      const nc = c + dc * i;
      if (!isValid(nr, nc) || matrix[nr][nc] !== word[i]) {
        return false;
      }
    }
    // If the loop completes, word found
    const endRow = r + dr * (word.length - 1);
    const endCol = c + dc * (word.length - 1);
    const result = [[r, c], [endRow, endCol]];
    console.log(`Found word "${word}" from ${JSON.stringify(result[0])} to ${JSON.stringify(result[1])}`);
    return result;
  }

  // Loop through all positions
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === word[0]) {
        for (const [dr, dc] of directions) {
          const result = checkDirection(r, c, dr, dc);
          if (result) {
            console.log(`Returning result: ${JSON.stringify(result)}`);
            return result;
          }
        }
      }
    }
  }

  console.log(`Word "${word}" not found in matrix`);
  return null;
}


//Tests
findWord([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat") //should return [[0, 1], [2, 1]].
/* findWord([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog") //should return [[0, 0], [0, 2]].
findWord([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish") //should return [[3, 3], [0, 3]].
findWord([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox") //should return [[1, 3], [1, 1]]. */