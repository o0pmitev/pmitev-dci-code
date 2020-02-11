// function reverse(string) {
//     let reverseString;
//     reverseString = Array.from(string).reverse().join("");
//     if (string == reverseString) {
//         console.log(true);
//     } else {
//         console.log(false)
//     }
//   }

//   console.log(reverse('hah'));


function reverseString(str) {

    if (str === '') {
        return '';
    } else {
         let newStr = reverseString(str.substr(1)) + str.charAt(0);
         return newStr;
    }
}


console.log(reverseString('malayalam'));
console.log(reverseString('Plamen'));
console.log(reverseString('x'));
console.log(reverseString(''));



// TO DO LATER ! !!!!!!!!!!!!!!!!!!!!!!!!!!!