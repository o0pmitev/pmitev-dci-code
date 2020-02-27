// Assembling a string with reduce
console.log(`=== Assembling a string with reduce === \n`)
let myQuote = ['it', 'is', 'Friday', 'and', 'i', 'am', 'already', 'exhausted', 'to', 'think', 'of', 'a', 'better', 'quote'];

let myString = myQuote.reduce((acc, value) =>  `${acc} ${value}`, ' ')

console.log(`${myString} \n`);

// Aggregate Basket
console.log(`=== Aggregate Basket === \n`)

/*
Imagine that you are working as a salesman for a shop that sells some goods. 
For the sake of the example let's assume that you sell 4 kinds. Smartphones, laptops, 
smartwatches and air-coolers. 
Anytime you sell something, you save it by writing down the good you sold ('smartwatch') 
for example. At the end of the day you take a look at your sales and you end up with something 
like this.
*/

let sales = [

  'smartphone',
  'smartphone',
  'laptop',
  'smartphone',
  'laptop',
  'air_cooler',
  'smartphone',
  'smartphone',
  'laptop',
  'smartphone',
  'smart_watch'

];

/*
Create a function that aggregates this array and returns an object with the product names as keys, 
and how many of them were sold as values.
Your final result should be: {smartphone: 6, laptop: 3, air_cooler: 1, smartwatch: 1}
You can check always if an object already contains a property from before with the 
Object.hasOwnProperty('property') that returns a boolean value (equivalent to the includes for arrays).
Maybe you want to find out more here before proceeding.
An alternative and more elegant solution may include an array's reduce function. 
You may want to think about how this is going to be done.
 */

