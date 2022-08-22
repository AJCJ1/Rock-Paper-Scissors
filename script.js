function getComputerChoice() { // generates random number and attaches to rock, paper, or scissors
    let num = Math.floor(Math.random() * 3 );
    
    console.log(num);
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

    return console.log("You chose Rock!");
 }

 function paper_fun() {
    return console.log("You chose Paper!");
 }

 function scissors_fun() {
    return console.log("You chose Scissors!");
 }

function thegame(playerSelection, computerSelection) {

}