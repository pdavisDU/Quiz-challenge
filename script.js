//created variable containing questions options and correct answer
var questions = [
  "What is the first letter of the alphabet?",
  "What NFL team is named after a color?",
  "What instrument has strings?",
  "What is the first month of the year?",
];

var option1 = ["B", "Browns", "Flute", "February"];
var option2 = ["C", "Chiefs", "Guitar", "April"]
var option3 = ["A", "Cowboys", "Horn", "June"]
var option4 = ["D", "Patriots", "Piano", "January"]

var correct = ["A", "Browns", "Guitar", "January"]
// var timer = 100;
// var count;
var question = document.querySelector(".questionHere");
var startBtn = document.querySelector(".start-btn");
var timerText = document.querySelector(".timer");
var scoresUl = document.querySelector(".scores-list");
var op1 = document.querySelector("#option1");
var op2 = document.querySelector("#option2");
var op3 = document.querySelector("#option3");
var op4 = document.querySelector("#option4");
var resetBtn = document.querySelector(".reset")
var h1 = document.querySelector("h1");
var p = document.querySelector("p");

var timer = 40;
var score = 0;

var opButton = document.querySelector(".option")
var questionIndex = 0;
var option1Index = 0;
var option2Index = 0;
var option3Index = 0;
var option4Index = 0;

var savedScores = JSON.parse(localStorage.getItem("score")) || [];
console.log(savedScores);

// function displayQ() {
//   if (q < questions.length) {
//     question.textContent = questions[q].question;
//     opA.textContent = questions[q].selection[0];
//     opB.textContent = questions[q].selection[1];
//     opC.textContent = questions[q].selection[2];
//     opD.textContent = questions[q].selection[3];
//   } else {
//     gameOver();
//   }
// }

// startBtn.addEventListener("click", function (event) {
//   //timer();
//   displayQ();
// });


function displayQ() {

  question.textContent = questions[questionIndex];
  op1.textContent = option1[option1Index];
  op2.textContent = option2[option2Index];
  op3.textContent = option3[option3Index];
  op4.textContent = option4[option4Index];

  for (var i=0; i < opButton.length; i++) {
    var buttons = opButton[i];
    buttons.addEventListener("click", next);
  };
};

function next(event) {

  questionIndex++;
  op1++;
  op2++;
  op3++;
  op4++;
  displayQ();

  if (questionIndex >= questions.length) {
    endGame();
  }
}

startBtn.addEventListener("click", startGame);

function startGame() {
  startBtn.style.display = "none";
  h1.style.display = "none";
  p.style.display = "none";
  resetBtn.style.display = "none";

  displayQ();

  op1.style.display = "block";
  op2.style.display = "block";
  op3.style.display = "block";
  op4.style.display = "block";
  question.style.display = "inline";
 

  var gameTimer = setInterval(() => {
    timer--;
    timerText.textContent = "Time left: " + timer;

    if (timer <= 0) {
      clearInterval(gameTimer);
      endGame();
    }
  }, 1000);

}
