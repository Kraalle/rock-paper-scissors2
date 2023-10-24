const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();

    if (!choices.includes(playerSelection)) {
        result = "Invalid choice. Please choose rock, paper, or scissors.";
    }

    if (playerSelection === computerSelection) {
        return "It's a tie.";
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerPoints += 1;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
        
    } else {
        computerPoints += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

}

function winner(player, computer) {
    if (player === 5 || computer === 5) {
        rock.disabled =true;
        scissors.disabled = true;
        paper.disabled = true;
        return player > computer ? "Player wins the game!" : "Computer wins the game!";
    }
    return "";
}



const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#results');
const score = document.querySelector('#score');
const finalWinner = document.querySelector('#winner');

let playerPoints = 0;
let computerPoints = 0;

function updateGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const roundResult = playRound(playerChoice, computerChoice);
    result.textContent = roundResult;
    score.textContent = `Score: ${playerPoints}:${computerPoints}`;
    finalWinner.textContent = winner(playerPoints, computerPoints);
}


rock.addEventListener('click', () => updateGame('rock'));
paper.addEventListener('click', () => updateGame('paper'));
scissors.addEventListener('click', () => updateGame('scissors'));




















