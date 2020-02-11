// Add

let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());

// Reduce

let reduce = (function() {
    let counter = 0;
    return function() {
        return --counter;
    }
})();

console.log(reduce());
console.log(reduce());
console.log(reduce());



// Average

const average = (...args) => {
    if (args.length === 0)  { 
        return "0";
    }
    let total = 0;
    for (let i=0; i < args.length; i++) {
        total += args[i]; // goes trough all the elements in the array and sums them together
    }
    return total / args.length; // divide the sum of the array elements to their number
};

console.log(average()); // -> 0
console.log(average(0)); // ->
console.log(average(1, 2)); // -> 1.5
console.log(average(1, 3, 6, 10)); // -> 5
console.log(average(12, 14, 16)); // -> 14

// Recursive Functions - function that is calling itself
console.log('28.01.2020');
console.log('================================================================================');
// ~> it can produce an endless function call 
// ~>  !!!!!!!! we need exit strategy !!!!!!!!!!


// Produce and endless call:
// RangeError: Maximum call stack size exceeded
// RangeError: Maximum call stack size exceeded

// (function myRecursive () {
//    console.log('call me');
//    myRecursive();
//})();

(function myRecursive () {
    console.log('call me');
    return; // exits the loop
    myRecursive();
})();

let i = 0; // iterator
let arrowFunction = () => {
    console.log('arrow function ' + i);
    i++; // increment
    if (i < 10) { // condition
        arrowFunction(); // call itself
    } else {
        return; // stop the execution
    }
};
arrowFunction();


let x = 0;
while (x < 10) { // "x < 10" is the loop condition

    x++;
}

// .. can be converted into a recursive function declaration, followed by a call to that function

const whileFunction = (number) => {
    console.log(number);
    number++;
    if (number < 10) {
        whileFunction(number);
    } else {
        return;
    }
};  // When you save the function in a variable you need to end it with ; semicolon! Each statement needs a semicolon

//whileFunction(0);
//whileFunction(10);
//whileFunction(-10);


// RECURSIVE FUNCTION
function foo(i) {
    if (i < 0)
    return;
    console.log('begin: ' + i); // in the beginning 
    foo(i - 1); // recursive call with decrement
    console.log('end: ' + i); // after the call finished we go on with this
}

//foo(3); // ~> 3 2 1 0 0 1 2 3
//foo(5); // ~> 5 4 3 2 1 0 0 1 2 3 4 5