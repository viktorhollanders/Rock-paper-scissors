const buttons = document.querySelectorAll(".button");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const resault = document.querySelector("#resault");

let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {
  const choise = ["Rock", "paper", "scissor"];
  let random = Math.floor(Math.random() * choise.length);
  return choise[random].toLowerCase();
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  playerSelection.toLowerCase();

  if (playerSelection === "rock" && computerSelection === "paper") {
    computerPoints++;
    resault.textContent = `You lose ${computerSelection} beats ${playerSelection}`;
    computerScore.textContent = computerPoints;
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    playerPoints++;
    resault.textContent = `You win ${playerSelection} beats ${computerSelection}`;
    playerScore.textContent = playerPoints;
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    computerPoints++;
    resault.textContent = `You lose ${computerSelection} beats ${playerSelection}`;
    computerScore.textContent = computerPoints;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerPoints++;
    resault.textContent = `You win ${playerSelection} beats ${computerSelection}`;
    playerScore.textContent = playerPoints;
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    computerPoints++;
    resault.textContent = `You lose ${computerSelection} beats ${playerSelection}`;
    computerScore.textContent = computerPoints;
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    playerPoints++;
    resault.textContent = `You win ${playerSelection} beats ${computerSelection}`;
    playerScore.textContent = playerPoints;
  } else if (playerSelection == computerSelection) {
    resault.textContent = "It was a tie";
  }
}

function resetGame() {
  playerPoints = 0;
  computerPoints = 0;
  computerScore.textContent = 0;
  playerScore.textContent = 0;
  resault.textContent = "";
}

function declearWinner() {
  function points() {
    if (playerPoints == 5) {
      resault.textContent = "You win";
    } else if (computerPoints == 5) {
      resault.textContent = "The computer has beten you";
    }
  }
  if (playerPoints > 5 || computerPoints > 5) {
    resetGame();
  } else {
    points();
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    let playerSelection = e.target.value.toLowerCase();
    playRound(playerSelection);
    declearWinner();
  });
});

// in the decler winner function we need to take in the value of the number of rounds
// if index is les than number of rounds play
