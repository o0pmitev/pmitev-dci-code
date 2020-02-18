// Transformers
const transformers = [
  {
    name: 'Optimus Prime',
    form: 'Freightliner Truck',
    team: 'Autobot'
  },
  {
    name: 'Megatron',
    form: 'Gun',
    team: 'Decepticon'
  },
  {
    name: 'Bumblebee',
    form: 'VW Beetle',
    team: 'Autobot'
  },
  {
    name: 'Soundwave',
    form: 'Walkman',
    team: 'Decepticon'
  }
];

// .map()

// normal function with a name 
function getForm(transformer) {
  return transformer.form;
}

const robotsInDisguise = transformers.map(getForm);
console.log(robotsInDisguise);

// Longer version
const allTheForms = transformers.map(function(object) {
  return object.form;
});

// shorter version
const allTheForms2 = transformers.map((object) => {
  return object['form'];
});

// shortest version
console.log(transformers.map(item => item["form"])); // bracket notation 
console.log(transformers.map(item => item.form)); // dot notation

console.log(allTheForms); 
console.log(allTheForms2); 


// reduce

function countAutobot(previous, transformer) {
  if(transformer["team"] === "Autobot") {
    return previous + 1;
  } else {
    return previous;
  }
}

const countAutobots = transformers.reduce(countAutobot, 0);
console.log(countAutobots);

// put all the names in one string
// usecae? only one first 

function assembleString(previous, transformer) {
  console.log(previous);
  console.log(transformer);
  return previous + ' ' + transformer.name;
}

const assembleStrings = transformers.reduce(assembleString, ' ');
console.log(assembleStrings);