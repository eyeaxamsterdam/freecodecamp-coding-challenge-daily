/*
DNA Mutations
Given two DNA strands of equal length, return an array of indexes where the strands differ (mutations).

DNA strands are strings made up of the characters "A", "T", "C", and "G"
Return the indexes in ascending order
If there are no mutations, return an empty array
*/

function detectMutations(strand1, strand2) {
    return strand1.split('').flatMap((l,i) => l !== strand2[i] ? [i] : []);
}

const runTests = require('../../helpers/runTests');
runTests(detectMutations, [
    `assert.deepEqual(detectMutations("ATCG", "ATGG"), [2]);`,
    `assert.deepEqual(detectMutations("ATGCGTACGTTAGC", "ATGCATACGATTGC"), [4, 9, 11]);`,
    `assert.deepEqual(detectMutations("GATCTAGCTAGGCTAGCTAG", "GATCTAGCTAGGCTAGCTAG"), []);`,
    `assert.deepEqual(detectMutations("TCAGATCATGGCTAGCTACGATCAGCTAGCATGCATATCGACTG", "TCAGATCATGGCTAGAGCTGATCAGCTAGCATGCATATCGACTG"), [15, 16, 17, 18]);`,
    `assert.deepEqual(detectMutations("ACGTCAGTACGCACATGACCATTGACATA", "AACGTCAGTACGCACATGACCATTGACAT"), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 23, 24, 25, 26, 27, 28]);`,
]);
