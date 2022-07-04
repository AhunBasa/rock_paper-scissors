const choices = document.querySelectorAll('.playerChoice');
const computerChoices = document.querySelectorAll('.computer .choice');

  for (let i = 0; i < 3; i++) {
    choices[i].addEventListener('mousedown', (e) => {
    choices[i].classList.add('checked');
    setTimeout(getComputerSelection, 500);
    let j = getComputerSelection();
    setTimeout(playRound, 1000);
    console.log(playRound(i, j));
    })
  }

//get computer's choice

function getComputerSelection() {
  const i = Math.floor(Math.random()*3);
  computerChoices[i].classList.add('checked'); 
  return i;
}

//get user's choice

//determine a winner in 1 round and record a score
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  const rock = 0;
  const paper = 1;
  const scissors = 2;
  if (playerSelection === rock && computerSelection === paper || playerSelection === paper && computerSelection === scissors || playerSelection === scissors && computerSelection === rock) {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  } else if (playerSelection === computerSelection) {
    return 'Game is a tie';
  } else {
    playerScore++;
    return `You won! ${playerSelection} beats ${computerSelection}`;
  }

}

// console.log(playRound(getPlayerSelection(), getComputerSelection()));
// //
//function plays game 5 times, record a score and declares a winner

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerSelection();
    playerSelection = capitalize(playerSelection);
    console.log(playRound(playerSelection, computerPlay()));
  }
}


