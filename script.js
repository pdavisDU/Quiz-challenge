//created variable containing questions options and correct answer
var questions = [

  {
    question: "What is the first letter of the alphabet?",
    options: ["B", "C", "A", "D"],
    correct: "A"
  },
  {
    question: "What NFL team is named after a colow?",
    options: ["Browns", "Cowboys", "Patriots", "Chiefs"],
    correct: "Browns"
  },
  {
    question: "What instrument has strings?",
    options: ["Piano", "Flute", "Horn", "Guitar"],
    correct: "Guitar"
  }
];


// var timer = 100;
// var count;
var startBtn = document.querySelector(".start-btn");
var timerText = document.querySelector(".timer");
var scoresUl = document.querySelector(".scores-list");
var question = document.querySelector(".questionsHere");
var opA = document.querySelector("#opA");
var opB = document.querySelector("#opB");
var opC = document.querySelector("#opC");
var opD = document.querySelector("#opD");
var h1 = document.querySelector("h1");
var p = document.querySelector("p");


var timer =  100;
var score = 0;
var questionIndex = 0
var q = 0

var savedScores = JSON.parse(localStorage.getItem("score")) || []
console.log(savedScores);

function displayQ() {
  if (q < questions.length) {
    question.textContent = questions[q].question;
    opA.textContent = questions[q].selection[0];
    opB.textContent = questions[q].selection[1];
    opC.textContent = questions[q].selection[2];
    opD.textContent = questions[q].selection[3];
  } else {
    gameOver();
  }
}


startBtn.addEventListener("click", function (event) {
  //timer();
  displayQ();
  
});



startBtn.addEventListener("click", startGame)

function startGame() {
    startBtn.style.display = "none";
    h1.style.display = "none";
    p.style.display = "none";

  
    var gameTimer = setInterval(() => {
        timer--;
        timerText.textContent = "Time left: " + timer;

        if (timer <= 0) {
            clearInterval(gameTimer);
            endGame()
        }
    }, 1000);

    startBtn.addEventListener("click", function () {
      score++;
      questionIndex++;
      if (questionIndex > questions.length) { questionIndex = 0 }
      renderQuestion();
  })



}



