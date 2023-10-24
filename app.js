const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    let result = "";
    playerSelection = playerSelection.toLowerCase();
    if (!choices.includes(playerSelection)) {
        result = "Invalid choice. Please choose rock, paper, or scissors.";
    }

    if (playerSelection === computerSelection) {
        result = "It's a tie.";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

    return result;
}


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#results');

rock.addEventListener('click',() => {
    result.textContent = playRound('rock', getComputerChoice());
});
paper.addEventListener('click', () => {
    result.textContent = playRound('paper', getComputerChoice());
});
scissors.addEventListener('click', () => {
    result.textContent = playRound('scissors', getComputerChoice());
});











