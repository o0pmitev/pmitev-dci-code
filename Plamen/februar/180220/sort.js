// function isSpecialArray(arr){
//   return arr.every((x,y) => x%2 === y%2);
// }

function isSpecialNumber(previous, number, index) {
  let isIndexEven = index % 2 ? true : false; // boolean
  let isNumberEven = number % 2 ? true : false;
  if (previous && isIndexEven === isNumberEven) {
		return true;
	} else {
		return false;
	};
}

function isSpecialArray(arr) {
	return arr.reduce(isSpecialNumber)
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]));

