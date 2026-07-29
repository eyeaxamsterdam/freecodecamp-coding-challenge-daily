/*
Browser History
Given an array of browser commands, return an array with two values: the history as an array of URLs, and the index of the current page.

Valid commands are:

"URL" - Where URL is a web address ("freecodecamp.org" for example). Navigates to the given URL, adds it to the history at the next position, and discards any forward history.
"Back" - moves to the previous page in history, or stays on the current page if there isn't one.
"Forward" - moves to the next page in history, or stays on the current page if there isn't one.
For example, given ["freecodecamp.org", "freecodecamp.org/learn", "Back"], return [["freecodecamp.org", "freecodecamp.org/learn"], 0].
*/

function getBrowserHistory(commands) {
    let history = [];
    let place = -1;
    for (let command of commands) {
        if (command === 'Back') {
            if (place > 0) place--; 
        } 
        else if (command === 'Forward') {
            if (history.length - 1 > place) place++;
        } else {
            history.splice(place + 1);
            history.push(command);
            place++;
        }
    }
    return [history, place];
}

const runTests = require('../../../helpers/runTests');
runTests(getBrowserHistory, [
    `assert.deepEqual(getBrowserHistory(["freecodecamp.org", "freecodecamp.org/learn", "Back"]), [["freecodecamp.org", "freecodecamp.org/learn"], 0]);`,
    `assert.deepEqual(getBrowserHistory(["example.com", "example.com/about", "example.com/contact", "example.com/blog"]), [["example.com", "example.com/about", "example.com/contact", "example.com/blog"], 3]);`,
    `assert.deepEqual(getBrowserHistory(["example.com", "example.com/about", "Back", "example.com/contact", "example.com/blog", "Back", "Back", "Forward"]), [["example.com", "example.com/contact", "example.com/blog"], 1]);`,
    `assert.deepEqual(getBrowserHistory(["example.com", "example.com/about", "example.com/contact", "example.com/blog", "Back", "Back", "Forward", "freecodecamp.org"]), [["example.com", "example.com/about", "example.com/contact", "freecodecamp.org"], 3]);`,
    `assert.deepEqual(getBrowserHistory(["example.com", "example.com/about", "Back", "Back"]), [["example.com", "example.com/about"], 0]);`,
    `assert.deepEqual(getBrowserHistory(["example.com", "example.com/about", "Forward"]), [["example.com", "example.com/about"], 1]);`,
]);
