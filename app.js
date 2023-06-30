function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playerSelection() {
    let choice = prompt("Choice?");
    return choice.toLowerCase();
}
 // working on part 4
function playRound(playerSelection, computerSelection){
    let playerWinner = true
    if (playerSelection === computerSelection) {
        return `Tie! ${computerSelection} does not beat ${playerSelection}`;
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        playerWinner = false;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        playerWinner = false;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        playerWinner = false;
    }

    if (playerWinner === true) {
        playerPoints++;
        return `You Win! ${fineCase(playerSelection)} beats ${fineCase(computerSelection)}`;
    } else {
        computerPoints++;
        return `You Lose! ${fineCase(computerSelection)} beats ${fineCase(playerSelection)}`;
    }
}

function fineCase(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelect = playerSelection();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelect, computerSelection));
    }

    if (playerPoints === computerPoints) {
        return "It's a tie!"
    }
    else if (playerPoints > computerPoints) {
        return "You win the game!"
    } 
    return "computer wins the game!"
}

let playerPoints = 0;
let computerPoints = 0;
let winner = game();
console.log(winner);



