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
getExtension("document.txt") //should return "txt".
getExtension("README") //should return "none".
getExtension("image.PNG") //should return "PNG".
getExtension(".gitignore") //should return "gitignore".
getExtension("archive.tar.gz") //should return "gz".
getExtension("final.draft.") //should return "none".