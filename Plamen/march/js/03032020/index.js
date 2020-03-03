// const myDices = (dice1, dice2)  => {
//   let arr1 = [...Array(dice1 + 1).keys()];
//   arr1.shift();
//   console.log(arr1);

//   let arr2 = [...Array(dice2 + 1).keys()];
//   arr2.shift();
//   console.log(arr2);
// }

// myDices(6,6);
// myDices(6, 4);
// myDices(12, 20);

const myDices = (num1, num2) => {
  let sum = [];
  for (let i = 1; i <= num1; i++) {
      for (let j = 1; j <= num2; j++) {
          sum.push([i + j]);
      }
  }
  let calc = sum.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
  let values = Object.values(calc);
  let biggestNumber =  Math.max(...values);

  
  // console.log(strKey);
  // console.log(calc[strKey])
  // console.log(biggestNumber);
   console.log(calc) ;
  function smallNum (num1, num2){
    if(num1 > num2) {
     let smallNum = num2;
     return smallNum;
    } else {
       smallNum = num1;
      return smallNum;
    }
  }
 smallNum = smallNum(num1, num2);

  console.log(smallNum);
  
   let newValues = [];

   newValues.push(Object.keys(calc).find(key => calc[key] === biggestNumber)) 
   return newValues;
};


console.log(myDices(6, 6));
console.log(myDices(6, 4));
console.log(myDices(12, 20));