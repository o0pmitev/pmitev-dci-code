const isArmstrongNumber1 = num => {
  let arm = 0;
  let a;

  let temp = num;

  while (temp > 0) {
    a = temp % 10;
    temp = parseInt(temp / 10);
    arm = arm + a * a * a;
  }
  if (arm == num) {
    return true;
  } else {
    return false;
  }
}
console.log(isArmstrongNumber1(100));