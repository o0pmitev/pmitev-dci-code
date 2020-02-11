// 1.Reverse an Array
//Write a function to reverse an array.

console.log("------------------- 1.Reverse an Array -------------------");

function reverse(arr) {
	return arr.reverse();
}

console.log(reverse([1, 2, 3, 4]) );
console.log(reverse([9, 9, 2, 3, 4]));
console.log(reverse([]));

//2.Return the Last Element in an Array
//Create a function that accepts an array and returns the last item in the array.
console.log("------------------- 2.Return the Last Element in an Array -------------------");


function getLastItem(arr) {
	return arr.pop();
}

console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));

//3.Find the Index (Part 1)
//Create a function that finds the index of a given item.

console.log("------------------- 3.Find the Index (Part 1) -------------------");

function search(arr, item) {
	return arr.indexOf(item);
}

console.log(search([1, 5, 3], 5));
console.log(search([1, 5, 3], 5));
console.log(search([1, 2, 3], 4));

//4.Check if an Array Contains a Given Number
//Write a function to check if an array contains a particular number.
console.log("------------------- 4.Check if an Array Contains a Given Number -------------------");

function check(arr, el) {
 	if(arr.indexOf(el) !== -1) {
    return true;
  } 
  return false;
}

console.log(check([1, 2, 3, 4, 5], 3));
console.log(check([1, 1, 2, 1, 1], 3));
console.log(check([5, 5, 5, 6], 5));
console.log(check([], 5));


//5.Convert Number to Corresponding Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example,
// if you're given 3 as input, your function should return "March", because March is the 3rd month.
console.log("------------------- 5.Convert Number to Corresponding Month Name -------------------");

function monthName(num) {
	let months = ["0", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  return months[num];
}

console.log(monthName(3));
console.log(monthName(12));
console.log(monthName(6));

//6.Negate the Array of Numbers
// Given an array of numbers, negate all elements contained within.
// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.


console.log("------------------- 6.Negate the Array of Numbers -------------------");
function negate(arr) {
  let newArr = [];
	arr.forEach(element => {
    newArr.push(-+element); 
  }) ;
  return newArr;
}

console.log(negate([1, 2, 3, 4]));
console.log(negate([-1, 2, -3, 4]));
console.log(negate([]));

//7. Difference of Max and Min Numbers in Array
// Create a function that takes an array and returns the difference between the 
// biggest and smallest numbers.
console.log("------------------- 7.Difference of Max and Min Numbers in Array -------------------");

function diffMaxMin(arr) {
  let maxNum = (Math.max(...arr)); // using the spread operator
  let minNum = (Math.min(...arr));
  return maxNum - minNum;
}

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));
console.log(diffMaxMin([44, 32, 86, 19]));

//8.Filter out Strings from an Array
//Create a function which filters out strings 
//from an array and returns a new array containing only integers.
console.log("------------------- 8.Filter out Strings from an Array -------------------");

// function filterList(l) {
//   let newArr = [];
//   for( let i = 0; i < l.length; i++) {
//     console.log(l[i])
//   }
// }

// filterList([1, 2, 3, "x", "y", 10])