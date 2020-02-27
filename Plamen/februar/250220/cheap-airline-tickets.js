/* 
  Given that you have this data that shows 10 airline 
  companies and their corresponding average ticket prices.
*/
console.log(`=== 10 airline companies and their corresponding average ticket prices === \n`)

let airlinePrices = [
  {airlinesName: 'Lufthansa', avgPriceTicket: 85.6},
  {airlinesName: 'Aegean', avgPriceTicket: 65.8},
  {airlinesName: 'KLM', avgPriceTicket: 102.82},
  {airlinesName: 'British Airways', avgPriceTicket: 114.9},
  {airlinesName: 'Iberia', avgPriceTicket: 77.2},
  {airlinesName: 'TAP Portugal', avgPriceTicket: 58.9},
  {airlinesName: 'Alitalia', avgPriceTicket: 84.2},
  {airlinesName: 'Air France', avgPriceTicket: 105.6},
  {airlinesName: 'Singapore Airlines', avgPriceTicket: 119.2},
  {airlinesName: 'Emirates', avgPriceTicket: 135.4},
];
const companyNames = airlinePrices.map(obj => obj.airlinesName);
console.log(companyNames)
/* 
  Try to create a function that accepts a collection of data 
  (in this case this array) and returns only the names 
  of every airline company whose average ticket costs less than 100 Euro. 
*/

const cheapestTickets = arr => arr.filter(item => item.avgPriceTicket < 100).map(item => item.airlinesName);
console.log(`=== Tickets less than 100 Euro Tickets. === \n`);
// console.log(airlinePrices.filter(item => item.avgPriceTicket < 100).map(item => item.airlinesName));
console.log(cheapestTickets(airlinePrices));
