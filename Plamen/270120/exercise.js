// add
function add(a) {
    return function(b) {
        return a + b;
    }
    
}
console.log(add(3)(4));
console.log(add(5)(10));

// multiplier

//function multiplier(a) {
//    let newF =  function(b) {
//        return a * b;
//    }
//    return newF;
//}

//console.log(multiplier(2)(2));
//console.log(multiplier(2)(4));


// multiplier 2

const multiplier = function(a) {
    return function(b) {
        return a * b;
    }; // closing the return from  line 26
}; // Closing the const statement thats why we need ;

console.log(multiplier(2)(2));
console.log(multiplier(3)(4));


// 3. Calculate Money saved till pension day

(function(){
    
}),();