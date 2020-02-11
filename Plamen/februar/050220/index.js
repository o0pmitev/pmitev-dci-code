console.log("-----------------------------OBJECTS----------------------------")
// Array.isArray(myArr) ~> check is it an array
const newArray = new Array(); // = []; create empty array
console.log(newArray); // ~> []
console.log(typeof(newArray)); // ~> object
console.log(Array.isArray(newArray)); // ~> true

const newString = "Hello, World!";
console.log(Array.isArray(newString)); // ~> false
const newStringArray = newString.split("");
console.log(Array.isArray(newStringArray)); // ~> true

// how to make an Object (which is not an array)
console.log("------------------- how to make an Object (which is not an array) -------------------")
const myObject = new Object(); // creates an empty object
const shortObject = {
  key1: true,
  key2: "value",
  key3: 123
}; 

console.log(myObject);
console.log(shortObject);
console.log(Array.isArray(shortObject)); // ~> false
console.log(shortObject['key2']); // ~> value // Access bracket notation with strings as a key
console.log(typeof((shortObject['key2']))); // ~> string


const plamen = {
  name: "Plamen Mitev",
  age: 30,
  homeTown: "Haskovo",
  married: true
};

console.log(plamen["age"]); // ~> 30 // one option: bracket notation myObject["key"]
console.log(plamen.age); // ~> 30 // second option: dot notation myObject.key
