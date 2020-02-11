// reverse a sting 
function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  console.log(reverseString("hello"));


// check if a given string is palindrome or not 
function reverse(string) {
    let reverseString;
    reverseString = Array.from(string).reverse().join("");
    if (string == reverseString) {
        console.log(true);
    } else {
        console.log(false)
    }
}
console.log(reverse('malayalam'));



// check if a given string is a palindrome or not recursively
// to study later !!!!! 
  function isPalindromeRecursive(str) {
	if (str.length < 2) return true;
	if(str.charAt(0) === str.charAt(str.length-1)){
		return isPalindromeRecursive(str.substr(1, str.length-2))
	} else return false;
}

console.log(isPalindromeRecursive('abba'));