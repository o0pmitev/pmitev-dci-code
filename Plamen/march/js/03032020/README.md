# Task 1

* In many table-top games it is common to use different dice to simulate random events. A “d” or “D” is used to indicate a die with a specific number of faces, d4 indicating a four-sided die, for example.

* If several dice of the same type are to be rolled, this is indicated by a leading number specifying the number of dice.

* Hence, 2d6 means the player should roll two six-sided dice and sum the result face values.

* Write a program to compute the most likely outcomes for the sum of two dice rolls.

* Assume each die has numbered faces starting at 1 and that each face has equal roll probability.

* The input consists of a single line with two integer numbers, N,M, specifying the number of faces of the two dice.

* Constraints : 4≤N,M≤20 Number of faces.

Output &raquo;
* A line with the most likely outcome for the sum; in case of several outcomes with the same probability,they must be listed from lowest to highest value in separate lines.
```JavaScript
console.log(myDices(6, 6)); // => 7
console.log(myDices(6, 4)); // => 5 6 7
console.log(myDices(12, 20)); // => 13 14 15 16 17 18 19 20 21
```
# Task 2

* Kattis has k spare beds for visiting kittens. To make things a little bit easier to keep track of.

* she has made a booking system where kittens can request a bed for one or more nights.

* She has just looked into the system, and realized that there are many requests for beds.

* In fact, there are too many to handle manually. She wants to offer beds to as many different kittens as possible,but she only has k beds. Can you help her figure out how to accommodate as many kittens as possible?

* Note that a kitten will only come if it can stay the whole time it wants to borrow a spare bed.

Input &laquo;

* The first line of input contains two integers n and k (1≤k<n≤100000) the number of potential visiting kittens and the number of beds. Then follow n lines each containing two integers xi and yi, meaning that kitten i wants to arrive at time xi and leave at time yi.

* This means that two kittens i and j, where yi=xj, can use the same bed, as one kitten leaves at the same time as the other arrives. You may assume that 0≤xi<yi≤1000000000.

Output &raquo;

* Output the maximum number of kittens that can be housed given the requests.

```JavaScript
// Sample Input 1           Sample Output 1
// 3 1                          2
// 1 2
// 2 3
// 2 3
// Sample Input 2           Sample Output 2
// 4 1                          3
// 1 3
// 4 6
// 7 8
// 2 5
// Sample Input 3           Sample Output 3
// 5 2                          3
// 1 4
// 5 9
// 2 7
// 3 8
// 6 10
```

