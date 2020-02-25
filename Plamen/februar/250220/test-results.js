const goodScore = [67, 82, 91, 96, 54];
const badScore = [46, 48, 24, 33, 30];

// Find a way to unite these 2 arrays into one.
console.log("=== Find a way to unite these 2 arrays into one. ===\n");
//-----------------------------------------------------------------------------------

const newArr = [...goodScore, ...badScore];
console.log(`${newArr} \n`);

// Calculate the average of  this unified array. 
console.log('=== Calculate the average of  this unified array. ===\n');
//-----------------------------------------------------------------------------------

const calculateTheAverage = arr => {
  let average = arr.reduce((acc, val) => {
    return (val + acc);
  })
  return (average / arr.length).toFixed(2);
}
console.log(`${calculateTheAverage(newArr)} \n`);
const averageArray1 = calculateTheAverage(newArr);

// Add a new element score (an 11th) to the new unified  array
console.log('=== Add a new element score (an 11th) to the new unified  array ===\n');
//-----------------------------------------------------------------------------------

newArr.push(50);
const newArray1 = newArr;
console.log(`${newArr} \n`);
const averageArray2 = calculateTheAverage(newArr);

// recalculate the average again.
console.log('=== Recalculate the average again. ===\n');
//-----------------------------------------------------------------------------------

console.log(`${averageArray2} \n`);



// Compare if the average has moved up, down and by what margin?
console.log('=== Compare if the average has moved up, down and by what margin? ===\n');
//-----------------------------------------------------------------------------------

const averageDifference = (averageArray1 - averageArray2).toFixed(2);
console.log(`The average difference is: ${averageDifference} \n`);

// In the end try to find the best score in the class and print it to the console.
console.log('=== In the end try to find the best score in the class and print it to the console. ===\n');
//-----------------------------------------------------------------------------------

console.log(`The Biggest Score is: ${Math.max(...newArr)} \n`);