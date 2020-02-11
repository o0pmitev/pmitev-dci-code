// IIFE encapsulation immediately invoke function expression. Its a js
// function that runs as soon as is defined.

(function() {
    console.log('Hello World');
})();


// Higher order functions! 
// Functions which returned other functions


// Calculator with switch statement
function calculator(numberOne, numberTwo, operator ) {
    //let one = numberOne;
    //let two = numberTwo;
    //let op = operator;

    function makeAnOperation() {
        return function() {
            switch(operator) {
                case '+':
                    console.log(`${numberOne} ${operator} ${numberTwo} = ${numberOne + numberTwo}`);
                    break;
                case '-':
                    console.log(`${numberOne} ${operator} ${numberTwo} = ${numberOne - numberTwo}`);
                    break;
                case '*':
                    console.log(`${numberOne} ${operator} ${numberTwo} = ${numberOne * numberTwo}`);
                    break;
                case '/':
                    console.log(`${numberOne} ${operator} ${numberTwo} = ${numberOne / numberTwo}`);
                    break;
                case '%':
                    console.log(`${numberOne} ${operator} ${numberTwo} = ${numberOne % numberTwo}`);
                    break;
                default:
                    console.log('Invalid Operator');
            }
        }
    }
    //let myNewFunction = makeAnOperation();
    //myNewFunction();

    makeAnOperation()(); // Immediately executed without saving the returned function
    // The first brackets executing the higher order function.
    // After this the second brackets execute the returned value.
    
}

calculator(1, 2, '+'); // 3
calculator(10, 25, '%'); // 10




