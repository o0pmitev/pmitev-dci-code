// Consistency Is King
// Clear, searchable & obvious

// Constant variable uppercase syntax common
const BASE_SALARY = 1600;
const SALARY_MULTIPLIER = 4;
const makePerson = ({firstName, age, lastName, job}) => {
  return {
    name: firstName + " " + lastName,
    age,
    job,
    salary: BASE_SALARY * SALARY_MULTIPLIER
  }
}


const dev = makePerson({
  firstName: "Plamen",
  lastName: "Mitev",
  age: 30,
  job: "Web Dev"
});


// DO NOT DO - incorrect way
// const hireDev = ({devInfo}) => {
//   const hiredDevInfo = {
//     hired: true, 
//     ...devInfo
//   };
//   return hiredDevInfo;
// };
// console.log(hireDev({devInfo: dev}));

// Correct
const hireDev = ({ dev }) => {
  const hiredDev = {
    hired: true,
    ...dev
  }
  return hiredDev;
}
console.log(hireDev({ dev }));