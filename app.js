const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (!choices.includes(playerSelection)) {
        return "Invalid choice. Please choose rock, paper, or scissors.";
    }

    if (playerSelection === computerSelection) {
        return "It's a tie.";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice: rock, paper, or scissors");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();



