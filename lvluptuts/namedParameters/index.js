const makePerson = ({firstName,  age, lastName, job }) => {
  return {
    name: firstName + ' ' + lastName,
    age,
    job
  }
};

// const tempName = {
//   name: "Plamen",
//   lastName: "Mitev",
//   age: 30,
//   job: "Web Dev"
// }

const dev = makePerson({
  firstName: "Plamen",
  lastName: "Mitev",
  age: 30,
  job: "Web Dev"
});
console.log(dev);

