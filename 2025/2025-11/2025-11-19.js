/*
Markdown Heading Converter
Given a string representing a Markdown heading, return the equivalent HTML heading.

A valid Markdown heading must:

Start with zero or more spaces, followed by
1 to 6 hash characters (#) in a row, then
At least one space. And finally,
The heading text.
The number of hash symbols determines the heading level. For example, one hash symbol corresponds to an h1 tag, and six hash symbols correspond to an h6 tag.

If the given string doesn't have the exact format above, return "Invalid format".

For example, given "# My level 1 heading", return "<h1>My level 1 heading</h1>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.
*/

function convert(heading) {
    let regex = /^#[#\s]*$/;
    let headingNum = 0
    let index = 0;
    let hash;
    let splitStr = heading.split(' ');
    splitStr.forEach((str, i) => {
        if (regex.test(str) && str.length < 7) {
            hash = str;
            index = i;
        }
    }); 
    hash ? console.log('hash ', hash, ' length ', hash.length) : console.log('Invalid fromat.')


    let response = hash ? `<h${hash.length}>${splitStr.slice(index + 1).join(' ').trim()}</h${hash.length}>` : 'Invalid format';
    console.log('response ', response);
    return response;
}

//Tests
convert("# My level 1 heading") //should return "<h1>My level 1 heading</h1>".
convert("My heading") //should return "Invalid format".
convert("##### My level 5 heading") //should return "<h5>My level 5 heading</h5>".
convert("#My heading") //should return "Invalid format".
convert("  ###  My level 3 heading") //should return "<h3>My level 3 heading</h3>".
convert("####### My level 7 heading") //should return "Invalid format".
convert("## My #2 heading") //should return "<h2>My #2 heading</h2>".