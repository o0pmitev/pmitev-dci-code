console.log('-----------------------------MAP FILTER REDUCE-----------------------------')
// What you have
var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];
// What you need
//[20, 24, 56, 88]

// Using forEach()
// let officersIds = [];
// officers.forEach(function (officer) {
//   officersIds.push(officer.id);
// });

// console.log(officersIds);

// Using .map()

 let officersIds = officers.map(function (officer) {
  return officer.id
});
console.log(officersIds);

// with arrow function 
const officersIds2 = officers.map(officers => officers.id);
console.log(officersIds2);


// .reduce()
var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];

let totalYears = pilots.reduce(function(acc, pilot) {
  return acc + pilot.years;
},0);
console.log(totalYears);

// with arrow function 
const totalYears2 = pilots.reduce((acc, pilots) =>  acc + pilots.years, 0);
console.log(totalYears2);

// most experience pilot
let mostExpPilot = pilots.reduce(function(oldest,pilot) {
  return(oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});
console.log(mostExpPilot);


// .filter()
var starWarsPilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];

let rebels = starWarsPilots.filter(function (pilot) {
  return pilot.faction === "Rebels";
});

let empire  = starWarsPilots.filter(function (pilot) {
  return pilot.faction === "Empire";
})

console.log(rebels);
console.log(empire);