let computerScore = 0;
let playerScore = 0;
let round = 1;
let isTiming = false;

document.getElementById("round").innerHTML = "Round: " + round;
document.getElementById("player-score").innerHTML = "Player Score: " + playerScore;
document.getElementById("computer-score").innerHTML = "Computer Score: " + computerScore;

document.getElementById("reset-button").addEventListener("click", resetGame);

function resetGame() {
  computerScore = 0;
  playerScore = 0;
  round = 1;
  document.getElementById("round").innerHTML = "Round: " + round;
  document.getElementById("player-score").innerHTML = "Player Score: " + playerScore;
  document.getElementById("computer-score").innerHTML = "Computer Score: " + computerScore;

  clearInterval(timer);
  document.getElementById("time-button").innerHTML = "Start Game";
  isTiming = false;
  document.getElementById("result").innerHTML ="";
}

let timer;

function startTimer(){
  if(!isTiming){
    clearInterval(timer);
    let time = 30;
    document.getElementById("time-button").innerHTML = "Time: " + time;
    timer = setInterval(function(){
      time--;
      document.getElementById("time-button").innerHTML = "Time: " + time;
      if(time === 0){
        clearInterval(timer);
        document.getElementById("time-button").innerHTML = "Start Game";
        isTiming = false;
      }
    }, 1000);
    isTiming = true;
  }else{
    return;
  }
}

document.getElementById("rock").addEventListener("click", startTimer);
document.getElementById("paper").addEventListener("click", startTimer);
document.getElementById("scissors").addEventListener("click", startTimer);
document.getElementById("scissors").addEventListener("click", startTimer);
document.getElementById("lizard").addEventListener("click", startTimer);
document.getElementById("spock").addEventListener("click", startTimer);
document.getElementById("time-button").addEventListener("click", startTimer);


document.getElementById("time-button").addEventListener("click", function(){
  if(!isTiming){
    clearInterval(timer);
    let time = 30;
    document.getElementById("time-button").innerHTML = "Time: " + time;
    timer = setInterval(function(){
      time--;
      document.getElementById("time-button").innerHTML = "Time: " + time;
      if(time === 0){
        clearInterval(timer);
        document.getElementById("time-button").innerHTML = "Start Game";
        isTiming = false;
      }
    }, 1000);
    isTiming = true;
  }else{
    return;
  }
});

let isMuted = false;

document.getElementById("mute-button").addEventListener("click", toggleMute);

  function toggleMute() {
    isMuted = !isMuted;
    let audioElements = document.getElementsByTagName("audio");
    for (let i = 0; i < audioElements.length; i++) {
      audioElements[i].volume = isMuted ? 0 : 1;
    }
    document.getElementById("mute-button").innerHTML = isMuted ? "Unmute" : "Mute";
  }

function play(playerChoice) {
  let computerChoice = getComputerChoice();
  let result = getResult(playerChoice, computerChoice);

  document.getElementById("round").innerHTML = "Round: " + round;
  document.getElementById("player-score").innerHTML = "Player Score: " + playerScore;
  document.getElementById("computer-score").innerHTML = "Computer Score: " + computerScore;

  document.getElementById("result").innerHTML = "You chose " + playerChoice + ", the computer chose " + computerChoice + ". " + result;
  round++;
  if(round>5){
      if(computerScore>playerScore){
          document.getElementById("result").innerHTML += "<br> You were smart, but the computer wins the game!";
      } else if (computerScore<playerScore) {
          document.getElementById("result").innerHTML += "<br> Well done, you won the game! :D";
      } else {
          document.getElementById("result").innerHTML += "<br> But sadly, It's a tie!";
      }
  }
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors", "lizard", "spock"];
  let randomIndex = Math.floor(Math.random() * 5);
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
    (playerChoice === "spock" && (computerChoice === "scissors" || computerChoice === "rock"))
  ) {
    playerScore++;
    return "Yay, you win! :D";
  } else {
    computerScore++;
    return "Oh no, the computer wins!";
  }
}
