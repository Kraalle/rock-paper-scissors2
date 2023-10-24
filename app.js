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
        playerPoints += 1;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        computerPoints += 1;
    }

    return result;
}

function winner(player, computer) {
    if (player === 5) {
        rock.disabled =true;
        scissors.disabled = true;
        paper.disabled = true;
        return "Player wins the game!";
        
    }
    if (computer === 5) {
        rock.disabled =true;
        scissors.disabled = true;
        paper.disabled = true;
        return "Computer wins the game!";
    }
}



const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#results');
const score = document.querySelector('#score');
const finalWinner = document.querySelector('#winner');

let playerPoints = 0;
let computerPoints = 0;


    rock.addEventListener('click',() => {
        result.textContent = playRound('rock', getComputerChoice());
        score.textContent = `Score: ${playerPoints}:${computerPoints}`;
        finalWinner.textContent = winner(playerPoints, computerPoints);
    });
    paper.addEventListener('click', () => {
        result.textContent = playRound('paper', getComputerChoice());
        score.textContent = `Score: ${playerPoints}:${computerPoints}`;
        console.log(winner(playerPoints, computerPoints));
        finalWinner.textContent = winner(playerPoints, computerPoints);
    });
    scissors.addEventListener('click', () => {
        result.textContent = playRound('scissors', getComputerChoice());
        score.textContent = `Score: ${playerPoints}:${computerPoints}`;
        console.log(winner(playerPoints, computerPoints));
        finalWinner.textContent = winner(playerPoints, computerPoints);
    });
    



















