// document.getElementById("app").innerHTML = `
// <h1>Hello Parcel!</h1>
// <div>
//   Look
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
//   for more info about Parcel.
// </div>
// `;

// const [a, b] = ['hi', 'plamen']; 
// console.log(b);
// const sayHi = () => console.log("hi");
// c
// sayHi();
// const newArray = ["hi", "plamen" , 3, 4, 5, "spreadftw"]
// const [a, b, ...c] = newArray;
// console.log(a);
// console.log(b);
// console.log(c); 

// const makePerson = (name, age, job) => {
//   return {
//     name,
//     age,
//     job
//   };
// }

// const dev1 = makePerson('plamen', 30, "dev")
// console.log(dev1);
// const { name } = dev1;
// const { age } = dev1;

// console.log(name)
// console.log(age)

const band = {
  name: "Disturbed",
  vocalist: "David Draiman",
  greatestHit: "\"Ten Thousand Fists\"",
  nationality: "American",
  genre: "Heavy Metal",
  formed: 1994,
}

const {name, vocalist, ...rest} = band;
const myArr = [];
// myArr.push(name, vocalist)
console.log(name);
console.log(vocalist);
console.log(rest);