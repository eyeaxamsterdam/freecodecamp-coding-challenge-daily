/*
Complementary DNA
Given a string representing a DNA sequence, return its complementary strand using the following rules:

DNA consists of the letters "A", "C", "G", and "T".
The letters "A" and "T" complement each other.
The letters "C" and "G" complement each other.

For example, given "ACGT", return "TGCA".
*/

function complementaryDNA(strand) {
    const complement = { A: 'T', T: 'A', C: 'G', G: 'C' };
    return strand.split('').map((base) => complement[base]).join('');
}

const runTests = require('../../../helpers/runTests');
runTests(complementaryDNA, [
    `assert.equal(complementaryDNA("ACGT"), "TGCA");`,
    `assert.equal(complementaryDNA("ATGCGTACGTTAGC"), "TACGCATGCAATCG");`,
    `assert.equal(complementaryDNA("GGCTTACGATCGAAG"), "CCGAATGCTAGCTTC");`,
    `assert.equal(complementaryDNA("GATCTAGCTAGGCTAGCTAG"), "CTAGATCGATCCGATCGATC");`,
]);
