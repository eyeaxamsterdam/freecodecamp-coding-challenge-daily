/* 
Word Frequency
Given a paragraph, return an array of the three most frequently occurring words.

Words in the paragraph will be separated by spaces.
Ignore case in the given paragraph. For example, treat Hello and hello as the same word.
Ignore punctuation in the given paragraph. Punctuation consists of commas (,), periods (.), and exclamation points (!).
The returned array should have all lowercase words.
The returned array should be in descending order with the most frequently occurring word first.
*/

function getWords(paragraph) {
  // Convert paragraph to lowercase and remove punctuation
  const wordsArray = paragraph.toLowerCase().replace(/[,.!]/g, '').split(/\s+/);

  // Count the frequency of each word
  const wordCount = wordsArray.reduce((acc, word) => {
    if (word) { // Ignore empty strings
      acc[word] = (acc[word] || 0) + 1;
    }
    return acc;
  }, {});

  // Sort words by frequency and get the top 3
  const sortedWords = Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(entry => entry[0]);
  console.log(sortedWords);
  return sortedWords;
}

const runTests = require('../../../helpers/runTests');
runTests(getWords, [
    `assert.deepEqual(getWords("Coding in Python is fun because coding Python allows for coding in Python easily while coding"), ["coding", "python", "in"]);`,
    `assert.deepEqual(getWords("I like coding. I like testing. I love debugging!"), ["i", "like", "coding"]);`,
    `assert.deepEqual(getWords("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!"), ["debug", "test", "deploy"]);`,
]);
