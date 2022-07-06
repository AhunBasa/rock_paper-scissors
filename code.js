let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
  let computerSelection = getComputerSelection();
  const rock = 0;
  const paper = 1;
  const scissors = 2;
  if (playerSelection === rock && computerSelection === paper || playerSelection === paper && computerSelection === scissors || playerSelection === scissors && computerSelection === rock) {
    computerScore++;
    return;
  } else if (playerSelection === computerSelection) {
  return;
  } else {
    playerScore++;
    return;
  }
};

const playerCards = document.querySelectorAll('.player .card');
console.log(playerCards);


// function select() {
//   playerCards.forEach((playerCard) => {
//     playerCard.addEventListener('click', selectCard);
//     function selectCard() {
//       playerCard.setAttribute('id', 'selected');
//       console.log('click');
//       playerCard.removeEventListener('click', selectCard);
//       return true;
//     }
//   })
// }

function select() {
  let i = 0;
  check = true;
  while(check && i < 3) {
    playerCards[i].addEventListener('click', selectCard);
    function selectCard() {
      playerCards[i].setAttribute('id', 'selected');
      console.log('click');
      playerCards[i].removeEventListener('click', selectCard);
      }      
    i++;  
  }

}


select();