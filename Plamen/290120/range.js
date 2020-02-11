// function rangeOfNumbers(startNum, endNum) {
//     var numbers = [];

//     for (var i = startNum; i <= endNum; i++) {
//       numbers.push(i);
//     }
//     return numbers;
//   }

//console.log(rangeOfNumbers(2,5));

// function rangeOfNumbers2(startNum, endNum) {
//     let numbers = [];
//     if (startNum === endNum) {

//         return numbers;
//     } else {


//         numbers.push[startNum];

//         return numbers.concat(rangeOfNumbers2(startNum + 1, endNum));

//     }
// }

// console.log(rangeOfNumbers2(2, 5));


function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return startNum;
    } else {
        console.log(startNum);
        return rangeOfNumbers(startNum + 1, endNum);
    }
}

console.log(rangeOfNumbers(2, 2));
console.log(rangeOfNumbers(2, 6));