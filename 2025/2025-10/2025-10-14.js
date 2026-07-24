/*
String Count
Given two strings, determine how many times the second string appears in the first.

The pattern string can overlap in the first string. For example, "aaa" contains "aa" twice. The first two a's and the second two.
*/

function count(text, pattern) {
    let count = 0;
    if (text.length >= pattern.length) {
        for (let i = 0; i < text.length - (pattern.length -1); i++) {
        let check = text.slice(i,i + pattern.length);
        console.log('starting at: ', text[i], ' pattern is: ', pattern, ' and check is: ', check);
        check === pattern && count ++;
        }
    } else {
        console.log('bad pattern');
    }
    console.log('count ', count)
    return count;
}

//Tests
count('abcdefg', 'def') //should return 1.
count('hello', 'world') //should return 0.
count('mississippi', 'iss') //should return 2.
count('she sells seashells by the seashore', 'sh') //should return 3.
count('101010101010101010101', '101') //should return 10.