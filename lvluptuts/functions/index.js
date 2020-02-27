document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;


// Function Declaration
// Hoisted

// function sayHi() {
//   return console.log("hi");
// }


// Function Expression
// Anon, not named
// Not hoisting 
// Passed around or used

// const sayHi = function() {
//   return console.log("hi");
// };

// named function
// const sayHi = function sayHi() {
//   return console.log("hi");
// }


// const sayHi = () => {
//   return console.log("hi");
// }
// const sayHi = () => (console.log("hi"));

const sayHi = () => console.log("hi");


sayHi();

