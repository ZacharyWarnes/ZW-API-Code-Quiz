// DECLARE element links for HTML
var timerEL = document.getElementById('timer');
var startButtonEl= document.getElementById('startButton');
var currentQuestionEl = document.getElementById('questions');
var questionPosition= 0;
var timeInterval;


// DECLARE countdown in number

// DECLARE questions by array list of objects



//function 'startGame' 

    //hide start screen
    

    //display the first question

// 
//     <div class="timer">
//         <h2>//Timer</h2>
//         <p id="countdown"></p>
//     </div>`

    //start the timer
function countdown() {
    var timeLeft = 75;
    timeInterval = setInterval(function () {
        timeLeft --;
        timerEL.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);

} 

//This function ends the quiz when all questions have been answered or when the timer reached "0"
function endGame() {
    clearInterval(timeInterval);
}

//An array of questions for the quiz game
var questionArray = [
    {
        
        question: "What data type has the value of true or false in javascript?",
        answer: ["String", "Number", "Boolean", "Pizza"],
        correctAnswer: "Boolean" 
    },
        
    {
        
        question: "The contents of a function should be wrapped in what?",
        answer: ["parenthasis", "Square brackets", "Pizza", "Curly brackets"],
        correctAnswer: "Curly brackets"
    },
        
    // {
        //question
        //answer
        //correct answer
    // },
];

var questionTemplate = `<h2>//Question</h2>
                 <h3 id="showQuestion">Test</h3>
             </div>
             <div class="answers">
                 <h2>//Answers</h2>
                 <button class="buttons" id="answer1" data-answer = "0"></button>
                 <button class="buttons" id="answer2" data-answer = "1"></button>
                 <button class="buttons" id="answer3" data-answer = "2"></button>
                 <button class="buttons" id="answer4" data-answer = "3"></button>
             </div>
         </div>`  

var currentQuestion = questionArray[questionPosition];

function displayCurrentQuestion () {

    //Clearing "questions" section of HTML before appending template variable
    currentQuestionEl.innerHTML = '';
    currentQuestionEl.append(questionTemplate);

    //Creating Elements for template literal
    var questionEl = document.getElementById("showQuestion");
    var firstAnswerEl = document.getElementById("answer1");
    var secondAnswerEl = document.getElementById("answer2");
    var thirdAnswerEL = document.getElementById("answer3");
    var fourthAnswerEl = document.getElementById("answer4");

    //Show the question for template literal
    questionEl.textContent = questionArray[questionPosition].question;

    //Show answer options for template literal
    firstAnswerEl.textContent = "1. " + questionArray[questionPosition].answer[0];
    secondAnswerEl.textContent = "2. " + questionArray[questionPosition].answer[1];
    thirdAnswerEL.textContent = "3. " + questionArray[questionPosition].answer[2];
    fourthAnswerEl.textContent = "4. " + questionArray[questionPosition].answer[3];

    //Adding a listener event to check if the answer is correct
    firstAnswerEl.addEventListener("click", answerQuestion);
    secondAnswerEl.addEventListener("click", answerQuestion);
    thirdAnswerEL.addEventListener("click", answerQuestion);
    fourthAnswerEl.addEventListener("click", answerQuestion);

     
}
// This function checks your answer selection against the correct answer, interacts with the countdown timer for incorrect answers
function answerQuestion() {
    var userAnswer = this;
    if (questionArray[questionPosition].answer[userAnswer.dataset.answer] == questionArray[questionPosition].correctAnswer) {
        userAnswer.textContent = "Your Answer Is Correct";
        correctAnswer ++;
    } else {
        timeLeft = timeLeft - 5;
        userAnswer.textContent = "Your Answer Is Incorrect";
    }
    questionPosition++;
    setTimeout(nextQuestion, 1000);
    
}


//This function moved to the next question after a choice is made 
function newQuestion () {
    if (questionPosition < questionArray.length && timeLeft > 0) {
        displayCurrentQuestion(questionPosition);
    } else {
        endGame();
    }
}


// displayCurrentQuestion();

//Display Current question 
// function displayCurrentQuestion

//function recordHighScore

startButtonEl.addEventListener("click", displayCurrentQuestion);