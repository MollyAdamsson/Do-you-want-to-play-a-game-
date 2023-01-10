var computerScore = 0;
var playerScore = 0;
var round = 1;

function play(playerChoice) {
    var computerChoice = getComputerChoice();
    var result = getResult(playerChoice, computerChoice);

    document.getElementById("result").innerHTML = "Round " + round + ": you chose " + playerChoice + ", the computer chose " + computerChoice + ". " + result + " <br> Your Score: " + playerScore + " Computer Score: " + computerScore;
    round++;
    if (round>5){
        if(computerScore>playerScore){
            document-getElementById("result").innerHTML += "<br> Computer wins the game! :("
        } else if (computerScore>playerScore){
            document.getElementById("result").innerHTML += "<br> You win the game! :D"
        } else {
            document.getElementById("result").innerHTML += "<br> Oops, it's a tie!"
        }
    }
}

function getComputerChoice() {
    var choice = ["rock", "paper", "scissors", "lizard", "spock"];
    var randomIndex = math.floor(Math.random() * 5);
    return choices[randomIndex];
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Oops, it's a tie!";
    } else if (
        (playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
        (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
        (playerChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
        (playerChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
        (playerChoice === "spock" && (computerChoice == "scissors" || computerChoice === "rock"))
    ) {
        playerScore++;
        return "Yay, you win!";
      } else {
        computerScore++;
        return "Oh no, the computer wins!";
      }
    }