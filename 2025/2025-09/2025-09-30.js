/* 
Phone Number Formatter
Given a string of ten digits, return the string as a phone number in this format: "+D (DDD) DDD-DDDD".
*/
function formatNumber(digits) {
    if (!/^\d{11}$/.test(digits)) {
        return "Invalid input. Please provide exactly 10 digits.";
    }
    console.log('shit')
    const country = digits.substring(0, 1);
    const area = digits.substring(1, 4);
    const middle = digits.substring(4, 7);
    const last = digits.substring(7, 11);
    const final = `+${country} (${area}) ${middle}-${last}`
    console.log(final);
    return final;
}

formatNumber("05552340182") //should return "+0 (555) 234-0182".
formatNumber("15554354792") //should return "+1 (555) 435-4792".