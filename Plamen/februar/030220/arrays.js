//========================================= Arrays 

// array of numbers
const myArray = [1, 2, 3]; 
console.log(myArray[0]); // ¬> 1
console.log(myArray); // ¬> [1, 2, 3]
console.log(typeof(myArray)); // ¬> object
console.log(myArray.length); // ¬> 3

// array of strings
const stringArray = ['hello', 'world', 'good', 'morning'];
console.log(typeof(stringArray)); // ¬> object
console.log(stringArray.length); // ¬> 4

// array of booleans

const boolArray = [true, false, true, false, false];
console.log(typeof(boolArray)); // ¬> object
console.log(boolArray.length); // ¬> 5

// mixed array 

const mixedArray = [123, 'hello world', true];
console.log(typeof(mixedArray)); // ¬> object
console.log(mixedArray.length); // ¬> 3 
console.log(mixedArray);

// Assigning array literals
//const <array name> = [<value1>, <value2>, <value3> ....]

// Accessing an array:
// <array name>[0...n]

console.log(boolArray[boolArray.length -1]); // access the last element of an array

// Change items on an array

console.log(mixedArray);
mixedArray[0] = 321;
console.log(mixedArray);

// we cant reassign the value of a const value but we can change the items inside an a array
// mixedArray = [1, 2, 3] not working because of const

console.log(mixedArray);
mixedArray[mixedArray - 1] = false;
console.log(mixedArray);

// Arrays: The JavaScript Array object is a global object 
// that is used in the construction of arrays; which are high-level, list-like objects.

// Empty array

const emptyArray = []; // create an empty array
console.log(emptyArray);

// all the class names

// check if an value exist and in what position
console.log(emptyArray.indexOf('Plamen')); // ¬> -1

// ADDING ITEMS TO AN ARRAY

emptyArray.push('Plamen');
console.log(emptyArray);

emptyArray.push('Julia');
console.log(emptyArray);

console.log(emptyArray.length) // ¬> 2
emptyArray[2] = 'Balasz'; // unrecommended (you have to know how long your array is ...)
console.log(emptyArray);

console.log(emptyArray);
emptyArray.push('Julian', 'Joao', 'Bianca'); // recommended
console.log(emptyArray);

console.log(emptyArray.length) // ¬> 6
emptyArray[10] = 'Bendis'; // add 'Bendis' on 10th place in the array
console.log(emptyArray.length) // ¬> 11. Even the empty items take space in the array
console.log(emptyArray); // create a empty space in the array ! NOT GOOD ! 4 empty items

// unshift() method adds one or more item at the beginning of an array

const classArray = ['Plamen', 'Julien', 'Julia'];
classArray.push('Balasz', 'Joao');
console.log(classArray.length); // ¬> 5
classArray.unshift('Bendis', 'Bianca'); // unshift adds at the beginning
console.log(classArray);


// REMOVING FROM AN ARRAY

// pop() - remove the last element in an array

classArray.pop(); // removes the last one
console.log(classArray);

classArray.pop();
console.log(classArray);

// shift() - remove the first element in an array

classArray.shift();
console.log(classArray);

classArray.shift();
console.log(classArray);



