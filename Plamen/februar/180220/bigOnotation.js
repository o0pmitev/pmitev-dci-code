// //Big O notation
// // https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/

// //O(1) <= best case scenario
// // Big 'O' notation = 0(1)
// function isFirstElementNull(arr) {
//   return arr[0] === null; // one statement it will run the same time no matter how long the array(input) is
// }

// //O(N)
// // Big 'O' notation = O(N) <== worst case scenario if the value is in the last array item or not there at all, it will
// // run as long as the length of the array = N;

// function containsValue(arr, value) {
//   for(element in arr) {
//     if(element === value) {
//       return true; // return the first element witch is true
//     }
//   }
//   return false;
// }

// // Big 'O' notation = O(N²) // maximum run time would be the length of the array to the power of two

// function containsDuplicates(arr) {
//   for(var outer =0; over < arr.length; outer ++) {
//     for (var inner = 0; inner < arr.length; inner++) {
//       // Don't compare with self
//       if(outer === inner) {
//         continue;
//       }
//       if(arr[outer] === arr[inner]) {
//         return true;
//       }
//     }
//   }
// }


// // Big O Notation = O(2**N) //  Worst of the worst case scenarios !!!
// function fibonnaci(number) {
//   if(number <= 1) {
//     return number;
//   }
//   return fibonacci(number -2) + fibonacci(number -1);
// }

// Sorting Algorithms

// Quicksort
// Bubble sort
// Dijkstra's algorithm -> shortest path between two elements
// SpiderMonkey -> for testing


// Array.prototype.sort() - higher order function we can put a function inside

const months = ["March", "Jan", "Jan", "March"];
months.sort();
console.log(months); // ~> [ 'Jan', 'Jan', 'March', 'March' ]

const array1 = [1, 30, 21, 1000];
array1.sort();
console.log(array1); // ~> [ 1, 1000, 21, 30 ]

function sortNumbers(firstEl, secondEl) {
  return firstEl - secondEl;
}

console.log(array1.sort(sortNumbers));

// If sortNumbers(a, b) is less than zero, b is given a lower index than a.
// If sortNumber(a, b) return zero, the order of a and b is unchanged.
// If sortNumbers(a, b) is greater than zero, b is given a higher index than a.

