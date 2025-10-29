/*
Navigator
On October 28, 1994, Netscape Navigator was released, helping millions explore the early web.

Given an array of browser commands you executed on Netscape Navigator, return the current page you are on after executing all the commands using the following rules:

You always start on the "Home" page, which will not be included in the commands array.
Valid commands are:
"Visit Page": Where "Page" is the name of the page you are visiting. For example, "Visit About" takes you to the "About" page. When you visit a new page, make sure to discard any forward history you have.
"Back": Takes you to the previous page in your history or stays on the current page if there isn't one.
"Forward": Takes you forward in the history to the page you came from or stays on the current page if there isn't one.
For example, given ["Visit About Us", "Back", "Forward"], return "About Us".
*/

function navigate(commands) {
    let currentPage = 'Home'
    let pageHistory = ['Home']
    let pagePosition = 0;

    commands.forEach((p) => {
        if (p.includes('Visit')) {
            let newp = p.replace('Visit ','');
            pageHistory.length > pagePosition ? pageHistory.splice(pagePosition + 1) : null;
            pageHistory.push(newp);
            pagePosition++
            currentPage = newp;
        } else if (p === 'Back' && pagePosition > 0) {
            pagePosition--;
            currentPage = pageHistory[pagePosition];
        } else if (p === 'Forward' && pagePosition < pageHistory.length - 1) {
            pagePosition++
            currentPage = pageHistory[pagePosition];
        }
    })
    console.log(currentPage);
    return currentPage;
}

navigate(["Visit About Us", "Back", "Forward"]) //should return "About Us".
navigate(["Forward"]) //should return "Home".
navigate(["Back"]) //should return "Home".
navigate(["Visit About Us", "Visit Gallery"]) //should return "Gallery".
navigate(["Visit About Us", "Visit Gallery", "Back", "Back"]) //should return "Home".
navigate(["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"]) //should return "Contact".
navigate(["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"]) //should return "Visit Us".