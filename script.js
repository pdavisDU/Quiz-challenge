//created variable containing questions options and correct answer

const qArray = [
  {
    text: "What is the first letter of the alphabet?",
    choices: ["A", "B", "C", "D"],
    answer: "A",
  },

  {
    text: "What NFL team is named after a color?",
    choices: ["Chiefs", "Browns", "Cowboys", "Patriots"],
    answer: "Browns",
  },

  {
    text: "What instrument has strings?",
    choices:
      ["Horn",
      "Flute",
      "Guitar",
      "Piano"],
    answer: "Guitar",
  },

  {
    text: "What is the first month of the year?",
    choices: ["February", "April", "June", "January"],
    answer: "January",
  },
];
// var timer = 100;
// var count;
var startQuiz = document.getElementById('startBtn');
var timer = document.querySelector('.countdown');
var timeCount = 40;
var qIndex = 0;
var scoreNow = 0;
var onLoad = document.getElementById('start-page');
var qLoad = document.getElementById('quiz');
var newQuestion = document.getElementById('question');

var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');
var choiceBtn = document.getElementById('choiceBtn');
var showInitials = document.getElementById('score-initials');
var enter = document.getElementById('enter');
var scores = document.getElementById('scores');
var init = document.getElementById('name');
var scoreBoard = document.getElementById('scoreEnter');

// var tText = document.getElementById('time');
// var scoresUl = document.getElementById("score-count");
// var ques = document.getElementById('q');
// var choices = document.getElementById('choices');
// var gameOver = document.getElementById('over');
// var scoreBoard = document.getElementById('score-board');
// var op1 = document.querySelector("#option1");
// var op2 = document.querySelector("#option2");
// var op3 = document.querySelector("#option3");
// var op4 = document.querySelector("#option4");
// var resetBtn = document.querySelector(".reset")
// var h1 = document.querySelector("h1");
// var p = document.querySelector("p");

qLoad.style.display = 'none';
showInitials.style.display = 'none';
startQuiz.addEventListener('click', startNow);

function startNow() {
  onLoad.style.display = 'none';
  qLoad.style.display = 'block';
  startCount();
  loadQuiz();
}
function startCount() {
  var countdown = setInterval(function (){
    timeCount--;
    timer.textContent = timeCount + ' left';
    if (timeCount === 0 || timeCount < 0){
      clearInterval(countdown);
      highScore();
    }
  }, 1000);
}
function loadQuiz(){
  newQuestion.textContent = qArray[qIndex].text;
  choice1.textContent = qArray[qIndex].choices[0];
  choice2.textContent = qArray[qIndex].choices[1];
  choice3.textContent = qArray[qIndex].choices[2];
  choice4.textContent = qArray[qIndex].choices[3];
}
qLoad.addEventListener('click', function(event){
  if(event.target.matches('.choiceBtn')){
    if(event.target.textContent === qArray[qIndex].answer){
      scoreNow++;
      console.log("You got it right");
    } else {
      timeCount -=10;
      console.log('Incorrect, 10 seconds deducted');
    }
    qIndex++;

    if(qIndex >= qArray.length){
      highScore();
    } else {
      loadQuiz();
    }
  }
});

function finish(){
  var startOver = confirm('You got' + scoreNow);
  if(startOver === true) {
    window.location.reload();
  }
}
function highScore(){
  qLoad.style.display = 'none';
  localStorage.setItem('score', scoreNow);
  showInitials.style.display = 'block';

  enter.addEventListener('click',function(event){
    timer.style.display = 'none';
  })
}


// var savedScores = JSON.parse(localStorage.getItem("score")) || [];
// console.log(savedScores);

