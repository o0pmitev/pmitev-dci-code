// Create a function name 'geometricalSequence' and use a loop to print the following sequence:
// 1 2 4 8 16 32 64 128 256
// concatenate each value to a string and return a string
function geometricalSequence(){
    let myString = '';
    for (let i = 1; i<=256; i=i*2) {
        myString += i + ' ';
    }
    return myString;
}

console.log(geometricalSequence());

function mathPow(){
    let myString = '';
    for (let i = 0; i<=8; i++) {
        myString += Math.pow(2, i) + ' ';
    }
    return myString;
}

console.log(mathPow());