//1.Volume of a Box
// Create a function that takes an 
//object argument sizes (contains width, length, height keys) 
//and returns the volume of the box.

console.log("------------------- 1.Volume of a Box -------------------");

function volumeOfBox(size) {
  let volume = size["width"]*size["height"]*size["length"];
  return volume;
}

console.log(volumeOfBox({ width: 2, length: 5, height: 1 })); // ~> 10
console.log(volumeOfBox({ width: 6, length: 2, height: 3 })); // ~> 36


function volumeOfBox2(size) {
  let volume = size.width * size.height * size.length;
  return volume;
}

console.log(volumeOfBox2({ width: 2, length: 5, height: 1 })); // ~> 10
console.log(volumeOfBox2({ width: 6, length: 2, height: 3 })); // ~> 36


//2.Extract City Facts
// Create a function that takes an object as an argument and returns a string with facts 
// about the city. The city facts will need to be extracted from the object's three properties:
// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z 
//(where X is the city name, Y is the population and Z is the continent the city is situated in).
console.log("------------------- 2.Extract City Facts -------------------");

function cityFacts(city) {
  return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
}

console.log(cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
}));

console.log(cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
}));

//3.Calculate the Profit
//You work for a manufacturer, and have been asked to calculate the total profit 
//made on the sales of a product. You are given an object containing the cost price 
//per unit (in dollars), sell price per unit (in dollars), and the starting inventory. 
//Return the total profit made, rounded to the nearest dollar. Assume all of the inventory has 
//been sold
console.log("------------------- 3.Calculate the Profit -------------------");

function profit(info) {
	return Math.round((info.sellPrice - info.costPrice) * info.inventory);
}

console.log(profit({
  costPrice: 32.67,
  sellPrice: 45.00,
  inventory: 1200
}));

console.log(profit({
  costPrice: 225.89,
  sellPrice: 550.00,
  inventory: 100
}));

console.log(profit({
  costPrice: 2.77,
  sellPrice: 7.95,
  inventory: 8500
}));

// 4.Does the Object Contain a Given Key?
// Write a function that returns true if a hash contains the specified key, and false otherwise.
console.log("------------------- 4.Does the Object Contain a Given Key? -------------------");

function hasKey(obj, key) {
	if(Object.keys(obj).includes(key)) { // Object.keys() method returns an array of a given object's 
    return true;
  } else {
    return false
  }
}

console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"));
console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"));
console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning"));

//5.International Greetings
// Suppose you have a guest list of students and the country they are from, 
// stored as key-value pairs in an object.
//Write a function that takes in a name and returns a name tag, that should read:
//"Hi! I'm [name], and I'm from [country]."
// If the name is not in the object, return:
//"Hi! I'm a guest."
console.log("------------------- 5.International Greetings -------------------");

const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {
	if(Object.keys(GUEST_LIST).includes(name)) {
    return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`;
  } else {
    return "Hi! I'm a guest.";
  }
}
console.log(greeting("Randy"));
console.log(greeting("Sam"));
console.log(greeting("Monti"));


// 6.Planetary Weight Converter
// In this challenge, you have to convert a weight weighed on a planet of the Solar 
//System to the corresponding weight on another planet.
//To convert the weight, you have to divide it by the gravitational force of the planet on
// which is weighed and multiply the result (the mass) for the gravitational force of the other 
//planet. See the table below for a list of gravitational forces:
// weight on planetA / gravitational force of planetA) * gravitational force of planetB
//Given a weight weighed on planetA, return the converted value for planetB rounded to the 
//nearest hundredth.
console.log("------------------- 6.Planetary Weight Converter -------------------");
const planets = {
  Mercury : 3.7,
  Venus: 8.87,
  Earth: 9.81,
  Mars: 3.711,
  Jupiter: 24.79,
  Saturn: 10.44,
  Uranus: 8.69,
  Neptune: 11.15
}

function spaceWeights(planetA, weight, planetB) {
  planetA = planets[planetA];
  // console.log(planetA)
  planetB = planets[planetB];
  // console.log(planetB);
  let result;

  return result = parseFloat(((weight/planetA) * planetB).toFixed(2)); 
  //1. Make the calculation
  //2.Outputs until the second number after the ,
  //3.turning it to a number
  
}

console.log(spaceWeights("Earth", 1, "Mars"));
console.log(spaceWeights("Earth", 1, "Jupiter"));
console.log(spaceWeights("Earth", 1, "Neptune"));