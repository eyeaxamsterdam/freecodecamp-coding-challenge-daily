/*
Add Punctuation
Given a string of sentences with missing periods, add a period (".") in the following places:

Before each space that comes immediately before an uppercase letter
And at the end of the string

Return the resulting string.
*/

function addPunctuation(sentences) {

}

const runTests = require('../../helpers/runTests');
runTests(addPunctuation, [
    `assert.equal(addPunctuation("Hello world"), "Hello world.");`,
    `assert.equal(addPunctuation("Hello world It's nice today"), "Hello world. It's nice today.");`,
    `assert.equal(addPunctuation("JavaScript is great Sometimes"), "JavaScript is great. Sometimes.");`,
    `assert.equal(addPunctuation("A b c D e F g h I J k L m n o P Q r S t U v w X Y Z"), "A b c. D e. F g h. I. J k. L m n o. P. Q r. S t. U v w. X. Y. Z.");`,
    `assert.equal(addPunctuation("Wait.. For it"), "Wait... For it.");`,
]);
