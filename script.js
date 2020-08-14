var scoresBtnEl= document.getElementById("view-scores");
var timeTextEl =document.getElementById("time-text");
var timerEl = document.getElementById("timer");
var gameH1 = document.getElementById("game-h1");
var quizText = document.getElementById("game-text");
var mainBtnEl= document.getElementById("btn-row");
var quizStartEl = document.getElementById("start-game");
var quizAns1 = document.createElement("button");
var quizAns2 = document.createElement("button");
var quizAns3 = document.createElement("button");
var quizAns4 = document.createElement("button");
var ansAlert = document.getElementById("game-ansAlert");
var currScore = document.getElementById("current-score")
var startTime = 60;
var correctAns = 0;
var i = 0;
gameLoad()
                        
function gameLoad() {
    gameH1.textContent = "Welcome to javaScript code quiz!";
    quizText.textContent ="Here are some quick rules and objective information.\nYou will have 60 seconds to answer as many questions possible.\nIncorrect answers will subtract 10 seconds off the clock.\nCorrect answers will add 15 seconds back.\nThe game ends when all questions are answerd or the timer hits 0.\nYour score is how much time you have left + your correct answers\nGood Luck! ";
    ansAlert.style.display = "none";
    quizStartEl.addEventListener("click", start);
}
function start() {
  watcher();
  timer();
  quizStartEl.style.display = "none";
  i++;
}
function wrong() {
  startTime = startTime - 5;
  console.log("wrong")
}
function correct() {
  startTime += 15;
  correctAns++;
  i++;
  quizAns1.removeEventListener("click", correct);
  quizAns2.removeEventListener("click", correct);
  quizAns3.removeEventListener("click", correct);
  quizAns4.removeEventListener("click", correct);
  console.log("correct")
}
function watcher() {
    var watcherInterval = setInterval(function() {
      currScore.textContent = correctAns;
      caller();
    }, 1000);
}
function timer() {
    var timerInterval = setInterval(function() {
      timerEl.textContent = startTime
      startTime--;
      if ((startTime === 0 || i===10)) {
        // timerEl.textContent = 0;
        clearInterval(timerInterval);
      }
    }, 1000);
}
function caller(){
  
  if (i===1) {
    quest1();
  } 
  if (i===2) {
    quest2();
  } 
  if (i===3) {
    quest3();
  } 
  if (i===4) {
    quest4();
  } 
  if (i===5) {
    quest5();
  } 
  if (i===6) {
    quest6();
  } 
  if (i===7) {
    quest7();
  } 
  if (i===8) {
    quest8();
  } 
  if (i===9) {
    quest9();
  } 
  if (i===10) {
    quest10();
  } 
}
function ansRender(){
    mainBtnEl.appendChild(quizAns1);
    mainBtnEl.appendChild(quizAns2);
    mainBtnEl.appendChild(quizAns3);
    mainBtnEl.appendChild(quizAns4);
    quizAns1.setAttribute("class", "btn btn-secondary btn-md")
    quizAns2.setAttribute("class", "btn btn-secondary btn-md")
    quizAns3.setAttribute("class", "btn btn-secondary btn-md")
    quizAns4.setAttribute("class", "btn btn-secondary btn-md")
}
function endGame(){

}
function quest1() {
    gameH1.textContent = "";
    quizText.textContent = "Which company developed JavaScript?";
    quizAns1.textContent = "Netscape";
    quizAns2.textContent = "Google";
    quizAns3.textContent = "Microsoft";
    quizAns4.textContent = "Apple";
    ansRender();
    ansAlert.style.display = "none";
    quizAns1.addEventListener("click", correct);
    quizAns2.addEventListener("click", wrong);
    quizAns3.addEventListener("click", wrong);
    quizAns4.addEventListener("click", wrong);
}
function quest2() {
  gameH1.textContent = "";
  quizText.textContent = "What is 'this' keyword in JavaScript?";
  quizAns1.textContent = "'This' keyword refers to the object that called any object.";
  quizAns2.textContent = "'This' keyword refers to that object.";
  quizAns3.textContent = "A keyword that is undefined.";
  quizAns4.textContent = "'This' keyword refers to the object from where it was called.";
  ansRender();
  ansAlert.style.display = "none";
  quizAns1.addEventListener("click", wrong);
  quizAns2.addEventListener("click", wrong);
  quizAns3.addEventListener("click", wrong);
  quizAns4.addEventListener("click", correct);
    
}
function quest3() {
  gameH1.textContent = "";
  quizText.textContent = "Which symbol is used for single line comments in Javascript?";
  quizAns1.textContent = " #// ";
  quizAns2.textContent = " // ";
  quizAns3.textContent = " /* */ ";
  quizAns4.textContent = " ;--; ";
  ansRender();
  ansAlert.style.display = "none";
  quizAns1.addEventListener("click", wrong);
  quizAns2.addEventListener("click", correct);
  quizAns3.addEventListener("click", wrong);
  quizAns4.addEventListener("click", wrong);
    
}
function quest4() {
  gameH1.textContent = "";
  quizText.textContent = "Which symbol is used for multi line comments in Javascript?";
  quizAns1.textContent = " #// ";
  quizAns2.textContent = " // ";
  quizAns3.textContent = " /* */ ";
  quizAns4.textContent = " ;--; ";
  ansRender();
  ansAlert.style.display = "none";
  quizAns1.addEventListener("click", wrong);
  quizAns2.addEventListener("click", wrong);
  quizAns3.addEventListener("click", correct);
  quizAns4.addEventListener("click", wrong);
    
}
function quest5() {
  gameH1.textContent = "";
  quizText.textContent = " What are all the looping structures in JavaScript?";
  quizAns1.textContent = "For, Interval, Do-it ";
  quizAns2.textContent = "If, While, Do-something ";
  quizAns3.textContent = "For, While, Do-while ";
  quizAns4.textContent = "For, While, Do-for ";
  ansRender();
  ansAlert.style.display = "none";
  quizAns1.addEventListener("click", wrong);
  quizAns2.addEventListener("click", wrong);
  quizAns3.addEventListener("click", correct);
  quizAns4.addEventListener("click", wrong);
    
}
function quest6() {
  gameH1.textContent = "";
  quizText.textContent = "____ checks only for equality in value?";
  quizAns1.textContent = " =-+ ";
  quizAns2.textContent = " = ";
  quizAns3.textContent = " === ";
  quizAns4.textContent = " == ";
  ansRender();
  ansAlert.style.display = "none";
  quizAns1.addEventListener("click", wrong);
  quizAns2.addEventListener("click", wrong);
  quizAns3.addEventListener("click", wrong);
  quizAns4.addEventListener("click", correct);
    
}
function quest7() {
  gameH1.textContent = "";
  quizText.textContent = "____ is a strict equality test and returns false if either the value or the type of two variables are different.";
  quizAns1.textContent = "==&== ";
  quizAns2.textContent = " =?= ";
  quizAns3.textContent = " === ";
  quizAns4.textContent = " = ";
  ansRender();
  ansAlert.style.display = "none";
  quizAns1.addEventListener("click", wrong);
  quizAns2.addEventListener("click", wrong);
  quizAns3.addEventListener("click", correct);
  quizAns4.addEventListener("click", wrong);
    
}
function quest8() {
  gameH1.textContent = "";
  quizText.textContent = "How many types of Pop up boxes available in JavaScript?";
  quizAns1.textContent = " 3 ";
  quizAns2.textContent = " 4 ";
  quizAns3.textContent = " 1 ";
  quizAns4.textContent = " As many asy you want! ";
  ansRender();
  ansAlert.style.display = "none";
  quizAns1.addEventListener("click", correct);
  quizAns2.addEventListener("click", wrong);
  quizAns3.addEventListener("click", wrong);
  quizAns4.addEventListener("click", wrong);
    
}
function quest9() {
  gameH1.textContent = "";
  quizText.textContent = " Which keyword is used to print the text in the screen?";
  quizAns1.textContent = " this ";
  quizAns2.textContent = " alert ";
  quizAns3.textContent = " write ";
  quizAns4.textContent = " cout ";
  ansRender();
  ansAlert.style.display = "none";
  quizAns1.addEventListener("click", wrong);
  quizAns2.addEventListener("click", wrong);
  quizAns3.addEventListener("click", correct);
  quizAns4.addEventListener("click", wrong);
    
}
function quest10() {
    gameH1.textContent = "";
    quizText.textContent = "Which company developed Jscript?";
    quizAns1.textContent = "Netscape";
    quizAns2.textContent = "Google";
    quizAns3.textContent = "Microsoft";
    quizAns4.textContent = "Apple";
    ansRender();
    ansAlert.style.display = "none";
    quizAns1.addEventListener("click", wrong);
    quizAns2.addEventListener("click", wrong);
    quizAns3.addEventListener("click", correct);
    quizAns4.addEventListener("click", wrong);
}
