// const blue = "#00f";
// const orange = "#f60";


// const colors = {
//   yellow: '#ff0',
//   blue,
//   orange,
// }

// console.log(colors.yellow);

// Challenge: 
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

// const bar = "Elinor";
// const cafe = "Fashion";
// const restaurant = "Alafrangite";

// const favoritePlaces = {
//   bar,
//   cafe,
//   restaurant,
//   greeting() {
//     console.log("Hello, from the object")
//   }
// }

// favoritePlaces.greeting();
// console.log(favoritePlaces.restaurant);


// =============================================================================================================
/*
  undefined, null, boolean, number, string, symbol
*/
const color = 'green';
const hexCode = '#0f0';

const colors = {
  'yellow Color': '#ff0',
  blue: "#ff0",
  orange: "#f60",
  addColor(color, hexCode) {
    colors[color] = hexCode;
  }
};


colors.addColor(color, hexCode);
console.log(colors);
// colors.red = '#foo';

// colors.red = 'f00';

// console.log(colors['yellow Color']);


// function getColor(key) {
//   return colors[key];
// };
// console.log(getColor("blue"));