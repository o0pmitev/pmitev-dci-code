// Destructuring
let a, b, rest; // declaring variables
[a, b] = [10, 20]; // assigning values to the variables

console.log(a);
// expected 10;

console.log(b);
// expected 20;

[a,b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // leftovers
// expected [30, 40, 50]

// [...rest, a, b] = [10, 20, 30, 40, 50]; // Throws an error not possible the Rest element(...rest) must be last element

let x, y;
({x, y} = { x:{inside: 10}, y:20});

console.log(x);
console.log(y);


const object = {
  name: "Plamen",
  job: "Web Developer",
  age: 30,
  married: true
};

let name, job, age, married; // must be same as the keys
({name, job, age, married} = object); // Destructuring
// name = object.name
// job = object.job
// age = object.age
// married = object.married

console.log(name);
console.log(job);
console.log(age);
console.log(married);

object2 = {
  name: "Plamen",
  age: 30,
  cats: 0
}

const sayHello = (object) => { //const sayHello = (bla) => {
  let name, age, cats;
  ({name, age, cats} = object) //   ({name, age, cats} = bla)
  return(`Hello ${name}, how are you? You are ${age} years old and have ${cats} number of cats.`)
};
console.log(sayHello(object2));

// Shorter
// Super practical for function parameters = object destructuring
const sayHello2 = ({name, age, cats}) => {
  return `Hello ${name}, how are you? You are ${age} years old and have ${cats} number of cats.`
};
console.log(sayHello2(object2));

// Shortest
const sayHello3 = ({name, age, cats}) => `Hello ${name}, how are you? You are ${age} years old and have ${cats} number of cats.`;
console.log(sayHello3(object2));
