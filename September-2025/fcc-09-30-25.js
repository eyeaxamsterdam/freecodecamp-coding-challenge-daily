/* 
Phone Number Formatter
Given a string of ten digits, return the string as a phone number in this format: "+D (DDD) DDD-DDDD".
*/
function formatNumber(number) {
  const int = '+'+ number[0]
  const area = number[1] + number[2] + number[3];
  const three = number[4] + number[5] + number[6];
  const four = number[7] + number[8] + number[9] + number[10];

  const finalNum = `${int} (${area}) ${three}-${four}`;
  console.log(finalNum)

  console.log(int)
  return finalNum;
}

formatNumber("05552340182") //should return "+0 (555) 234-0182".
formatNumber("15554354792") //should return "+1 (555) 435-4792".