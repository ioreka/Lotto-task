// generate lottery tickets for a given amount of money

function numberOfTickets(cash) {
  return Math.floor(cash);
}

var myCash = 7.58;
var myTickets = numberOfTickets(myCash);
console.log(myTickets);
