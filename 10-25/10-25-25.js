/*
Complementary DNA
Given a string representing a DNA sequence, return its complementary strand using the following rules:

DNA consists of the letters "A", "C", "G", and "T".
The letters "A" and "T" complement each other.
The letters "C" and "G" complement each other.
For example, given "ACGT", return "TGCA".
*/

function complementaryDNA(strand) {
    let compDna = '';
    const KEY = {'A':'T', 'T': 'A', 'C':'G', 'G':'C'}
    for (i = 0; i < strand.length; i++) {
        console.log(KEY[strand[i]])        
    }    
    return strand;
}


complementaryDNA("ACGT") //should return "TGCA".
complementaryDNA("ATGCGTACGTTAGC") //should return "TACGCATGCAATCG".
complementaryDNA("GGCTTACGATCGAAG") //should return "CCGAATGCTAGCTTC".
complementaryDNA("GATCTAGCTAGGCTAGCTAG") //should return "CTAGATCGATCCGATCGATC".