const questions = [
  {
    question: 'Javascript is an _____ language?',
    choices: ['Object-Orientated', 'Object-Based', 'Procedural', 'None of the above'],
    answer: 1
  },
  {
    question: 'Which of the following keywords is used to define a variable in Javascript?',
    choices: ['Var', 'let', 'Both A and B', 'None of the above'],
    answer: 2
  },
]

var timer = 30;
var currentQ = 0;
var correctAnswer = 0;
var quizOver = false;


var scores = document.getElementById('scores');
var quizContainer = document.getElementById('quiz');
var timeEl = document.getElementById('time');
var questionTextEl = document.getElementById('question-txt');
var choices = document.getElementById('question-choices');
var startBtn = document.getElementById('start-btn');




function setTime() {
  var timeCounter = setInterval(function () {
    timer--;
    timeEl.textContent = timer;
  }, 1000);
}



function displayNextQuestion() {
  questionTextEl.textContent = questions[currentQ].question;
  var currentQuestionChoices = questions[currentQ].choices;
  for (var i = 0; i < currentQuestionChoices.length; i++) {
    var choiceBtn = document.createElement('button');
    choiceBtn.textContent = currentQuestionChoices[i];
    choices.appendChild(choiceBtn);
    console.log(currentQuestionChoices);
  }
}

function checkAnswer() {
  answerChoice = questions.answer;
console.log(answer);
}









startBtn.addEventListener('click', function () {
  setTime();
  displayNextQuestion();
})





// timer that starts on btn click event listener for button id

// presented with question

//when answered wrong time is subtracted from total time

//when all questions are answered or timer runs out game ends

// when game ends then i can save my score -local storage


// highscores tab   time   and quiz on page at all times


//function for timer


//etc....


//event listener for start btn



//event listener for timer







