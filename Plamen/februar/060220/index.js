console.log(typeof(Array)); // ~> function

// Object literal context,simple things and methods mixed: 
const fatma = {
  // properties:
 age: 14,
 // methods:
 eat:  function(food){
    console.log('poop');
  },
  sleep: function() {
    console.log('snore');
  },
  breakThings: function() {
    console.log('poker face');
  },
  getAge: function() { // getter
    return this.age; // get the current age
  },
  setAge: function(newAge) { //setter
    return this.age = newAge; // set a new age depending on input
  }
  
  // breakThings 
}
console.log(fatma.age); // ~> 14
fatma.eat(); // ~> poop
fatma.sleep(); // ~> snore
fatma.breakThings(); // ~> poker face
console.log(fatma.getAge()); // ~> 14 // getter
console.log(fatma.setAge(15)); // ~> 15 // setter
console.log(fatma.getAge()); // ~> 15 // getter


// Conversion & Iteration

// for...in... loop 
// loops trough an object
// available for objects and arrays
const object = {a: 1, b: 2, c: 3};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
};
// expected output: 
// a: 1
// b: 2
// c: 3
let sum = 0;
for (const key in object) {
  sum += object[key];
}

console.log(sum); // ~> 6

// how many keys???? in an object
let count = 0;
for(const something in object) {
  count++;
}

console.log(count);
const array = Object.keys(object);
console.log(array); // ~> [ 'a', 'b', 'c' ]
// also arrays can use this

let string = '';
for(const index in array) { // always go over the full object/array from beginning to the end
  string += array[index];
}

console.log(string); // ~> abc

// also strings can use this 
for(const i in string) {
  console.log('hello: ' + string.charAt(i));
}

// always replacable by for...in !
// for(let i=0; i < array.length; i++) {}

