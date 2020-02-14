// =============================================== 6 =============================================== \\

// SyntaxParser
//1.Syntax parsers - a program that reads your code and determines what it does and if its grammar is valid! A compiler!


//2.Lexical environments - where something sits physically in the code you write.

//3.Execution context - a wrapper to help manage the code that is running.

// =============================================== 7 =============================================== \\
// Name/Value Pairs and Objects
// Name/Value Pairs: a name which maps to a unique value! The name may be defined more than once, but only can have one value in any given context. That value may be more name/value pairs.
//

// Object : is a collection of a name value pairs.

// =============================================== 9 =============================================== \\
// The Global Environment and The Global Object

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

//Functions, Context, and Variable Environments
// variable environment: where the variables live and how they 
// relate to each other in memory.

// function b() { // 6 
//   let myVar; // Third // 71
//   console.log(myVar) ; // ~> undefined
// }

// function a() { // 3
//   let myVar = 2; // Secont // 4
//   console.log(myVar); // ~> 2
//   b(); // Create an second execution context when called // 5
// }

// let myVar = 1; // First 1 
// console.log(myVar);// ~> 1
// a(); // Create an execution context  when called 2
// console.log(myVar); // ~> 1

// =============================================== 16 =============================================== \\
// The Scope chain

// function b() {
//   console.log(myVar); // ~> 1; // uses myVar which is declared on the global level
// }

// function a() {
//   let myVar = 2;
//   b();
// };

// let myVar = 1; // global level 
// a(); // ~> returns 1;
 
//----------------------------------------------------------------------------------------------------

// function a() {
//   function b() {
//     console.log(myVar); // ~> 2; // uses myVar in the function`s a execution context
//   }
//   let myVar = 2;
//   b();
// };

// let myVar = 1; // global level 
// a(); // ~> returns 1;
 
// =============================================== 17 =============================================== \\
// Scope, ES6, and let
// Scope is where A Variable is Available in your code.And if it's truly the same variable, or a new
// copy

// let - create a block scoped variable

// =============================================== 18 =============================================== \\
// What about Asynchronous Callbacks?
// Asynchronous: more than one at a time

// long running function
// function waitThreeSeconds () {
//   let ms = 3000 + new Date().getTime();
//   while(new Date < ms) {  }
//     console.log('finished function');
// }

// function clickHandler() {
//   console.log('click event!');
// }

// // listen for the click event
// document.addEventListener('click', clickHandler);

// waitThreeSeconds();
// console.log("finished execution");