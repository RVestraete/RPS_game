const RPS = ["rock", "paper", "scissors"];

function getComputerChoice() {

    let randomIndex = Math.round(Math.random() * RPS.length);
    return RPS[randomIndex];

}


function getHumanChoice() {

    let choice = prompt("What is your choice ?");

    while(!RPS.includes(choice)){

        alert("Please select between rock, paper or scissors!")
        choice = prompt("What is your choice ?");
    }
    return choice;
}


function playGame() {

    let humanScore = 0, computerScore = 0;
    let roundNumber = 5;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;

        } else if(humanChoice === computerChoice){
            console.log("It's a draw! You both chose " + humanChoice)
            

        } else{
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
    }


    for (let i = 0; i < roundNumber; i++) {
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("############## END OF THE GAME ################")

    if(humanScore > computerScore){
        console.log("You win! Your score is " + humanScore + " points against " + computerScore + " points for the computer!");

    } else if(humanScore < computerScore){
        console.log("You lose! Your score is " + humanScore + " points against " + computerScore + " points for the computer!");

    } else{
        console.log("It's a draw! Your score is " + humanScore + " points!")

    }

}


playGame()
