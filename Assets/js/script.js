const questions = [
  {
    question: 'Javascript is an _____ language?',
    choices: ['Object-Orientated','Object-Based','Procedural','None of the above'],
    answer: 1
  },
  {
    question: 'Which of the following keywords is used to define a variable in Javascript?',
    choices: ['Var','let','Both A and B','None of the above'],
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








startBtn.addEventListener('click', function(){
setTime();
displayNextQuestion();
})

function setTime(){
  var timeCounter = setInterval(function(){
    timer--;
    timeEl.textContent = timer;
  }, 1000);
}



function displayNextQuestion(){
questionTextEl.textContent = questions[currentQ].question;
var currentQuestionChoices = questions[currentQ].choices;
for (var i = 0; i < currentQuestionChoices.length; i++){
  var choiceBtn = document.createElement('button');
  choiceBtn.textContent = currentQuestionChoices[i];
  choices.appendChild(choiceBtn);
}
}






















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




// var body = document.body;
// var quizTitle = document.createElement('h1')
// var header = document.createElement('header');
// var time = document.createElement('p');
// var highScores = document.createElement('div');
// var quizHead = document.createElement('div');

// var quizCont = document.getElementById('quiz-container');
// var timer = document.getElementById('time');
// timer = 30;
// var viewScore = document.getElementById('scores');
// viewScore.textContent = 'View High Scores!';


// var mainDiv = document.getElementById('quiz');
// mainDiv.textContent = 'Javascript Quiz!';
// mainDiv.setAttribute('style','background-color: grey;');

// addEventListener('click',startButton);


// var highScores = document.getElementById('scores');

// var container = document.getElementById('main');
// var quiz = document.getElementById('quiz');
// var questionsDiv = document.getElementById('questions');
// var olAnswers = document.getElementById('answer-buttons');
// var btn1 = document.createElement('button');



// var timer = 30;
// time.textContent = 'Time';
// header.textContent = 'View High Scores!';
// header.setAttribute('style','background-color: grey; color: white; border: 2px solid black; border-radius: 10px;')
// body.appendChild(header);
// header.appendChild(time);


// quizTitle.textContent = 'JavaScript Quiz!';
// body.appendChild(quizTitle);
// quizInfo.textContent = 'This is a timed Javascript Quiz where you can test your knowledge and compare your score along with other fellow students.';
// body.appendChild(quizInfo);




