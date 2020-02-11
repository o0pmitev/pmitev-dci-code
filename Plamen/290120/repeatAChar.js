

// function howManyTimes(num) {
//     if(!num) {
//         return;
//     }
// 	return `Ed${'a'.repeat(howManyTimes(num))}bit`;
// }

// console.log(howManyTimes(5));



function howManyTimes(num) {
    let newString = `Ed${'a'.repeat(howManyTimes(num))}bit`;
    if(!num) {
        return;
    }
	return;
}

console.log(howManyTimes(5));

