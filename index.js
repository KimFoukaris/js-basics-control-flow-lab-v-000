const rideLength, cost;
function scuberGreetingForFeet(rideLength) {
  if (rideLength<=400) {
    cost = "This one is on me!";
    break;
  } else if (rideLength>2000 && rideLength<=2500) {
    cost = "I will gladly take your thirty bucks."
    break;
  } else if (rideLength>2500) {
    cost = "No can do."
  }
  return cost
}
