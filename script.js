// global scope variables

var playerTally = 0;
var computerTally = 0;
var result = "ERROR";

// end of declarations

function getComputerChoice() { // generates random number and attaches to rock, paper, or scissors

let num = Math.floor(Math.random() * 3 );  
let compchoice = null;
    
    if (num == 1) {
    compchoice = "Rock";
    } else if (num == 2) {
    compchoice = "Paper";
    } else {
    compchoice = "Scissors"
    } // end of if
    
return compchoice;
    
} // end random computer's choice function

console.log(getComputerChoice());






function rock_fun() {
    console.log("WORKING");
    let playerChoice = "Rock";
    document.getElementById("playerc").innerHTML = "Rock";
    let computerChoice = getComputerChoice();
    document.getElementById("compc").innerHTML = computerChoice;
    let winner = theGame(playerChoice, computerChoice);
    document.getElementById("result").innerHTML = theGame(playerChoice, computerChoice);
return;
     }
 
function paper_fun() {
    let playerChoice = "Paper";
    let computerChoice = getComputerChoice();
    let winner = theGame(playerChoice, computerChoice);
    document.getElementById("playerc").innerHTML = "Paper";
    document.getElementById("compc").innerHTML = computerChoice;
    document.getElementById("result").innerHTML = theGame(playerChoice, computerChoice);
return;
     }
    
function scissors_fun() {
    let playerChoice = "Scissors";
    let computerChoice = getComputerChoice();
    let winner = theGame(playerChoice, computerChoice);
    document.getElementById("playerc").innerHTML = "Scissors";
    document.getElementById("compc").innerHTML = computerChoice;
    document.getElementById("result").innerHTML = theGame(playerChoice, computerChoice);
return;
     } // end button functions

//event listeners for choice buttons
document.getElementById("rb").addEventListener("click", rock_fun);
document.getElementById('pb').addEventListener("click", paper_fun);
document.getElementById('sb').addEventListener("click", scissors_fun);



function theGame(playerSelection, computerSelection) {
        /* rock over scissors, rock loses to paper
        scissors loses over rock, wins over paper
        paper wins over rock, loses over scissors
        otherwise draw */
        
// conditional that selects the winner

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
    } 
// end conditional

// Tally counter conditional
        if (result == ("Result: You lost :(")) {
            computerTally += 0.5;
            document.getElementById("cTally").innerHTML = ("Computer: " + computerTally);
        } else if (result == ("Result: You won!")) {
            playerTally += 0.5;
            document.getElementById("pTally").innerHTML = ("Player: " + playerTally);
        }
// end conditional
// upto5 conditional
        if (playerTally >= 5) {
       
            document.getElementById("game_over_overlay").innerHTML = "Game over, You win!"
            document.getElementById("game_over_overlay").setAttribute('style','display:inline-block');

        } else if (computerTally >= 5) {
            document.getElementById("game_over_overlay").innerHTML = "Game over, You lose..."
            document.getElementById("game_over_overlay").setAttribute('style','display:inline-block');
        }
//end conditional

return result;
    } // end theGame function
    
function reset() {
    document.getElementById("game_over_overlay").style.display = "none";
    computerTally = 0;
    playerTally = 0;
    document.getElementById("pTally").innerHTML = ("Player: " + playerTally);
    document.getElementById("cTally").innerHTML = ("Computer: " + computerTally);
}


        
//replaced onclick with external JS .addEventListeners