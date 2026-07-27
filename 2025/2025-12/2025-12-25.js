/*
Snowflake Generator
Given a multi-line string that uses newline characters (\n) to represent a line break, return a new string where each line is mirrored horizontally and attached to the end of the original line.

Mirror a line by reversing all of its characters, including spaces.

For example, given "* \n *\n* ", which logs to the console as:

`sh
* 
 *
* 
`

Return "*  *\n ** \n*  *", which logs to the console as:

`sh
*  *
 ** 
*  *
`

Take careful note of the whitespaces in the given and returned strings. Be sure not to trim any of them.
*/

function generateSnowflake(crystals) {

}

const runTests = require('../../helpers/runTests');
runTests(generateSnowflake, [
    `assert.equal(generateSnowflake("* \\n *\\n* "), "*  *\\n ** \\n*  *");`,
    `assert.equal(generateSnowflake("X=~"), "X=~~=X");`,
    `assert.equal(generateSnowflake(" X  \\n  v \\nX--=\\n  ^ \\n X  "), " X    X \\n  v  v  \\nX--==--X\\n  ^  ^  \\n X    X ");`,
    `assert.equal(generateSnowflake("*   *\\n * * \\n* * *\\n * * \\n*   *"), "*   **   *\\n * *  * * \\n* * ** * *\\n * *  * * \\n*   **   *");`,
    `assert.equal(generateSnowflake("*  -\\n * -\\n*  -"), "*  --  *\\n * -- * \\n*  --  *");`,
]);
