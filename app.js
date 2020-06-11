var numberLimit , guessingLimit , randomNum , userGuess , count ;

document.querySelector('.btn-start').addEventListener('click',start);
document.querySelector('.btn-new').addEventListener('click',start);

function start(){
     document.querySelector('#player-name').textContent = document.querySelector("input[name='player-name']").value ; ;
     guessingLimit = document.querySelector(".guessing-limit").value;
     numberLimit = document.querySelector(".number-limit").value;
     document.querySelector('#initial-page').classList.toggle("hidden");
     document.querySelector('#original-game').classList.toggle("hidden")
     init();
}

function init() {
    count = 0;
    if (!numberLimit) numberLimit = 100 ;
    if (!guessingLimit) guessingLimit = 10 ;
    randomNum = Math.floor (Math.random() * numberLimit)+1;
    document.querySelector('#player-name').style.color = "purple";
    document.querySelector('.btn-check').addEventListener('click',checkGuess);
}

function checkGuess() {
  userGuess = document.querySelector('.user-guess').value ;
  if (!userGuess) return ;
  if (userGuess == randomNum) {
    document.querySelector('#player-name').textContent += " Winner !";
    document.querySelector('#player-name').style.color = "yellow";
    document.querySelector('.btn-check').removeEventListener('click',checkGuess);
    return ;
  }else if (userGuess > randomNum) {
    alert("Your Guess is wrong ! , try with a lesser number :)");
  }else {
    alert("Your Guess is wrong ! , try with a greater number :)");
  }
  countGuess();
}

function countGuess(){
  count ++;
  if (count >= guessingLimit) {
    document.querySelector('#player-name').textContent += " Looser !";
    document.querySelector('#player-name').style.color = "red";
    document.querySelector('.btn-check').removeEventListener('click',checkGuess);
  }
}
