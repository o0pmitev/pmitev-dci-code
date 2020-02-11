const object = {
  hello: 'world'
}
console.log(object);

Object.seal(object);
object.hello = 'earth';
console.log(object);

// not possible to delete
delete object.hello;
console.log(object);

//not possible to add
object.world = 'hello';
console.log(object);

console.log(Object.isFrozen(object)); // false
console.log(Object.isSealed(object)); // true


// Clones and Reference 

// clones is a copy of the original
// reference is like a pointer to the original, path, arrow, 

// Simple data type:
    // String   \
    // Number    = they are clones
    // Booleans /


// Objects are always references by default
const oldObject = { // reference by default 
  winter: 'coming',
  spring: 'nice',
  summer: 'hot',
  autumn: 'orange'
}

Object.seal(oldObject); // stop only from adding, and deleting key/values
Object.freeze(oldObject); // stop from any changes

const newObject = oldObject; // link to the old reference

console.log(newObject);

newObject.spring = 'bunny'; // change the oldObject spring value as well because its a reference 
console.log(newObject);
console.log(oldObject); // unwanted side effect


const thirdObject = newObject;

thirdObject.autumn = 'false';
console.log(thirdObject); // no mather how many times you refer to the object 
console.log(newObject);// unwanted side effect
console.log(oldObject);// unwanted side effect

// Shallow cloning object and arrays
// ... <- the spread operator
// Shallow cloning objects and arrays
const numbers = [1, 2, 3, 4]
console.log(...numbers); // iterate trough the array

let objClone = {...oldObject}; // this change is only on the new object
console.log(objClone);

objClone.summer = " I am different";
console.log(objClone);
console.log(oldObject);

const arrayClone = [...numbers]; // makes a real clone of hte array
arrayClone[0] = 5; // this changes only the new array
console.log(arrayClone);
console.log(numbers);

// Deep cloning objects and arrays : recursive function


