//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  let arm = 0;
  let a;

  let temp = number;

  while (temp > 0) {
    a = temp % 10;
    temp = parseInt(temp / 10);
    arm = arm + a * a * a;
  }
  if (arm === number) {
    return true;
  } else {
    return false;
  }
};
