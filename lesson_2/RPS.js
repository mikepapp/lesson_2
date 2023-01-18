const readline = require('readline-sync');
const VALID_CHOICES = ['rock' , 'paper' , 'scissors'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function decideWinner (playerChoice , computerChoice) {
  if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
( playerChoice === 'scissors' && computerChoice === 'paper') ||
 (playerChoice === 'paper' && computerChoice === 'rock')) {
    prompt('YOU WIN!!!');
  } else if ((playerChoice === 'rock' && computerChoice === 'paper') ||
( playerChoice === 'scissors' && computerChoice === 'rock') ||
 (playerChoice === 'paper' && computerChoice === 'scissors')) {
    prompt('YOU LOSE!Better luck next time');

  } else {
    prompt('it is a tie');
  }
}


while (true) {
  prompt('make a choice');
  let playerChoice = readline.question();
  while (!VALID_CHOICES.includes(playerChoice.toLowerCase())) {
    prompt('Not a valid choice , try again');
    playerChoice = readline.question();
  }

  let computerChoice = VALID_CHOICES[Math.floor(Math.random() * 3)];
  prompt(`You have chosen ${playerChoice} and your opponent has chosen ${computerChoice}`);
  decideWinner(playerChoice , computerChoice);
  prompt('Do you want to play again? PRESS y/n');
  let response = readline.question();
  if (response.trim() === 'n') {
    break;
  }
}
