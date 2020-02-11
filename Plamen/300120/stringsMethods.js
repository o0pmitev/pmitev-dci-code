// **3. String Check.**
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// Examples:
// * dictionary("bu", "button") ➞ true
// * dictionary("tri", "triplet") ➞ true
// * dictionary("beau", "pastry") ➞ false

let beginning = 'bu';
let testWord = 'button';

if(testWord.startsWith(beginning)){
    console.log(true);
} else {
    console.log(false);
}


// ternary operator
// condition ? true case : false case
testWord.startsWith(beginning) ? console.log(true) : console.log(false);

//save it for later
let result = testWord.startsWith(beginning) ? true : false;
console.log(result)

// write a function
const dictionary = (beginning, testWord) => {
     // Case insensitive!
     beginning = beginning.toLowerCase(); // must be done twice
     testWord  = testWord.toLowerCase(); // must be done twice the same method

    if(testWord.startsWith(beginning)){
        console.log(true); // debugging
        return true;
    } else {
        console.log(false); // debugging
        return false;
    }
}


dictionary("bu", "button"); //➞ true
dictionary("tri", "triplet"); //➞ true
dictionary("beau", "pastry"); //➞ false
console.log(dictionary('Mu','museum')); // true
console.log(dictionary('mu','cat')); // false
console.log('==============================================================================')

// **5. Count Occurrences.**
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
// i.e.
// countOccurrences("this is a string", "i") ➞ 3 (edited) 
let myString = 'this is a string';
let letter = 'i';
let count = 0;

// string method could be helping? indexOf() / includes()

for(let i = 0; i < myString.length; i++) {
    if(myString.charAt(i) === letter) { // if there is a letter increment count with 1 
        count++;
    }
}
console.log(count);

const countOccurrences = (myString, letter) => {
    let count = 0;

// string method could be helping? indexOf() / includes()

for(let i = 0; i < myString.length; i++) {
    if(myString.charAt(i) === letter) { // if there is a letter increment count with 1 
         count++;
    }
  }
  return count; // must be return out of the loop
};

console.log(countOccurrences('this is a string', 'i')); // -> 3


// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.
// Examples
// howManyTimes(5) ➞ "Edaaaaabit"
// howManyTimes(0) ➞ "Edbit"
// howManyTimes(12) ➞ "Edaaaaaaaaaaaabit"

let myNumber = 5;
let repeatLetter = "a";
// String method helping us? repeat

console.log(`Ed${repeatLetter.repeat(myNumber)}bit`);

// without recursion

const howManyTimes = (n) => {
    let repeatLetter = "a";
    let output = `Ed${repeatLetter.repeat(n)}bit`;
    console.log(output);
    return output;
}

howManyTimes(9);


// with recursion

const howManyTimes2 = (n) => {
    let repeatLetter = 'a';
    
}