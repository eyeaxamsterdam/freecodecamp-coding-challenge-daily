/* 
Space Week Day 3: Phone Home
For day three of Space Week, you are given an array of numbers representing distances (in kilometers) between yourself, satellites, and your home planet in a communication route. Determine how long it will take a message sent through the route to reach its destination planet using the following constraints:

The first value in the array is the distance from your location to the first satellite.
Each subsequent value, except for the last, is the distance to the next satellite.
The last value in the array is the distance from the previous satellite to your home planet.
The message travels at 300,000 km/s.
Each satellite the message passes through adds a 0.5 second transmission delay.
Return a number rounded to 4 decimal places, with trailing zeros removed.
*/

function sendMessage(route) {
  const kms = 300000;
  let time = 0;

  for (let i = 0; i < route.length; i++) {
    i !== (route.length - 1) ? time += .5 : time += 0;
    time += (route[i]/kms);
  }

  console.log(time.toFixed(4));
  
  return route;
}

sendMessage([300000, 300000]) //should return 2.5.
sendMessage([384400, 384400]) //should return 3.0627.
sendMessage([54600000, 54600000]) //should return 364.5.
sendMessage([1000000, 500000000, 1000000]) //should return 1674.3333.
sendMessage([10000, 21339, 50000, 31243, 10000]) //should return 2.4086.
sendMessage([802101, 725994, 112808, 3625770, 481239]) //should return 21.1597.