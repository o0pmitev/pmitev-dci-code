function countDownFrom(number) {
    for (let i = number; i>0; i--) {
        console.log(i);
    }
}

//countDownFrom(10);

// Recursive approach 

function countDownNumber(number) {
    if(number === 0) {
        return;
    }
    console.log(number);
    countDownFrom(number - 1);
}

countDownNumber(5);