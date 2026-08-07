/*
SCREAMING_SNAKE_CASE
Given a string representing a variable name, return the variable name converted to SCREAMING_SNAKE_CASE.

The given variable names will be written in one of the following formats:

camelCase
PascalCase
snake_case
kebab-case

In the above formats, words are separated by an underscore (_), a hyphen (-), or a new word starts with a capital letter.

To convert to SCREAMING_SNAKE_CASE:

Make all letters uppercase
Separate words with an underscore (_)
*/

function toScreamingSnakeCase(variableName) {
    return variableName
        .replace(/[-_]/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .split(' ')
        .filter(Boolean)
        .join('_')
        .toUpperCase();
}

const runTests = require('../../../helpers/runTests');
runTests(toScreamingSnakeCase, [
    `assert.equal(toScreamingSnakeCase("userEmail"), "USER_EMAIL");`,
    `assert.equal(toScreamingSnakeCase("UserPassword"), "USER_PASSWORD");`,
    `assert.equal(toScreamingSnakeCase("user_id"), "USER_ID");`,
    `assert.equal(toScreamingSnakeCase("user-address"), "USER_ADDRESS");`,
    `assert.equal(toScreamingSnakeCase("username"), "USERNAME");`,
    `assert.equal(toScreamingSnakeCase("my_variable_name"), "MY_VARIABLE_NAME");`,
]);
