var scoresBtnEl= document.getElementById("view-scores");
var timeTextEl =document.getElementById("time-text");
var timerEl = document.getElementById("timer");
var gameH1 = document.getElementById("game-h1");
var quizText = document.getElementById("game-text");
var mainBtnEl= document.getElementById("btn-row");
var quizStartEl = document.getElementById("start-game");
var ansAlert = document.getElementById("game-ansAlert");
var currScore = document.getElementById("current-score");
var PlayerInitsForm = document.getElementById("player-inits");
var playerInits = document.getElementById("inits")
var saveBtn = document.getElementById("save")

var startTime = 60;
var correctAns = 0;
var increment = 0;

                        
function gameLoad() {
    gameH1.textContent = "Welcome to javaScript code quiz!";
    quizText.textContent ="Here are some quick rules and objective information.\nYou will have 60 seconds to answer as many questions possible.\nIncorrect answers will subtract 10 seconds off the clock.\nCorrect answers will add 5 seconds back.\nThe game ends when all questions are answerd or the timer hits 0.\nYour score is how much time you have left + your correct answers\nGood Luck! ";
    ansAlert.style.display = "none";
    PlayerInitsForm.style.display = "none";
    playerInits.style.display = "block"
    quizStartEl.addEventListener("click", start);
}
function start() {
  timer();
   renderQuestions();
  quizStartEl.style.display = "none";
}
function renderQuestions() {
  if (increment === questions.length) { 
    endGame();
  } else {
      gameH1.textContent="";
      currScore.textContent = correctAns;
      quizText.textContent = questions[increment].question
      for (var i = 0; i < questions[increment].answers.length; i++) {
        var quizAns = document.createElement("button")
        mainBtnEl.appendChild(quizAns);
        quizAns.setAttribute("class", "btn btn-secondary btn-md")
        quizAns.textContent = questions[increment].answers[i]
        quizAns.addEventListener("click",ansListener);
      }
      
  }
}
function ansListener(){
    var quizAnsState = this.textContent
    if ((quizAnsState === questions[increment].correctAns)) {
       correct();
    } else {
        wrong();
    }  
}
function wrong() {
  startTime -= 10;
  console.log("wrong")
}
function correct() {
  startTime += 5;
  correctAns++;
  increment++;
  console.log(correctAns)
  mainBtnEl.innerHTML = ''
  renderQuestions();
}
function timer() {
    var timerInterval = setInterval(function() {
      timerEl.textContent = startTime
      startTime--;
      if ((startTime === 0)||(increment === questions.length)) {
        clearInterval(timerInterval);
      }
    }, 1000);
}
function endGame(){
  var finalScore =  startTime + correctAns;
  
  gameH1.textContent = "Game Over"
  gameH1.setAttribute("style","color: red")
  PlayerInitsForm.style.display = "block";
  scoresBtnEl.style.display = "none";
  timeTextEl.style.display = "none";
  timerEl.style.display = "none";
  mainBtnEl.style.display = "none"
  quizText.textContent = "Your score was "+ finalScore
  saveBtn.addEventListener("click",save)
}
function save(e) {
 
  e.preventDefault() 
  var playerSave = {playerInits,};
  localStorage.setItem("playerSave", JSON.stringify(playerSave))
}
var questions = [
  {
  question: "Which company developed JavaScript?",
  answers: ["Netscape", "Google", "Microsoft", "Apple"],
  correctAns: "Netscape",
  questionHint: "",
  },
  {
  question:"What is 'this' keyword in JavaScript?",
  answers: ["'This' keyword refers to the object that called any object.", "'This' keyword refers to that object.", "A keyword that is undefined.", "'This' keyword refers to the object from where it was called."],
  correctAns: "'This' keyword refers to the object from where it was called.",
  questionHint: "",
  },
  // {
  // question: "Which symbol is used for single line comments in Javascript?",
  // answers: ["#// ", " // ", "/* */", " ;--; "],
  // correctAns: " // ",
  // questionHint: "",
  // },
  // {
  // question: "Which symbol is used for multi line comments in Javascript?",
  // answers: [" #// ", " // ", " /* */ ", " ;--; "],
  // correctAns: " /* */ ",
  // questionHint: "",
  // },
  // {
  // question: " What are all the looping structures in JavaScript?",
  // answers: ["For, Interval, Do-it ", "If, While, Do-something ", "For, While, Do-while ", "For, While, Do-for "],
  // correctAns: "For, While, Do-while ",
  // questionHint: "",
  // },
  // {
  // question: "____ checks only for equality in value?",
  // answers: [" =-+ ", " = ", " === ", " == "],
  // correctAns: " == ",
  // questionHint: "",
  // },
  // {
  // question: "____ is a strict equality test and returns false if either the value or the type of two variables are different.",
  // answers: ["==&== ", " =?= ", " === ", " = "],
  // correctAns: " === ",
  // questionHint: "",
  // },
  // {
  // question: "How many types of Pop up boxes available in JavaScript?",
  // answers: [" 3 ", " 4 ", " 1 ", " As many asy you want! "],
  // correctAns: " 3 ",
  // questionHint: "",
  // },
  
  // {
  // question: "Which company developed Jscript?",
  // answers: ["Netscape", "Google", "Microsoft", "Apple"],
  // correctAns: "Microsoft",
  // questionHint: "",
  // },
  // {
  // question: " Which keyword is used to print the text in the screen?",
  // answers: [" this ", " alert ", " write ", " cout "],
  // correctAns: " write ",
  // questionHint: "",
  // },
];
gameLoad()
// endGame();