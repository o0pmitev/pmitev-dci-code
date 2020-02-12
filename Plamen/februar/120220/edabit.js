//1.Check if One Array can be Nested in Another
//Create a function that returns true if the first array can be nested inside the second.
// arr1 can be nested inside arr2 if:
//1.arr1's min is greater than arr2's min.
//2.arr1's max is less than arr2's max.


function canNest(arr1, arr2) {
	if(Math.min(...arr1) > Math.min(...arr2)) {
    return true;
  } else {
    return false;
  }
}

console.log(canNest([1, 2, 3, 4], [0, 6])); // true
console.log(canNest([3, 1], [4, 0])); // true
console.log(canNest([2, 3, 4], [3, 6])); // false
console.log(canNest([9, 9, 8], [8, 9])); // false
console.log(canNest([1, 2, 3, 4], [2, 3]));// false

//2. Find the Largest Numbers in a Group of Arrays
// Create a function that takes an array of arrays with numbers. Return a new (single) 
//array with the largest numbers of each.

function findLargestNums(arr) {
  let newArr = [];
	for(num in arr) {
    newArr.push(Math.max(...arr[num]));
  }
  return newArr;
}

console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));
console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]));
console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]));