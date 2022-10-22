let userGuessint=0;
let usersGuessString="";
let computerValue=0;
function enterUsersGuess() {
    usersGuessString =prompt();
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
        if(userGuessint===3)alert("it's a draw");
        else if(userGuessint===2)alert("You lose!! Scissors beat paper");
        else alert("You win!! Rock beats scissors");
    }
    else if(computerValue===2){
        if(userGuessint===3)alert("You lose!! Scissors beat paper");
        else if(userGuessint===2)alert("It's a draw");
        else alert("You win!! Rock beats paper");
    }
    else{
        if(userGuessint===3)alert("You lose!! Rock beats scissors");
        else if(userGuessint==2)alert("You win!! Paper beats rock");
        else alert("It's a draw");
    }
}
whoWins();
