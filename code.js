//get computer's choice
function computerPlay() {
  const computerChoice = Math.floor(Math.random()*3);
  if (computerChoice === 0) {
    return 'Rock';
  } else if (computerChoice === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}


//get user's choice


function getPlayerSelection() {
  let playerSelection = prompt('Rock, Paper or Scissors&');
  playerSelection =  playerSelection.toLowerCase();
  let keepGoing = true;
  while (keepGoing)
  if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
    keepGoing = false;
    return playerSelection;
  } else {
    playerSelection = prompt('Try again.');
    playerSelection = playerSelection.toLowerCase();
  }
}

//let playerSelection = getPlayerSelection();

//Capitalize playerSelection
function capitalize(playerSelection) {
let firstLetter = playerSelection.charAt(0);
firstLetter = firstLetter.toUpperCase();
return playerSelection = firstLetter + playerSelection.slice(1, playerSelection.length);
}

//determine a winner in 1 round and record a score
let playerScore = 0;
let computerScore =0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'Rock' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection === 'Rock') {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  } else if (playerSelection === computerSelection) {
    return 'Game is a tie';
  } else {
    playerScore++;
    return `You won! ${playerSelection} beats ${computerSelection}`;
  }
}

//console.log(playRound(playerSelection, computerSelection));

//function plays game 5 times, record a score and declares a winner

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerSelection();
    playerSelection = capitalize(playerSelection);
    console.log(playRound(playerSelection, computerPlay()));
  }
}
game();

//print the result
if (playerScore > computerScore) {
  console.log('You won!')
} else if (playerScore < computerScore) {
  console.log('You lost!')
} else {
  console.log('Game is a tie.')
}
console.log(`Player score: ${playerScore}, computer score: ${computerScore}`);




