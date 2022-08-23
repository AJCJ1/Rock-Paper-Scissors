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

 


function theGame(playerSelection, computerSelection) {
/* rock over scissors, rock loses to paper
scissors loses over rock, wins over paper
paper wins over rock, loses over scissors */
let result = null;
let win = "You won!";
let lose = "You loss :(";

if(playerSelection == "rock" && computerSelection == "scissors") {
    result = win;
    
} else if (playerSelection == "rock" && computerSelection == "paper") {
    result = lose;
    
} else if (playerSelection == "scissors" && computerSelection == "rock") {
    result = lose;
    
} else if (playerSelection == "scissors" && computerSelection == "paper") {
    result = win;
    
} else if (playerSelection == "paper" && computerSelection == "rock") {
    result = win;
    
} else if (playerSelection == "paper" && computerSelection == "scissors") {
    result = lose;

return console.log(result);
}
} // end function theGame


function rock_fun() {
    let playerChoice = "rock";
    document.getElementById("playerc").innerHTML = "Rock!";
    let computerChoice = getComputerChoice();
    let winner = theGame(playerChoice, computerChoice);
     }
    
     function paper_fun() {
    let playerChoice = "paper";
    document.getElementById("playerc").innerHTML = "Paper!";
    let computerChoice = getComputerChoice();
    theGame();
        return console.log("You chose Paper!");
     }
    
     function scissors_fun() {
    document.getElementById("playerc").innerHTML = "Scissors!";
    let computerChoice = getComputerChoice();
    let playerChoice = "scissors";
        return console.log("You chose Scissors!");
     }

     