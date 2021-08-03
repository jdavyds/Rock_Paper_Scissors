const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

const psDiv = document.createElement("div");
const csDiv = document.createElement("div");

playerScore.appendChild(psDiv);

computerScore.appendChild(csDiv);


const roundAlert = document.querySelector(".round-alert");

psDiv.textContent = 0;

csDiv.textContent = 0;

function game() {

// COMPUTER PLAY GENERATOR


const computerOptions = ["Rock", "Paper", "Scissors"]; 
const autoPlay = Math.floor(Math.random() * 3);
const computerPlay = computerOptions[autoPlay];
      
// USER PLAY GENERATOR 



let player = prompt("What is your selection", " ");

const userPlay = player.toLowerCase();

// GAME CONTROLLER/RULES


function playRounds(playerPlay, computerSelection) {
    
    if( computerPlay === "Rock" && userPlay === "scissors") {
        
        incrementComputerScore(csDiv);
        return "You loose, Rock blunts scissors";

    }
    else if (computerPlay === "Rock" && userPlay === "paper") {
        
        incrementPlayerScore(psDiv)
        return "You win, Paper wraps Rock";

    }

    else if ( computerPlay === "Rock" && userPlay === "rock") {

        return "Its all square";

    }

    else if ( computerPlay === "Paper" && userPlay === "rock") {
        
        incrementComputerScore(csDiv);
        return "You loose, Paper wraps Rock";

    }

    else if ( computerPlay === "Paper" && userPlay === "paper") {

        return "Its all square";

    }

    else if ( computerPlay === "Paper" && userPlay === "scissors") {

        incrementPlayerScore(psDiv);
        return "You win, Scissors cuts Paper";

    }

    else if ( computerPlay === "Scissors" && userPlay === "rock") {
        
        incrementPlayerScore(psDiv);
        return "You win, Rock blunts Scissors";

    }

    else if ( computerPlay === "Scissors" && userPlay === "paper") {
        
        incrementComputerScore(csDiv);
        return "You loose, Scissors cut Paper";

    }

    else if ( computerPlay === "Scissors" && userPlay === "scissors") {

        return "Its all square";

    }


}
 

roundAlert.textContent = playRounds(userPlay, computerPlay);



function incrementPlayerScore(psDiv) { 

    psDiv.textContent = parseInt(psDiv.textContent) + 1

}
function incrementComputerScore(csDiv) {

    csDiv.textContent = parseInt(csDiv.textContent) + 1
}

};


game();
game();