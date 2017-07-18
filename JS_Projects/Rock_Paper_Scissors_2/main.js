// Rock Paper Scissors Function
function rps (player1, player2) {

  if (player1 === player2) {
          return 'It\'s a Tie!'
        } ties = ties + 1
  if (player1 === 'paper' && player2 === 'rock' || player1 === 'rock' && player2 === 'scissors'||player1 === 'scissors' && player2 === 'paper'){
        return 'Player 1 wins'
      } player1Wins = player1Wins + 1
  if (player1 === 'scissors' && player2 === 'rock' || player1 === 'paper' && player2 === 'scissors' || player1 === 'rock' && player2 === 'paper') {
        return 'Player 2 Wins'
      } player2Wins = player2Wins + 1
}


let player1Wins = 0
let player2Wins = 0
let ties = 0

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}


let choices = ['rock', 'paper', 'scissors'];

let player1 = choices[getRandomIntInclusive(0,2)];
let player2 = choices[getRandomIntInclusive(0,2)];

console.log(rps(player1, player2))
console.log(player1Wins, player2Wins, ties);





// Don't edit below these lines
