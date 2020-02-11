// The javascript  create 2 things for you the `global object` and `this`
// In the global lvl this reference to the global object(window in the case of browsers)
// Global = not inside a function

// var a = 'Hello world!'

// function b(){
  
// }

// =============================================== 10 =============================================== \\
// The executional context : creation and hoisting
// Hoisting : setup memory space for variables and functions;

//b(); // console log 'Called b!'
//console.log(a); // return undefined

// var a = 'Hello world!'

// function b(){
//   console.log('Called b!');
// }

//b(); // console log 'Called b!'
//console.log(a); // console.log 'Hello world!'
// =============================================== ** =============================================== \\

// =============================================== 11 =============================================== \\

// JavaScript and undefined 
// undefined is a special keyword that js gives to an empty variables
//var a; // setting/saving 'a' to memory
//console.log(a); // ¬> returns undefined
// a = 10; // returns 'A is defined'
// if(a === undefined) {
//   console.log('A is not defined');
// } else {
//   console.log('A is defined');
// }

// is not defined != undefined !!!!!!
// =============================================== ** =============================================== \\

// =============================================== 12 =============================================== \\
//The execution context: code execution
//Executing the code line by line

// function b() {
//   console.log('Called b!')
// }

//b(); // 'Called b!'

//console.log(a); // undefined

// var a = 'Hello World!';

//console.log(a); // 'Hello World!'
// =============================================== ** =============================================== \\

// =============================================== 13 =============================================== \\
// Single threaded synchronous execution
// Single threaded: one command at a time.
// Synchronous: one at a time.And in order.
// =============================================== ** =============================================== \\

// =============================================== 14 =============================================== \\
// Function Invocation and The execution stack
// Invocation: running a function

// 1 - a global execution context is created. And create the variable this which is refered to the global object

// 2 - creates a memory space for the functions

// 3 - Call function a() and create new execution context and its placed on the execution stack.( one of top of the other)
// Everyone on top is the one that currently running
// any time you execute or invoce a function in java script a new execution context is created and put on the execution stack
// it will has his own space for variables and functions it will go throug the create face and then will execute line by line the code
// within the function. If there is another function it will stop and create another execution context.
// 4 - Call b() and when it finished it will pop out of the stack and a() and back to global
// 
// function a() { // 2
//   b(); //3 
//   var c; // 6 
// }

// function b() { // 4 
//   var d; // 5
// }

// a(); // 1
 
// var d; // 7 

// =============================================== 15 =============================================== \\



