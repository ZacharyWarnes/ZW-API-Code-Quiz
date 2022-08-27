// DECLARE element links for HTML
var timerEL = document.getElementById('timer');
var startButtonEl= document.getElementById('startButton');
var currentQuestionEl = document.getElementById('questions');
var questionPosition= 0;
var timeLeft = 0;
var userScoreEl = document.getElementById('userScore');
var timeInterval;


//This function starts the countdown timer and clears the countdown when we reach the end of the the game
function countdown() {
    timeLeft = 75;
    timeInterval = setInterval(function () {
        timeLeft --;
        timerEL.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
console.log("hello");
} 

//This function ends the quiz when all questions have been answered or when the timer reached "0"
function endGame() {
    var userScore = (correctAnswer * 20);
    //clear scores section of html before template literal is added. Template literal populates user score and gives option to save score and start again 
    userScoreEl.innerHTML = '';
    userScoreEl.innerHTML = `
    <div>
      <h2>How did you do?</h2>
        <p>${userScore}</p>
    </div>
    <div>
        <form id=scorerInitials method= POST>
          <label for ="scorerInitials">Enter Your Initials:</label><br>
          <input type="text" placeholder="ex: ZW" name= "scorerInitials" id= "scorerInitials"/><br><br>
          <input type ="submit" id= "loggedScore"value="submit"/>
        </form>
    </div>
    <br><br>
    <div>
        <button class="buttons" id="restartQuiz">Go Again!</button>
    </div>
    `
var restartQuizEl= document.getElementById("restartQuiz");
var loggedScoreEl= document.getElementById("loggedScore");
restartQuizEl.addEventListener("click", startGame);
loggedScoreEl.addEventListener("click", function(event) {
    event.preventDefault();
    logHighScore(userScore);
});

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
        answer: ["Parenthasis", "Square brackets", "Pizza", "Curly brackets"],
        correctAnswer: "Curly brackets"
    },
        
    {
        question: "What method can you use to target an element in your html text?",
        answer: ["getElementbyId()", "addEventListener()", "preventDefault()", "makePizza()",],
        correctAnswer: "getElementbyId()"
    },

     {
        question: "Inside which HTML element do we put the link to Javascript?",
        answer: ["<js>", "<javascript>","<pizzascript>","<scrip>"],
        correctAnswer: "<script>"
    },

     {
        question: "Which operator is used to assign a value to a variable?",
        answer: ["-", "*", "+", "="],
        correctAnswer: "="
    },
];



var currentQuestion = questionArray[questionPosition];

function displayCurrentQuestion () {

    //Creating Elements for template literal
    var questionEl = document.getElementById("showQuestion");
    var firstAnswerEl = document.getElementById("answer1");
    var secondAnswerEl = document.getElementById("answer2");
    var thirdAnswerEL = document.getElementById("answer3");
    var fourthAnswerEl = document.getElementById("answer4");

    //Show the question for template literal
    questionEl.textContent = currentQuestion.question;

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
        timeLeft= timeLeft - 5;
        userAnswer.textContent = "Your Answer Is Incorrect";
    }
    questionPosition++;
    setTimeout(newQuestion, 1000);
    
}


//This function moved to the next question after a choice is made 
function newQuestion () {
    if (questionPosition < questionArray.length && timeLeft > 0) {
        displayCurrentQuestion(questionPosition);
    } else {
        endGame();
    }
}

//This function starts the game and triggers the countdown timer
function gameStart() {
    
    //Start the game at the position of the first question and reset the correctAnswer score 
    questionPosition = 0;
    correctAnswer = 0;

    //hide the start button upon start
    startButtonEl.style.display ='none';
    //Appending question template literal to main page 

    currentQuestionEl.innerHTML =
    `<h2>Questions</h2>
    <h3 id="showQuestion">Test</h3>
</div>
<div class="answers">
    <h2>Answers</h2>
    <button class="buttons" id="answer1" data-answer = "0"></button>
    <button class="buttons" id="answer2" data-answer = "1"></button>
    <button class="buttons" id="answer3" data-answer = "2"></button>
    <button class="buttons" id="answer4" data-answer = "3"></button>
</div>
</div>` 
;
countdown();
displayCurrentQuestion(questionPosition);

// 
//     <div class="timer">
//         <h2>//Timer</h2>
//         <p id="timer"></p>
//     </div>`


}

//Display Current question 
// function displayCurrentQuestion

//function recordHighScore

startButtonEl.addEventListener("click", gameStart);