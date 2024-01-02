var scores = document.getElementById('scores');
var quizContainer = document.getElementById('quiz');
var timeEl = document.getElementById('time');
var questionTextEl = document.getElementById('question-txt');
var choices = document.getElementById('question-choices');
var startBtn = document.getElementById('start-btn');




const questions = [
  {
    question: 'Javascript is an _____ language?',
    choices: ['Object-Orientated', 'Object-Based', 'Procedural', 'None of the above'],
    answer: 'Object-Orientated',
  },
  {
    question: 'Which of the following keywords is used to define a variable in Javascript?',
    choices: ['Var', 'let', 'Both A and B', 'None of the above'],
    answer: 'Both A and B',
  },
  {
    question: 'Which of the following methods can be used to display data in some form using Javascript',
    choices: ['document.write()','console.log()','window.alert()','All of the above'],
    answer: 'All of the above',
  },
  {
    question: 'How can a datatype be declared to be a constant type?',
    choices: ['const','var','let','constant'],
    answer: 'const',
  },
  {
    question: 'What keyword is used to check whether a given property is valid or not?',
    choices: ['in','is in','exist','lies'],
    answer: 'in',
  },
]

var timer = 30;
var currentQ = 0;
var quizOver = false;
var endScore = 0;
var EndGame = false;


function setTime() {
  var timeCounter = setInterval(function () {
    timer--;
    timeEl.textContent = timer;
    if (timer === 0 || timer < 0) {
      clearInterval(timeCounter);
    }
  }, 1000);
}


function displayNextQuestion() {
  questionTextEl.textContent = questions[currentQ].question;
  var currentQuestionChoices = questions[currentQ].choices;
  choices.innerHTML = '';
  for (var i = 0; i < currentQuestionChoices.length; i++) {
    var choiceBtn = document.createElement('button');
    choiceBtn.textContent = currentQuestionChoices[i];
    choiceBtn.setAttribute('value', currentQuestionChoices[i]);
    choices.appendChild(choiceBtn);
  }
}


function checkAnswer(event) {
  var answer = document.getElementById('question-choices');
  answerChoice = questions[currentQ].answer;
  var userAnswer = event.target.value;
  if (userAnswer !== answerChoice) {
    timer = timer - 15;
  }
  if (userAnswer === answerChoice) {
    timer = timer + 15;
    endScore ++;
  }
  // if (timer == 0){
  //   clearTimeout(timer);
  // }
  currentQ++;
  displayNextQuestion();
}



choices.addEventListener('click', checkAnswer)

startBtn.addEventListener('click', function () {
  setTime();
  displayNextQuestion();
})




// when all questions are answered or timer runs out game ends

// when game ends then i can save my score -local storage

// highscores tab   time   and quiz on page at all times    

// questions become undefined at end 
