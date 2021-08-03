const game = () => {

    const playerScore = document.querySelector(".player-score");
    const computerScore = document.querySelector(".computer-score");

    const psDiv = document.createElement("div");
    const csDiv = document.createElement("div");

    playerScore.appendChild(psDiv);

    computerScore.appendChild(csDiv);


    const roundAlert = document.querySelector(".round-alert");

    psDiv.textContent = 0;

    csDiv.textContent = 0;

    
    const rock = document.querySelector(".rock-btn");
    const paper = document.querySelector(".paper-btn");
    const scissors = document.querySelector(".scissors-btn");
    
    
    
    // GAME CONTROLLER/RULES
    
    
    function playRounds(userPlay, computerPlay) {
        
        
        if (computerPlay === "Rock" && userPlay === "scissors") {
            
            incrementComputerScore(csDiv);
            roundAlert.textContent = "You loose, Rock blunts scissors";
            return;
            
        }
        else if (computerPlay === "Rock" && userPlay === "paper") {
            
            incrementPlayerScore(psDiv)
            roundAlert.textContent = "You win, Paper wraps Rock";
            return;
        }
        
        else if (computerPlay === "Rock" && userPlay === "rock") {
            
            roundAlert.textContent = "Its all square";
            return;
            
        }
        
        else if (computerPlay === "Paper" && userPlay === "rock") {
            
            incrementComputerScore(csDiv);
            roundAlert.textContent = "You loose, Paper wraps Rock";
            return;
        }
        
        else if (computerPlay === "Paper" && userPlay === "paper") {
            
            roundAlert.textContent = "Its all square";
            return;
        }
        
        else if (computerPlay === "Paper" && userPlay === "scissors") {
            
            incrementPlayerScore(psDiv);
            roundAlert.textContent = "You win, Scissors cuts Paper";
            return;
        }
        
        else if (computerPlay === "Scissors" && userPlay === "rock") {
            
            incrementPlayerScore(psDiv);
            roundAlert.textContent = "You win, Rock blunts Scissors";
            return;
        }
        
        else if (computerPlay === "Scissors" && userPlay === "paper") {
            
            incrementComputerScore(csDiv);
            roundAlert.textContent = "You loose, Scissors cut Paper";
            return;
        }
        
        else if (computerPlay === "Scissors" && userPlay === "scissors") {
            
            roundAlert.textContent = "Its all square";
            return;
        }
        

        
    }
    
    function incrementPlayerScore(psDiv) {
        
        psDiv.textContent = parseInt(psDiv.textContent) + 1
        
    }
    function incrementComputerScore(csDiv) {
        
        csDiv.textContent = parseInt(csDiv.textContent) + 1
    }
    
    
    
    // USER PLAY GENERATOR & COMPUTER PLAY GENERATOR
    
    const computerOptions = ["Rock", "Paper", "Scissors"];
    const autoPlay= () => Math.floor(Math.random() * 3);
    let computerPlay;
    const userOptions = ["rock", "paper", "scissors"]
    let userPlay;
    
    rock.addEventListener("click", () => {
        userPlay = userOptions[0];
        computerPlay = computerOptions[autoPlay()];
        playRounds(userPlay, computerPlay)
    })
    paper.addEventListener("click", () => {
        userPlay = userOptions[1];
        computerPlay = computerOptions[autoPlay()];
        playRounds(userPlay, computerPlay)
    })
    scissors.addEventListener("click", () => {
        userPlay = userOptions[2];
        computerPlay = computerOptions[autoPlay()];
        playRounds(userPlay, computerPlay)
    })
        
    
}
game();
// game();
// game();
// game();