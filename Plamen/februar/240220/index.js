// 1. Compilation errors
// 2. Logical errors
// 3. Runtime errors

// 1. Logical errors - think about edge cases / corner cases

function compareArrays(arr1, arr2) {
  if (arr1.toString() === arr2.toString()) {
    return true;
  } else {
    return false;
  }
}

console.log(compareArrays([1, 2, 3], [1, 2, 3]));
console.log(compareArrays([1, 2, 3], [3, 2, 1]));
console.log(compareArrays());
// Write test 

// 1-st test - best case scenario [1, 2, 3] [1, 2, 3]
// 2 test - worse case scenario [1, 2 , 3] [3, 2 , 1]
// 3 no input test - 