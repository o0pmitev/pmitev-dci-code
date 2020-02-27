// Groceries Nesting exercise

/*
Your wife / your husband has left urgently for work this morning and has 
left you the list for the grocery items that you should pick from the supermarket 
for the week. Because he/she was in a rush meshed it up and you ended up with 2 lists. 
*/

//Store these lists in 2 different arrays:
// The first list contains the names of the groceries.

const groceries = ["chocolate", "bananas", "rice", "beer", "deodorant"];

// And the second one the amount of every corresponding items you should buy.

const amount = [5, 5, 2, 6, 1];

// Then find a way to create a pair for every index (ex. ['chocolate', 5] and store this into an empty array.

const result = [];

const combineTwo = (arr1, arr2) => {
  for (index in arr1) {
    result.push([arr1[index], arr2[index]]);
  }
  return result;
};

let combinedArray = combineTwo(groceries, amount);
console.log(combinedArray);

// In the end find a way to print 5 times a message to the console that says:
//FOR...OF
console.log("==== with for... of ====\n")
for (value of combinedArray) {
  console.log(`Please by ${value[1]}x ${value[0]}`)
}

// REDUCE
console.log("===== With reduce ====\n")
//============================================================
// const printList = arr => {
//   return arr.reduce((acc, value) => {
//     return `${acc}Please by X${value[1]} ${value[0]} \n`
//   }, "");
// }
//============================================================
const printList = arr => arr.reduce((acc, value) => `${acc}Please by ${value[1]}x ${value[0]}\n`, "");


console.log(printList(combinedArray));

// forEach() <- !!!!! 
//============================================================
console.log("===== forEach() ====\n")

combinedArray.forEach(array => {
  console.log(`Please by ${array[1]}x ${array[0]}`);
})
