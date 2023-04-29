// list of question and answers for the quiz
var quizQuestions = [
     {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        answers: [
            {text: 'var', correct: "true"},
            {text: 'boolean', correct:"false"},
            {text: 'string', correct: "false"},
            {text: 'number', correct: "false"},
    ],
    },
    {
        question: 'Which of the following methods can be used to display data in some form using Javascript?',
        answers:[
            {text: 'document.write().', correct:"false"},
            {text: 'console.log().', correct:"false"},
            {text: 'window.alert().', correct:"false"},
            {text: 'All of the above',correct: "true"},
        ],
    },
    {
        question: 'When an operators value is NULL, the typeof returned by the unary operator is:',
        answers:[
            {text: 'Boolean', correct:"false"},
            {text: 'Undefined', correct:"false"},
            {text: 'Object', correct:"true"},
            {text: 'Integer', correct:"false"},
        ],
    },
    {
        question: 'Which function is used to serialize an object into a JSON string in Javascript?',
        answers: [
            {text: 'parse().', correct:"false"},
            {text: 'stringify().', correct:"true"},
            {text: 'convert().', correct:"false"},
            {text: 'None of the above', correct:"false"}
        ],
    }
];

var questionEl = document.getElementById("question");
var answerBtn = document.getElementById("buttons")
var nextBtn = document.getElementById("next-btn")
var timeEl = document.querySelector('.timer')
var start = document.getElementById('start-quiz')
var currQuestion = 0;
var score = 0;
var secondsLeft = 60;

function timerDown(){
    var timeInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + ' secs left'
        if (secondsLeft < 0){
            clearInterval(timeInterval)
        }
    }, 1000);
    document.querySelector('.wrong').addEventListener("click", function(){
        secondsLeft -=10;
    })
}

function startQuiz(){
    currQuestion = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    start.addEventListener('click', function(){
            showQuiz();
            start.style.display = "none"
            timerDown();
        });
    
}

function showQuiz(){
    var currentQuestion = quizQuestions[currQuestion];
    var questionNum = currQuestion + 1;
    questionEl.innerHTML = questionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
    });
}

function resetQuiz(){
    nextBtn.style.display = "none"
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

function selectAnswer(e){
    var selectedBtn = e.target;
    var isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else {
        selectedBtn.classList.add('wrong');
    }
    nextBtn.style.display = "block"
}

function showScore(){
    resetQuiz();
    questionEl.innerHTML = `You scored ${score} out of ${quizQuestions.length}.` 
    nextBtn.innerHTML = "play Again"
    nextBtn.style.display = "block"
}

function secondNextBtn(){
    currQuestion++;
    if(currQuestion < quizQuestions.length){
        showQuiz();
    }else {
        showScore();
    }
}
nextBtn.addEventListener('click', function(){
    if(currQuestion < quizQuestions.length){
        secondNextBtn();
    }else{
        startQuiz();
    }
})

startQuiz();

var username = document.getElementById('username');
var saveScore = document.getElementById('saveScore');
var finalScore = document.getElementById('final-score')
var mostRecentScore = localStorage.getItem("mostRecentScore")

var highscore = JSONparse(localStorage.getItem("highScores"));

var maxHighScores = 4;

finalScore.inner = mostRecentScore

user


var score = {
    score: mostRecentScore,
    name: username.value
};
highscore.push(score)