document.addEventListener("DOMContentLoaded", startGame);

var playerChoice;
var computerChoice;

function compare(computerChoice) {
    if (playerChoice === computerChoice) {
        return "Oops, it's a tie. The computer also picked " + computerChoice + "Please try again! \|";
    } else if (playerChoice === "rock") {
		if (computerChoice === "paper") {
         return "paper covers rock <br> you lose this one :\(";
	} else if (computerChoice === "scissors") {
         return "rock smashes scissors <br> you're the winner! :\)";
    } else if (computerChoice === "lizard") {
         return "rock smashes lizard <br> you win this one! :\)";   
    } else {
         return "spock vaporizes rock <br> you lost! :\(";
    } 
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
        return "paper covers rock, <br> you win this one! :\)";
    } else if (computerChoice === "scissors") {
        return "scissors cut paper <br> you did not win! :\("
    } else if (computerChoice === "lizard") {
        return "lizard eats paper <br> you lose! :( :\)"
    } else {
        return "paper disproves spock <br> you're the winner! :\)"
    }
    }  else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
			return "rock crushes scissors <br> you lost! :\(";
    }  else if (computerChoice === "paper") {
            return "scissors cut paper <br> you won! :) :\)";
    }  else if (computerChoice === "lizard") {
            return "scissors decapitate lizard <br> you won this one! :\)";
    }  else {
            return "spock breaks scissors <br> you lost! :\(";
    }
    } else if (playerChoice === "lizard") {
        if (computerChoice === "rock") {
             return "rock smashes lizard <br> you lose this one :(";
    } else if (computerChoice === "paper") {
             return "lizard eats the paper <br> you won!";
    } else if (computerChoice === "scissors") {
             return "scissors decapitate the lizard <br> you lose :\(";
    } else {
        return "lizard poisons spock <br> you won!";
    }
   } else if (playerChoice === "spock") {
        if (computerChoice === "rock") {
            return "spock vaporizes rock <br> you won this one!";
        } else if (computerChoice === "paper") {
            return "paper disproves spock <br> you lose :(";
        } else if (computerChoice === "scissors") {
            return "spock crushes the scissors <br> you win this one!";
        } else {
            return "lizard poisons spock <br> you lose!";
        }
   }
};