var scoresBtnEl= document.getElementById("view-scores")
var timeTextEl =document.getElementById("time-text")
var timerEl = document.getElementById("timer");
var gameH1 = document.getElementById("game-h1");
var quizText = document.getElementById("game-text");
var mainBtnEl= document.getElementById("btn-row")
var quizAns1 = document.getElementById("ans1");
var quizAns2 = document.getElementById("ans2");
var quizAns3 = document.getElementById("ans3");
var quizAns4 = document.getElementById("ans4");
var ansAlert = document.getElementById("game-ansAlert")
var startTime = 60;

gameLoad();
function gameLoad() {
    gameH1.textContent = "Welcome to javaScript code quiz!";
    quizText.textContent ="Here are some quick rules and objective information.\nYou will have 60 seconds to answer as many questions possible.\nIncorrect answers will subtract 5 seconds off the clock.\nCorrect answers will add 3 seconds back.\nThe game ends when all questions are answerd or the timer hits 0.\nYour score is how much time you have left + your correct answers\nGood Luck! "
    quizAns1.textContent = "LETS GO!"
    quizAns2.style.display = "none"
    quizAns3.style.display = "none"
    quizAns4.style.display = "none"

}




function timer() {
    var timerInterval = setInterval(function() {
      timerEl.textContent = startTime
      startTime--;
      if (startTime === 0) {
        timerEl.textContent = 0;
        clearInterval(timerInterval);
      }
    }, 1000);
  }


  
  
  
