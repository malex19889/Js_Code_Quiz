var scoresBtnEl= document.getElementById("view-scores");
var timeTextEl =document.getElementById("time-text");
var timerEl = document.getElementById("timer");
var gameH1 = document.getElementById("game-h1");
var quizText = document.getElementById("game-text");
var mainBtnEl= document.getElementById("btn-row");
var quizStartEl = document.getElementById("start-game");
var quizAns1 = document.getElementById("ans1");
var quizAns2 = document.getElementById("ans2");
var quizAns3 = document.getElementById("ans3");
var quizAns4 = document.getElementById("ans4");
var ansAlert = document.getElementById("game-ansAlert");
var startTime = 60;
var correctAns = 0;

function gameLoad() {
    gameH1.textContent = "Welcome to javaScript code quiz!";
    quizText.textContent ="Here are some quick rules and objective information.\nYou will have 60 seconds to answer as many questions possible.\nIncorrect answers will subtract 5 seconds off the clock.\nCorrect answers will add 3 seconds back.\nThe game ends when all questions are answerd or the timer hits 0.\nYour score is how much time you have left + your correct answers\nGood Luck! ";
    quizAns1.style.display = "none";
    quizAns2.style.display = "none";
    quizAns3.style.display = "none";
    quizAns4.style.display = "none";
    ansAlert.style.display = "none";
    quizStartEl.addEventListener("click",quest1);
}
function quest1() {
    timer();
    gameH1.textContent = "";
    quizText.textContent ="Questinon 1";
    quizAns1.textContent = "1. Answer";
    quizAns2.textContent = "2. Answer";
    quizAns3.textContent = "3. Answer";
    quizAns4.textContent = "4. Answer";
    quizStartEl.style.display = "none"
    quizAns1.style.display = "block";
    quizAns2.style.display = "block";
    quizAns3.style.display = "block";
    quizAns4.style.display = "block";
    ansAlert.style.display = "none";
    quizAns1.addEventListener("click", correct);
    quizAns2.addEventListener("click",wrong);
    quizAns3.addEventListener("click", wrong);
    quizAns4.addEventListener("click",wrong);
    
}
function quest2() {
    score.textContent = correctAns;
    gameH1.textContent = "";
    quizText.textContent ="Questinon 2";
    quizAns1.textContent = "1. Answer";
    quizAns2.textContent = "2. Answer";
    quizAns3.textContent = "3. Answer";
    quizAns4.textContent = "4. Answer";
    quizStartEl.style.display = "none"
    quizAns1.style.display = "block";
    quizAns2.style.display = "block";
    quizAns3.style.display = "block";
    quizAns4.style.display = "block";
    ansAlert.style.display = "none";
    quizAns1.addEventListener("click", wrong);
    quizAns2.addEventListener("click",correct);
    quizAns3.addEventListener("click", wrong);
    quizAns4.addEventListener("click", wrong);
    
}
function wrong() {
  ansAlert.text = "Wrong Answer3!"
  ansAlert.style.display = "block";
  startTime = startTime - 5;
  quest3()
}
function correct() {
  ansAlert.text = "Correct!"
  ansAlert.style.display = "block";
  startTime = startTime+ 3;
  correctAns++;
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


  
  
  
