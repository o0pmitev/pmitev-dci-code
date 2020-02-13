// MAGIC ARRAY METHODS
console.log("========== ******************* MAGIC ARRAY METHODS ******************* ==========")

// Higher order functions
// ~> recursive
// ~>function  that return another function
// callback function
console.log("========== callbacks ==========")

function greeting(name) {
  console.log("Hello " + name);
}

function processUserInput(callback, name) {
  if (typeof (name) === 'string') { // check if its really a string
    let myName = name.trim(); // remove whitespace from beginning to end

    callback(myName);
  } else {
    console.log('Please provide valid input!');
  }
}

processUserInput(greeting, "Plamen"); // call the callback after execution
processUserInput(greeting, 23);

// For each loop
console.log("========== arrays ==========")

const array1 = ['a', 'b', 'c'];

array1.forEach(item => console.log(item));

// expected output: "a"
// expected output: "b"
// expected output: "c"
console.log("========== objects ==========")
const obj1 = {
  1: "a",
  2: "b",
  3: "c"
};

// object1.forEach(item => console.log(item)); //forEach() not a object function !
for (key in obj1) {
  console.log(obj1[key]);
};



// second example
console.log("========== second example ==========")

const arraySpace = [1, 3, , 7, , 8]; // jumps over the empty values(undefined)
let numCallbackRuns = 0;

arraySpace.forEach(function (element) {
  console.log(element);
  numCallbackRuns++;
});

console.log(` numCallbackRuns: ${numCallbackRuns}`); // 4 times only 

// forEach() 

// void means it returns nothing
// third example
console.log("========== third example ==========")

const items = ["item1", "item2", "item3", "item4", , ];
const copy = [];
const copy2 = [];
console.log(items);


// normal for loop
for (let i = 0; i < items.length; i++) {
  copy.push(items[i]);
};

console.log(copy);

// for each loop
items.forEach(function (item) { // for each only make sense if we need to do something with the items
  copy2.push(item); // eliminate the undefined/empty
});

console.log(copy2);

// Convert arrays to different arrays
console.log("========== Convert arrays to different arrays ==========")
// MAP function from [] to []

const arrayMap = [1, 2, 3, ,]; // not as smart as for each! it wont skip the empty/undefined item
const map1 = arrayMap.map(x => x *2); // need to save the return // doubles the numbers
console.log(map1); 

// bigger function
console.log("========== bigger function ==========")

let numbersMap = [1, 4, 9];
let roots = numbersMap.map(function (num) {
  return Math.sqrt(num);
});
console.log(roots);

let shorterRoot = numbersMap.map(num => Math.sqrt(num));
console.log(shorterRoot);


// CONVERTING  AN ARRAY TO SINGLE VALUE (SIMPLE DATA TYPE)
// .reduce()
console.log("========== .reduce() ==========")

// REDUCER METHOD

const arrayReducer = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

const sumOfNumbers = arrayReducer.reduce((a, b) => a+b); // a = previousValue; b = currentValue

const myFunction = (a, b) => a + b; // save function to variable
const sumFunction  = arrayReducer.reduce(myFunction); // give this function (to the .reduce()) as argument
console.log(sumOfNumbers);
console.log(sumFunction);


// .filter()
console.log("========== .filter() ============")


// GETTING A SUBSET OF AN ARRAY 
console.log("========== SUBSET OF AN ARRAY  ============")

const ages = [1, 2, 20, 33, , ] // skipped the undefined value because dose not met the condition
const over18 = ages.filter(item => item > 10);
console.log(over18);

const allKindOfNumber = [1,2,3,4,5,6,7,8];
const even = allKindOfNumber.filter(item => item % 2 === 0);
console.log(even);

const odd = allKindOfNumber.filter(item => item % 2);
console.log(odd)
