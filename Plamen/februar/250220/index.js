// map
let oldArray = [1, 2, 3]
const newArray = oldArray.map(function (value) {
  return value * 2;
});

console.log(newArray);

// filter 
let newArrayFilter = oldArray.filter(function (value) {
  return value % 2; // condition, not value return
})

console.log(newArrayFilter);

let arrayOfObjects = [{
    fullName: "Plamen",
    courseHasTaken: "Ruby Course",
    levelOfSatisfaction: 100
  },
  {
    fullName: "Julia",
    courseHasTaken: "JS Course",
    levelOfSatisfaction: 100
  },
  {
    fullName: "Nicolo",
    courseHasTaken: "PHP Course",
    levelOfSatisfaction: 77
  },
  {
    fullName: "Julien",
    courseHasTaken: "JS Course",
    levelOfSatisfaction: 25
  },
  {
    fullName: "Joao",
    courseHasTaken: "PHP Course",
    levelOfSatisfaction: 25
  },
  {
    fullName: "Balasz",
    courseHasTaken: "PHP Course",
    levelOfSatisfaction: 40
  },
  {
    fullName: "Nicolo",
    courseHasTaken: "PHP Course",
    levelOfSatisfaction: 77
  },
  {
    fullName: "Mitev",
    courseHasTaken: "JS Course",
    levelOfSatisfaction: 20
  },
  {
    fullName: "Ventsislavov",
    courseHasTaken: "PHP Course",
    levelOfSatisfaction: 100
  },
  {
    fullName: "Stefan",
    courseHasTaken: "Ruby Course",
    levelOfSatisfaction: 77
  }
]
console.log(arrayOfObjects);

//For every object add a new property 
//that is going to be a string and it's value  depends on levelOfSatifaction value.

const newArrayOfObjects = arrayOfObjects.map(function (object) {
  if (object.levelOfSatisfaction > 80) {
    object.stateOfHappy = "Found the course perfect";
  } else if (object.levelOfSatisfaction > 50) {
    object.stateOfHappy = "Content overall";
  } else if (object.levelOfSatisfaction <= 50) {
    object.stateOfHappy = "Customer is complaining, potential refund is going to be asked";
  }
  return object;
})
console.log(newArrayOfObjects);

//After that, calculate the average satisfaction level per course.
// Store the results for each into an array 
// and print the title of the course that has the biggest average of the three courses. 

function average(arrayOfObjects) {
  let resultJS = [];
  let resultPHP = [];
  let resultRuby = [];

  arrayOfObjects.forEach(item => {
    if (item.courseHasTaken === "PHP Course") {
      resultPHP.push(item.levelOfSatisfaction);
    } else if (item.courseHasTaken === "Ruby Course") {
      resultRuby.push(item.levelOfSatisfaction);
    } else if (item.courseHasTaken === "JS Course") {
      resultJS.push(item.levelOfSatisfaction);
    }
  });


  const sum = (previous, current) => previous + current;
  const sumJS = resultJS.reduce(sum);
  const sumRuby = resultJS.reduce(sum);
  const sumPHP = resultJS.reduce(sum);

  const averageJS = {
    name: "JavaScript Course",
    average: (sumJS / resultJS.length).toFixed(2)
  };
  const averageRuby = {
    name: "Ruby Course",
    average: (sumRuby / resultRuby.length).toFixed(2)
  };
  const averagePHP = {
    name: "PHP Course",
    average: (sumPHP / resultPHP.length).toFixed(2)
  };

  let average = [];
  average.push(averageJS, averagePHP, averageRuby);

  // average = average.sort();
  let highestCourse = average.reduce((previous, current) => {
    if(previous.average > current.average) {
      return previous;
    } else {
      return current;
    }
  }, {});

  console.log(highestCourse);
  console.log(`${highestCourse.name} was the highest: ${highestCourse.average}`);
}

average(arrayOfObjects);
