var score = 0;
var userChoice = -1;
var container = document.querySelector('.container');
var rockButton = document.querySelector('#rock');
var paperButton = document.querySelector('#paper');
var scissorsButton = document.querySelector('#scissors');
var scoreText = document.querySelector('.score');
function playRound(userChoice) {
    var computerChoice = Math.floor(Math.random() * 3);
    if (userChoice === 0) {
        switch (computerChoice) {
            case 0:
                alert("It's a draw");
                break;
            case 1:
                alert('You lose. Paper beats rock');
                if (score > 0)
                    score--;
                break;
            case 2:
                alert('You win. Rock beats scissors');
                score++;
            default:
                break;
        }
    }
    else if (userChoice === 1) {
        switch (computerChoice) {
            case 0:
                alert("You win. Paper beats rock");
                score++;
                break;
            case 1:
                alert("It's a draw");
                break;
            case 2:
                alert('You lose. Scissors beats paper');
                if (score > 0)
                    score--;
                break;
            default:
                break;
        }
    }
    else {
        switch (computerChoice) {
            case 0:
                alert("You lose. Rock beats scissors");
                if (score > 0)
                    score--;
                break;
            case 1:
                alert("You win. Scissors beat paper");
                score++;
                break;
            case 2:
                alert("It's a draw");
                break;
            default:
                break;
        }
    }
}
rockButton.addEventListener('click', function () {
    playRound(0);
    scoreText.innerText = score.toString();
});
paperButton.addEventListener('click', function () {
    playRound(1);
    scoreText.innerText = score.toString();
});
scissorsButton.addEventListener('click', function () {
    playRound(2);
    scoreText.innerText = score.toString();
});
