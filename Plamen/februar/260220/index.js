// Extends

class Greek { // Parent class 
  constructor() {
    this.nationality = "Greece";
    this.test = "test";
  }
}

// CLasses 

class Person extends Greek{ // Inherit all the properties from the Greek
  constructor(firstName, lastName, bankAccountInDollars, countryOfResidence, dollarToLocal) {
    super(...arguments); // Add all of the properties from the parent class
    this.firstName = firstName;
    this.lastName = lastName;
    this.bankAccountInDollars = bankAccountInDollars;
    this.countryOfResidence = countryOfResidence;
    this.dollarToLocal = dollarToLocal;
    this.convertToLocal2 = function() { // Function (anonymous)!!! When placed in to the constructor function
      this.localMoney = this.bankAccountInDollars * this.dollarToLocal;
    };
  }
  convertToLocal = function () {
    this.localMoney = this.bankAccountInDollars * this.dollarToLocal;
  }
  // convertToLocal () { // Hidden function. Won't shot when consol.log the object.
  //   this.localMoney = this.bankAccountInDollars * this.dollarToLocal;
  // }
}

const jake = new Person('Konstantionos', 'Diakogiannis', 1000, 'Greece', 0.86);
const gidday = new Person('Meuron', 'Gidday', 2000, 'Australia', 1,38);
const steffan = new Person('Steffan', 'Effenberg', 5000, 'Switzerland', 0.96);

console.log(jake);
console.log(gidday);
console.log(steffan);
jake.convertToLocal();
console.log(jake.localMoney);
gidday.convertToLocal();
console.log(gidday.localMoney);

// Object inheritance


