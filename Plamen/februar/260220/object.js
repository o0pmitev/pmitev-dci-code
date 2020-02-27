let myObject = {
  name: "Plamen",
  age: 30,
  cats: 0,
  married: true
}

// convert all the values to an array 
//[["name", "Plamen"],["age", 30], ["cats", 0], ["married", true]];

console.log(myObject);

let outerBox = []; // new Array();
for(let i = 0; i < Object.keys(myObject).length; i++) {
  let innerBox = [];

  innerBox.push(Object.keys(myObject)[i]);
  // console.log(Object.keys(myObject));
  innerBox.push(Object.values(myObject)[i]);
  // console.log(Object.values(myObject))
  outerBox.push(innerBox);
}
console.log(outerBox);

// second way using Object.entries

let outerBox2 = Object.entries(myObject); // makes a real copy of the object

console.log(outerBox2);

// Object.fromEntries() 
let outerObject = Object.fromEntries(outerBox2);


console.log(outerObject);

