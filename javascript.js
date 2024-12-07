function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)+1;
    switch(choice) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?").toLowerCase();
}

let humanScore, computerScore = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) console.log("Tie!");
    if (humanChoice === "rock" && computerChoice === "scissors") console.log("You win! Rock beats scissors!");
    if (humanChoice === "paper" && computerChoice === "rock") console.log("You win! Paper beats rock!");
    if (humanChoice === "scissors" && computerChoice === "paper") console.log("You win! Scissors beats paper!");
    if (computerChoice === "rock" && humanChoice === "scissors") console.log("You lose! Rock beats scissors!");
    if (computerChoice === "paper" && humanChoice === "rock") console.log("You lose! Paper beats rock!");
    if (computerChoice === "scissors" && humanChoice === "paper") console.log("You lose! Scissors beats paper!");
}


for (let i = 0; i < 5; i++) {
    playRound();
}
