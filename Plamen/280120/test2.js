function reverse(str) {

    var splitString = str.split("");
    var reverseArray = splitString.reverse();
 
    var joinArray = reverseArray.join("");
    return joinArray;
}

console.log(reverse('hello'));

function reverse2 (str) {
    if (str === "") {
        return "";
    } else {
        return reverse2(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverse2('hello'));