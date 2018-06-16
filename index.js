function scuberGreetingForFeet(rideLength) {
  let cost
  if (rideLength <= 400) {
    cost = "This one is on me!";
  } else if (rideLength > 2000 && rideLength <= 2500) {
  cost = "I will gladly take your thirty bucks."
  } else if (rideLength > 2500) {
  cost = "No can do."
  }
  return cost
}

function ternaryCheckCity(city) {
  city === "NYC" ? "Ok, sounds good." : "No go."
}
