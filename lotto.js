// generate lottery tickets for a given amount of money

function numberOfTickets(cash) {
  return Math.floor(cash);
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


function randomLottoNumbers() {
  let ticket = [];
  for(let i = 0; i <= 5; i++) {

      let arraySize = ticket.length;

      let check = arraySize;

      while(check === arraySize) {
        let newNumber = getRandomInt(1, 60)
        if (ticket.includes(newNumber) === false) {
          ticket.push(newNumber)
          check++
        }
      }

  }
  return ticket
}

function createTickets(nTickets) {
  let ticketArray = [];

  for(let i = 0; i < nTickets; i++) {
    ticketArray.push(randomLottoNumbers());
  }
  return ticketArray;
}

var myCash = 6.66;
var myNumberOfTickets = numberOfTickets(myCash);
console.log(createTickets(myNumberOfTickets));
