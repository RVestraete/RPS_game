const RPS = ["rock", "paper", "scissors"];

function getComputerChoice() {

    let randomIndex = Math.floor(Math.random() * RPS.length);
    return RPS[randomIndex];

}

const container = document.querySelector('#container');
const game = document.createElement('div');
const currentScore = document.createElement("div");
const result = document.createElement("div");
const body = document.querySelector('body');
game.classList.add("game");
currentScore.classList.add("currentScore");
result.classList.add("result");
let flag = false;

let humanScore = 0, computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => { playRound(button.id); });
});

function playRound(humanChoice, computerChoice = getComputerChoice()) {
    humanChoice = humanChoice.toLowerCase();

    if (flag) {
        return
    }

    else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
        game.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;

    } else if (humanChoice === computerChoice) {
        game.textContent = "It's a draw! You both chose " + humanChoice;


    } else {
        game.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }
    currentScore.textContent = "Your score: " + humanScore + " / Computer score: " + computerScore;

    container.appendChild(game);
    container.appendChild(currentScore);

    if (humanScore > 4) {
        result.textContent = "You win! Your score is " + humanScore + " points against " + computerScore + " points for the computer!";
        container.removeChild(game);
        container.removeChild(currentScore);
        container.appendChild(result);
        flag = true;
    }
    if (computerScore > 4) {
        result.textContent = "You lose! Your score is " + humanScore + " points against " + computerScore + " points for the computer!";
        container.removeChild(game);
        container.removeChild(currentScore);
        container.appendChild(result);
        flag = true;
    }
}