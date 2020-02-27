class AllSpecies {

  constructor(species, numOfEyes, numOfLegs, hasTail){
    this.species = species;
    this.numOfEyes = numOfEyes;
    this.numOfLegs = numOfLegs;
    this.hasTail = hasTail;
  }

}

class Tiger extends AllSpecies {
  constructor(colorFur, eyeColor, region, eatMeat, name, age, height, length, gender) {
    super('Tiger', 2, 4, true);
    this.colorFur = colorFur;
    this.eyeColor = eyeColor;
    this.region = region;
    this.eatMeat = eatMeat;

    this.name = name;
    this.age = age;
    this.height = height;
    this.length = length;
    this.gender = gender;

    this.printColorFur = function () {
      return this.colorFur;
    }
  }
  roar = function() {
    return " I am the best tiger, i make ROOOOARRR!!!"
  }

}

class SiberianTiger extends Tiger {
  constructor() {
    super('Black-White', 'blue', 'Siberia', false, ...arguments);
    // this.name = name;
    // this.age = age;
    // this.height = height;
    // this.length = length;
    // this.gender = gender;
  }
}

class BengalTiger extends Tiger {
  constructor(name, age, height, length, gender) {
    super('Orange-black', 'brown', 'India', true, name, age, height, length, gender);
    // this.name = name;
    // this.age = age;
    // this.height = height;
    // this.length = length;
    // this.gender = gender;
  }
}


const bengalTiger1 = new BengalTiger("Richard Parker", 15, 82, 226, "male");
const siberianTiger1 = new SiberianTiger("The Nights King", 990, 88, 204, "White Walker");

console.log(bengalTiger1);
console.log(siberianTiger1);

console.log(bengalTiger1.roar());
console.log(bengalTiger1.printColorFur());

console.log(siberianTiger1.roar());
console.log(siberianTiger1.printColorFur());


// Object iteration

// for...in
// object iteration over all keys one by one

for(key in siberianTiger1) {
  console.log(key); // print the keys
  console.log(siberianTiger1[key]); // print the values
}

// for...of ARRAY METHOD : iteration over all values one by one => ONLY VALUE

let array = [1, 2, 3];

for(value of array) {
  console.log(value);
}

for(key in array) {
  console.log(key); // print the index of every value in the array
}