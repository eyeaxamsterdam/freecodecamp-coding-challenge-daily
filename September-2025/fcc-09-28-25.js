/* 
CSV Header Parser
Given the first line of a comma-separated values (CSV) file, return an array containing the headings.

The first line of a CSV file contains headings separated by commas.
Remove any leading or trailing whitespace from each heading.
*/

function getHeadings(csv) {
    let splitStr = csv.split(',');
    let finalArray = []
    splitStr.forEach(w => finalArray.push(w.trim(' ')));
    console.log(finalArray);
  return finalArray;
}

getHeadings("name,age,city") //should return ["name", "age", "city"].
getHeadings("first name,last name,phone") //should return ["first name", "last name", "phone"].
getHeadings("username , email , signup date ") //should return ["username", "email", "signup date"].