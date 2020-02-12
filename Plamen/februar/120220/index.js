// Nesting Arrays + Objects

const array = ["hello", "world"]; // string array 

const nested = [array];
console.log(nested); // ~> [["hello", "world"]]

const object = {
  hello: "world"
}; // string object
// takes the const variable as a key and make its value a value of the new object
const nestedObject = {
  object
};
console.log(nestedObject); // ~> { object: { hello: 'world' } }

const unpackedObject = {
  ...object
};
console.log(unpackedObject);


const days31 = []
for (let i = 1; i < 32; i++) {
  days31.push(i);
};
console.log(days31);

const days30 = []
for (let i = 1; i < 31; i++) {
  days30.push(i);
};
console.log(days30);

const days28 = []
for (let i = 1; i < 29; i++) {
  days28.push(i);
};
console.log(days28);
console.log("--------------------------------------------------")
const year = [];
for (let i = 1; i < 13; i++) {
  // tree cases
  switch (i) {
    case 1:
      year.push(days31);
      break;
    case 2:
      year.push(days28);
      break;
    case 3:
      year.push(days31);
      break;
    case 4:
      year.push(days30);
      break;
    case 5:
      year.push(days31);
      break;
    case 6:
      year.push(days30);
      break;
    case 7:
      year.push(days31);
      break;
    case 8:
      year.push(days31);
      break;
    case 9:
      year.push(days30);
      break;
    case 10:
      year.push(days31);
      break;
    case 11:
      year.push(days30);
      break;
    case 12:
      year.push(days31);
      break;
    default:
      console.log('Not a valid month');
  }
};
console.log(year);
console.log("--------------------------------------------------")

console.log("------------------- Calendar -------------------------------")
//simple version with two nested loops 
const simpleYear = [];
for(let i = 1; i < 13; i++) {
  const currentMonth = [];
  for( let j = 1; j < 32; j++){
    if(i === 2 && j === 29) {
      break;
    } else if (j === 31 && (i === 4 || i === 6 || i === 9 || i === 11)){
      break;
    }
    currentMonth.push(j); // easiness every day has 31 days
  }
  simpleYear.push(currentMonth);
}
console.log(simpleYear);
// My birthday 15th of november
console.log(`My birthday is ${simpleYear[10][14]}`); // array start counting at 0, thats why we need to decrement!
console.log("--------------------------------------------------")

const months = [];
for (let i = 1; i < 13; i++) {
  months.push(i);
};
console.log(months);

console.log("------------------- ObjectCalendar -------------------------------")

const simpleYearObject = {};
for (let month = 1; month < 13; month++) {
  const currentMonth = {};
  for (let day = 1; day < 32; day++) {
    if(month === 2 && day === 29) {
      break;
    } else if (day === 31 && (month === 4 || month === 6 || month === 9 || month === 11)) {
      break;
    }
    currentMonth[day] = day; 
  }
  simpleYearObject[month] = currentMonth;
}
console.log(simpleYearObject);

// my birthday is 15th  of november
console.log("------------------- ObjectCalendarBirthday -------------------------------")

console.log(`My birthday is on ${simpleYearObject[11][15]}`); // 15
// console.log(simpleYearObject["11"]["15"]); // 15
// console.log(simpleYearObject.11.15); // wont work in this case because the keys are a strings


// read.a.program.identifier = chain access to an object with key.innerkey.inneinnerrkey = the property.chain

const read = {
  a: { // first level
    program: { // second level
      identifier: 'value' // third level
      // if there are more levels I would consider it a problem :-)
      // as a rule of thumb: three levels is the maximum!
    }
  }
};

console.log(read.a.program.identifier); // ~> value

// mixed object
console.log('------------mixed object Object with arr -------------------')
const mixedObject = {};
for (let month = 1; month < 13; month++) {
  const currentMonth = [];
  for (let day = 1; day < 32; day++) {
    if(month === 2 && day === 29) {
      break;
    } else if (day === 31 && (month === 4 || month === 6 || month === 9 || month === 11)) {
      break;
    }
    currentMonth.push(day); 
  }
  mixedObject[month] = currentMonth;
}
console.log(mixedObject);

// access to 15 november

// console.log(mixedObject['6'][7]);
console.log(`My birthday is at ${mixedObject[11][14]}`);// access to an array inside of object

console.log('------------mixed object arr of objects -------------------')
const arrayOfObjects = [];
for (let month = 1; month < 13; month++) {
  const currentMonth = {};
  for (let day = 1; day < 32; day++) {
    if(month === 2 && day === 29) {
      break;
    } else if (day === 31 && (month === 4 || month === 6 || month === 9 || month === 11)) {
      break;
    }
    currentMonth[day] = day; 
  }
  arrayOfObjects .push(currentMonth);
}
console.log(arrayOfObjects);

console.log(arrayOfObjects[5][8]);
console.log(arrayOfObjects[5][8]);
console.log(`My birthday is at ${arrayOfObjects[10][15]}`);// 15
