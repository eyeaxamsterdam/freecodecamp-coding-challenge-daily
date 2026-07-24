/*
Hidden Key
Welcome to the 250th daily challenge!

Given an encoded string, decode it using an encryption key and return it.

To find the key:

Look at all daily challenges up to today whose challenge number is a multiple of 25 (including this one).
Take the first letter from each of those challenge titles and combine them into a string. If the title starts with a non-letter, find its first letter.
To decode the message, go over each letter in the encoded message and:

Look at the corresponding letter in the key (repeat the key if the message is longer than the key).
Convert the key letter to its corresponding number: "A" = 1, "B" = 2, ..., "Z" = 26.
Shift the encoded letter backward in the alphabet by that number.
If the shift goes before "A", wrap around to "Z".
For example, if the encoded message starts with "Y" and the first key letter is "V" (22), shift "Y" back 22 places to get "C". Repeat this process for each letter to decode the full message.

Only letters are shifted, spaces are returned as-is.
All given and returned letters are uppercase.
*/

function decode(message) {
  const KEY = 'VLHCGMDLNH'; // First Letters of days 25,50,75,100,125,150,175,200,225, and 250
  const keyNums = KEY.split('').map(l => l.charCodeAt(0) - 64);
  const messageArray = message.split('');
  let keyIndex = 0;

  let mapped = messageArray.map(l => {
    if (l === ' ') {
      return ' '
    } else {
      let num = (l.charCodeAt(0) - 64) - keyNums[keyIndex++ % KEY.length];
      return String.fromCharCode((num <= 0 ? num + 26 : num) + 64);
    }
  });
  
  console.log(mapped.join(''));
  return mapped.join('');
}

// Tests:
decode("YAVJYNXE") //should return "CONGRATS".
decode("YALLUT PQUMJP") //should return "CODING LEGEND".
decode("UAC DYR EISAKYM") //should return "YOU ARE AWESOME".
decode("GQMS NBMZU") //should return "KEEP GOING".
decode("W IQQURV UG I ZDMDTRV IVW JQDHY TMHSA QB") //should return "A WINNER IS A DREAMER WHO NEVER GIVES UP".