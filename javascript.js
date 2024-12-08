function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)+1;
    switch(choice) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}

let computerScore = 0;
let humanScore = 0;

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
    console.log("clicked rock!");
    playRound("rock");
});

paperBtn.addEventListener("click", () => {
    console.log("clicked paper!");
    playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
    console.log("clicked scissors");
    playRound("scissors");
});

let score = document.querySelector("#scores")
let result = document.querySelector("#result")
let round = document.querySelector("#round")
let completed = false;

function playRound(humanChoice = "0") {
    if (completed === false) {
        const computerChoice = getComputerChoice();
        if (humanChoice === computerChoice) round.textContent = "Tie!";
        if (humanChoice === "rock" && computerChoice === "scissors") { round.textContent = ("Won round! Rock beats scissors!"); humanScore++; }
        if (humanChoice === "paper" && computerChoice === "rock") { round.textContent = ("Won round! Paper beats rock!"); humanScore++; }
        if (humanChoice === "scissors" && computerChoice === "paper") { round.textContent = ("Won round! Scissors beats paper!"); humanScore++; }
        if (computerChoice === "rock" && humanChoice === "scissors") { round.textContent = ("Lost round! Rock beats scissors!"); computerScore++; }
        if (computerChoice === "paper" && humanChoice === "rock") { round.textContent = ("Lost round! Paper beats rock!"); computerScore++; }
        if (computerChoice === "scissors" && humanChoice === "paper") { round.textContent = ("Lost round! Scissors beats paper!"); computerScore++; }

        if (humanScore >= 5) { result.textContent = "You win!"; completed = true; }
        if (computerScore >= 5) { result.textContent = "You lose!"; completed = true; }

        score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    }
}

playRound();



