let playerScore = 0;
let computerScore = 0;
let playerSelection;

function playRound(playerSelection) {
  let computerSelection = getComputerSelection();
  const rock = 0;
  const paper = 1;
  const scissors = 2;
  if (playerSelection === rock && computerSelection === paper || playerSelection === paper && computerSelection === scissors || playerSelection === scissors && computerSelection === rock) {
    computerScore++;
    console.log(playerScore, computerScore);
    //return;
  } else if (playerSelection === computerSelection) {
    console.log(playerScore, computerScore);
  //return;
  } else {
    playerScore++;
    console.log(playerScore, computerScore);
   // return;
  }

  
  setTimeout((deselect), 2000, computerSelection, playerSelection);
  displayCurrentScore();
  
  if (playerScore === 2 || computerScore === 2) {
    setTimeout((announceWinner), 2002);
    return;
  }
  select();
};

function getComputerSelection() {
  let i = Math.floor(Math.random() * 3);
  computerCards[i].setAttribute('id', 'selected');
  return i;
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const computerCards = document.querySelectorAll('.computer .card');
const playerCards = document.querySelectorAll('.player .card');
//const output = document.getElementById('output');


function select() {
  rock.addEventListener('click', selectRock);
  paper.addEventListener('click', selectPaper);
  scissors.addEventListener('click', selectScissors);
}

function selectRock() {
  rock.setAttribute('id', 'selected');
  removeListener();
  toggleTurnComputer();
  setTimeout(playRound, 2000, 0);
}

function selectPaper() {
  paper.setAttribute('id', 'selected');
  removeListener();
  toggleTurnComputer();
  setTimeout(playRound, 2000, 1);
}

function selectScissors() {
  scissors.setAttribute('id', 'selected');
  removeListener();
  toggleTurnComputer();
  setTimeout(playRound, 2000, 2);
}

function removeListener() {
  rock.removeEventListener('click', selectRock);
  paper.removeEventListener('click', selectPaper);
  scissors.removeEventListener('click', selectScissors);
} 

function deselect(i, j) {
  toggleTurnPlayer();
  computerCards[i].removeAttribute('id');
  playerCards[j].removeAttribute('id');

  
}

let output = document.getElementById('output');

function toggleTurnComputer() {
  output.textContent = "Computer\nturn";
}

function toggleTurnPlayer() {
  output.textContent = "Your\nturn";
}

function displayCurrentScore() {
  document.getElementById('computerScore').textContent = `Score: ${computerScore}`;
  document.getElementById('playerScore').textContent = `Score: ${playerScore}`;
} 

select();

const middle = document.querySelector('.middle');

const button = document.createElement('button');
button.textContent = 'Play again';
let playAgain = middle.appendChild(button);
playAgain.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  displayCurrentScore();
  select();
});

function announceWinner() {
  if (playerScore > computerScore) {
    output.textContent = "You won!";
  } else {
    output.textContent = "Computer won!";
  }
} 
