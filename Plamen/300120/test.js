// **2. Cubed.**
// Create a function that takes in three numbers and returns the sum of its cubes.
// Examples:
// * sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes(2) ➞ 8
// * sumOfCubes() ➞ 0

let first = 1;
let second = 5;
let third = 9;

console.log(Math.pow(first, 3) + Math.pow(second, 3) + Math.pow(third, 3));


// not recursive
const sumOfCubes = (first = 0 , second = 0, third = 0) => {
  return Math.pow(first, 3) + Math.pow(second, 3) + Math.pow(third, 3);

} 

console.log(sumOfCubes(1, 5, 9));
console.log(sumOfCubes(2));
console.log(sumOfCubes())

// recursion 
// const sumOfCubes = (first = 0 , second = 0, third = 0) => {
const sumOfCubes = (...args) => {
  let i = 0;
  if(i < args.length) {

  } else {
    return 0;
  }
}
