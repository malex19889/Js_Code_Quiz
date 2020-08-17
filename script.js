var scoresBtnEl = document.getElementById("view-scores");
var scoreDisplay = document.getElementById("score-display");
var sideText = document.getElementById("side-text");
var timeTextEl = document.getElementById("time-text");
var timerEl = document.getElementById("timer");
var gameH1 = document.getElementById("game-h1");
var quizText = document.getElementById("game-text");
var mainBtnEl = document.getElementById("btn-row");
var quizStartEl = document.getElementById("start-game");
var ansAlert = document.getElementById("game-ansAlert");
var currScore = document.getElementById("current-score");
var finalScore = 0;
var playerSave;
var startTime = 60;
var correctAns = 0;
var incorrectAns = 0;
var increment = 0;
// function to render start of game
function gameLoad() {
  gameH1.textContent = "Welcome to javaScript code quiz!";
  quizText.textContent =
    "Here are some quick rules and objective information.\nYou will have 60 seconds to answer as many questions possible.\nIncorrect answers will subtract 10 seconds off the clock.\nCorrect answers will add 5 seconds back.\nThe game ends when all questions are answerd or the timer hits 0.\nYour score is how much time you have left + your correct answers\nGood Luck! ";
  ansAlert.style.display = "none";
  scoresBtnEl.addEventListener("click", viewScores);
  quizStartEl.addEventListener("click", start);
}
// function to view local storage high score
function viewScores() {
  sideText.textContent = "High Score";
  var highScore = JSON.parse(localStorage.getItem("playerStats"));
  scoreDisplay.textContent = highScore.finalScore;
}
// function to start game timer, render 1st question, and hide start button
function start() {
  timer();
  renderQuestions();
  quizStartEl.style.display = "none";
}
// function to render answers and questions from question array
function renderQuestions() {
  if ((increment === questions.length)|| (startTime <= 0)) {
<<<<<<< HEAD
=======
    startTime = 0;
>>>>>>> 82c201066d7d91682b3d89a26808446df0238067
    endGame();
  } else {
    // hide h1 element text
    gameH1.textContent = "";
    // render game stats
    currScore.textContent = correctAns;
    // set game question
    quizText.textContent = questions[increment].question;
    // loop to set answers and render buttons
    for (var i = 0; i < questions[increment].answers.length; i++) {
      var quizAns = document.createElement("button");
      mainBtnEl.appendChild(quizAns);
      quizAns.setAttribute("class", "btn btn-secondary btn-md");
      quizAns.textContent = questions[increment].answers[i];
      // quiz button event listener
      quizAns.addEventListener("click", ansListener);
    }
  }
}
// function to apply click listener peramiters
function ansListener() {
  var quizAnsState = this.textContent;
  if (quizAnsState === questions[increment].correctAns) {
    correct();
  } else {
    wrong();
  }
}
// function for wrong answer selection in quiz answers
function wrong() {
  // penelty for incorrect answer
  startTime -= 10;
  // increment wrong choice
  incorrectAns++
<<<<<<< HEAD

  if ((startTime <= 0)) {
=======
  if ((startTime <= 0)) {
    startTime = 0;
>>>>>>> 82c201066d7d91682b3d89a26808446df0238067
    endGame();
  }
}
function correct() {
  // award for correct answer
  startTime += 5;
  // increment correct answer
  correctAns++;
  // increment increment
  increment++;
  // clear html content before rendering next questions
  mainBtnEl.innerHTML = "";
  // function call to render new question
  renderQuestions();
}
// timer function
function timer() {
  var timerInterval = setInterval(function () {
    timerEl.textContent = startTime;
    startTime--;
    if (startTime === 0 || increment === questions.length) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}
// render end of game content
function renderEndInput() {
  var endInfo = document.createElement("h6");
  mainBtnEl.append(endInfo);
  endInfo.textContent = "Please enter your initials";
  var endForm = document.createElement("form");
  mainBtnEl.append(endForm);
  var endInits = document.createElement("input");
  endInits.setAttribute("id", "inits");
  endForm.append(endInits);
  var endBtn = document.createElement("button");
  endBtn.setAttribute("id", "saveBtn");
  endBtn.setAttribute("class", "btn btn-secondary btn-md");
  endBtn.textContent = "Save";
  endForm.append(endBtn);
  var playAgain = document.createElement("button");
  playAgain.setAttribute("id", "play-again");
  playAgain.setAttribute("class", "btn btn-secondary btn-md");
  playAgain.textContent = "Play again";
  endForm.append(playAgain);
  console.log(startTime)
  finalScore = startTime + correctAns;
  quizText.textContent = "Your score was " + finalScore;
}
// end of game function to change display
function endGame() {
  currScore.textContent = correctAns + " Correct ansers and "+ incorrectAns+ " Incorrect selections";
  gameH1.textContent = "Game Over";
  gameH1.setAttribute("style", "color: red");
  mainBtnEl.innerHTML = "";
  renderEndInput();
  scoresBtnEl.style.display = "none";
  timeTextEl.style.display = "none";
  timerEl.style.display = "none";
  saveBtn.addEventListener("click", save);
}
// save button peramiters
function save(e) {
  e.preventDefault();
  var playerInitials = document.getElementById("inits");
  playerSave = { playerInitials, finalScore };
  localStorage.setItem("playerStats", JSON.stringify(playerSave));
}
// game questions and answers
var questions = [
  {
    question: "Which company developed JavaScript?",
    answers: ["Netscape", "Google", "Microsoft", "Apple"],
    correctAns: "Netscape",
    questionHint: "",
  },
  {
    question: "What is 'this' keyword in JavaScript?",
    answers: [
      "'This' keyword refers to the object that called any object.",
      "'This' keyword refers to that object.",
      "A keyword that is undefined.",
      "'This' keyword refers to the object from where it was called.",
    ],
    correctAns: "'This' keyword refers to the object from where it was called.",
    questionHint: "",
  },
  {
    question: "Which symbol is used for single line comments in Javascript?",
    answers: ["#// ", " // ", "/* */", " ;--; "],
    correctAns: " // ",
    questionHint: "",
  },
  {
    question: "Which symbol is used for multi line comments in Javascript?",
    answers: [" #// ", " // ", " /* */ ", " ;--; "],
    correctAns: " /* */ ",
    questionHint: "",
  },
  {
    question: " What are all the looping structures in JavaScript?",
    answers: [
      "For, Interval, Do-it ",
      "If, While, Do-something ",
      "For, While, Do-while ",
      "For, While, Do-for ",
    ],
    correctAns: "For, While, Do-while ",
    questionHint: "",
  },
  {
    question: "____ checks only for equality in value?",
    answers: [" =-+ ", " = ", " === ", " == "],
    correctAns: " == ",
    questionHint: "",
  },
  {
    question:
      "____ is a strict equality test and returns false if either the value or the type of two variables are different.",
    answers: ["==&== ", " =?= ", " === ", " = "],
    correctAns: " === ",
    questionHint: "",
  },
  {
    question: "How many types of Pop up boxes available in JavaScript?",
    answers: [" 3 ", " 4 ", " 1 ", " As many asy you want! "],
    correctAns: " 3 ",
    questionHint: "",
  },

  {
    question: "Which company developed Jscript?",
    answers: ["Netscape", "Google", "Microsoft", "Apple"],
    correctAns: "Microsoft",
    questionHint: "",
  },
  {
    question: " Which keyword is used to print the text in the screen?",
    answers: [" this ", " alert ", " write ", " cout "],
    correctAns: " write ",
    questionHint: "",
  },
];
// call game load function
gameLoad();