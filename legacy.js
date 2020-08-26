function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else if (random === 2) {
    return "scissor";
  }
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelection = prompt("Chose rock, paper or scissor").toLowerCase();

  if (playerSelection === "rock" && computerSelection === "paper") {
    return `You lose ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    return `You win ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    return `You lose ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    return `You lose ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    return `You win ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == computerSelection) {
    return "It was a tie";
  }
}

function game() {
  let numberOfRounds = Number(
    prompt("How many rounds would you like to play?")
  );
  let computerScore = 0;
  let playerScore = 0;
  for (i = 0; i < numberOfRounds; i++) {
    let round = playRound();
    if (round.includes("win")) {
      playerScore++;
      console.log(
        `You win, the score is player ${playerScore}, computer ${computerScore}`
      );
    } else if (round.includes("lose")) {
      computerScore++;
      console.log(
        `You lose, the score is player ${playerScore}, computer ${computerScore}`
      );
    } else {
      console.log(
        `It was a tie, the score is player ${playerScore}, computer ${computerScore}`
      );
    }
  }
}

console.log(game());
