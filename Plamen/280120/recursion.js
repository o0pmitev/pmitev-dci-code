// length without using the .length method
function length(str) {
    if(str === '' || str === undefined) {
        console.log('return 0 exit point');
        let sum = 0;
        return sum;
    } else {
        console.log(str);
        console.log('call');
        // return length(str.substr(1)) + 1;
        let sum2 = length(str.substr(1)) + 1; // only call
        console.log(sum2);
        return sum2; // later after the callback
    }
}

console.log(length('apple'));