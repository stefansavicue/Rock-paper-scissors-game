let userGuessint=0;
let usersGuessString="";
let computerValue=0;
function enterUsersGuess() {
    usersGuessString ="Rock";
    usersGuessString=usersGuessString.toUpperCase();
    userGuessint=0;
    if(usersGuessString==="ROCK")userGuessint=1;
    else if(usersGuessString==="PAPER")userGuessint=2;
    else if(usersGuessString==="SCISSORS")userGuessint=3;
    else alert("input value was not in the correct format");
}
function computerValueEnter() {
    computerValue=Math.floor(Math.random()*3)+1;
}
//1-rock 2-paper 3-scissors
function whoWins() {
    enterUsersGuess();
    computerValueEnter();
    if(computerValue===3){
        if(userGuessint===3)console.log("it's a draw");
        else if(userGuessint===2)console.log("You lose!! Scissors beat paper");
        else console.log("You win!! Rock beats scissors");
    }
    else if(computerValue===2){
        if(userGuessint===3)console.log("You win!! Scissors beat paper");
        else if(userGuessint===2)console.log("It's a draw");
        else console.log("You lose!! Paper beats rock");
    }
    else{
        if(userGuessint===3)console.log("You lose!! Rock beats scissors");
        else if(userGuessint==2)console.log("You win!! Paper beats rock");
        else console.log("It's a draw");
    }
}
whoWins();
