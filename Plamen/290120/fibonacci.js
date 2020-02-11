// function fibonacci(num) {
//     let a = 1;
//     let b = 0;
//     let temp;

//     while (num >= 0) {
//         temp = a;
//         a = a + b;
//         b = temp;
//         num --;
//     }
//     return b;
// }

// console.log(fibonacci(8));


// function fib(n) {
// 	if (n<1) return 0
// 	if (n<3) return 1
// 	return  fib(n-1) + fib(n-2)
// }
// console.log(fib(8));
function fibonacci(num) {
    if (num < 1) {
        return 0;
        
    } else if(num < 3){
        return 1;
    } else {
        
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

console.log(fibonacci(8));
