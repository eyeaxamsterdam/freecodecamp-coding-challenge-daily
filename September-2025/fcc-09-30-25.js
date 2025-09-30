/* 
Phone Number Formatter
Given a string of ten digits, return the string as a phone number in this format: "+D (DDD) DDD-DDDD".
*/
function formatPhoneNumber(digits) {
    // Ensure the input is a string of digits and has exactly 10 characters
    if (!/^\d{10}$/.test(digits)) {
        return "Invalid input. Please provide exactly 10 digits.";
    }
    
    // Extract parts of the phone number using substring and format it
    const country = digits.substring(0, 1);
    const area = digits.substring(1, 4);
    const middle = digits.substring(4, 7);
    const last = digits.substring(7, 10);
    
    return `+${country} (${area}) ${middle}-${last}`;
}

formatNumber("05552340182") //should return "+0 (555) 234-0182".
formatNumber("15554354792") //should return "+1 (555) 435-4792".