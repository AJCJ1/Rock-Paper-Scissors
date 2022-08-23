function getComputerChoice() { // generates random number and attaches to rock, paper, or scissors
    let num = Math.floor(Math.random() * 3 );
    
    var compchoice = null;
    
    if (num == 1) {
    compchoice = "Rock";
    } else if (num == 2) {
    compchoice = "Paper";
    } else {
    compchoice = "Scissors"
    } // end of if
    
     return compchoice;
    
    } /* end function */

    console.log(getComputerChoice());



function rock_fun() {
    let playerChoice = "Rock";
    document.getElementById("playerc").innerHTML = "Rock";
    let computerChoice = getComputerChoice();
    document.getElementById("compc").innerHTML = computerChoice;
    let winner = theGame(playerChoice, computerChoice);
    document.getElementById("winner").innerHTML = theGame(playerChoice, computerChoice);
        return;
     }
    
     function paper_fun() {
    let playerChoice = "Paper";
    document.getElementById("playerc").innerHTML = "Paper";
    let computerChoice = getComputerChoice();
    document.getElementById("compc").innerHTML = computerChoice;
    let winner = theGame(playerChoice, computerChoice);
    document.getElementById("winner").innerHTML = theGame(playerChoice, computerChoice);
        return;
     }
    
     function scissors_fun() {
    let playerChoice = "Scissors";
    let computerChoice = getComputerChoice();
    let winner = theGame(playerChoice, computerChoice);

    document.getElementById("playerc").innerHTML = "Scissors";
    document.getElementById("compc").innerHTML = computerChoice;

    document.getElementById("winner").innerHTML = theGame(playerChoice, computerChoice);
        return;
     }

     function theGame(playerSelection, computerSelection) {
        /* rock over scissors, rock loses to paper
        scissors loses over rock, wins over paper
        paper wins over rock, loses over scissors
        otherwise draw */
        let result = (playerSelection + computerSelection)
      
        if((playerSelection == "Rock") && (computerSelection == "Scissors")) {
            result = ("Result: You won!");
              
        } else if ((playerSelection == "Rock") && (computerSelection == "Paper")) {
            result = ("Result: You lost :(");
            
        } else if ((playerSelection == "Scissors") && (computerSelection == "Rock")) {
            result = ("Result: You lost :(");

        } else if ((playerSelection == "Scissors") && (computerSelection == "Paper")) {
            result = ("Result: You won!");
            
        } else if ((playerSelection == "Paper") && (computerSelection == "Rock")) {
            result = ("Result: You won!");
            
        } else if ((playerSelection == "Paper") && (computerSelection == "Scissors")) {
            result = ("Result: You lost :(");
        } else {
            result = ("Result: Draw");
        } // end conditional
        return result;

        } // end function theGame