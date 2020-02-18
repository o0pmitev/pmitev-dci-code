// Classes

class Cat { // template
  // define our class in details
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  // Prototypes Method
  eat() {
    console.log('Poop!');
  }

  sleep() {
    console.log('Snore!')
  }
}

const fatma = new Cat('fatma', 14, 4); // make an instance of the class

console.log(typeof(fatma)); // object
console.log(fatma); // Cat {}
console.log(typeof(Cat)); // function
fatma.eat();
fatma.sleep();



// const myDate = new Date();
// console.log(myDate);

// console.log(myDate.getFullYear());
// console.log(myDate.getMinutes());

