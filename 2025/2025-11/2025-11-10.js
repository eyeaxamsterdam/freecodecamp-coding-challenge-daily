/*
Extension Extractor
Given a string representing a filename, return the extension of the file.

The extension is the part of the filename that comes after the last period (.).
If the filename does not contain a period or ends with a period, return "none".
The extension should be returned as-is, preserving case.
*/

function getExtension(filename) {
    let lastp = filename.lastIndexOf('.')
    let splitStr = filename.slice(lastp)
    let response = lastp >= 0 && splitStr.length > 1 ? splitStr.slice(1) :  'none';
    console.log(response)
    return response;
}

//Tests

const runTests = require('../../helpers/runTests');
runTests(getExtension, [
    `assert.equal(getExtension("document.txt"), "txt");`,
    `assert.equal(getExtension("README"), "none");`,
    `assert.equal(getExtension("image.PNG"), "PNG");`,
    `assert.equal(getExtension(".gitignore"), "gitignore");`,
    `assert.equal(getExtension("archive.tar.gz"), "gz");`,
    `assert.equal(getExtension("final.draft."), "none");`,
]);
