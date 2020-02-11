// give the length of the string using recursion 

function length(str) {
    if (str === undefined) {
        return 0;
    } else {
        return (str.length)
        return;
        length(str);
    }
}

console.log(length("apple"));

console.log(length("make"));

console.log(length("a"));

console.log(length(""));



//var counter = 10;
//while(counter > 0) {
//    console.log(counter--);
//}