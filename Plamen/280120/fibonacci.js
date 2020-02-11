function fibonacci(num) {
    let a = 1;
    let b = 0;
    let temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num --;
    }
    return b;
}

console.log(fibonacci(8));

function fibonacci2(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 2) + fibonacci(num - 1);
  }

  console.log(fibonacci2(8));
