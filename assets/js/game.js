// DECLARE element links for HTML
var timerEL = document.getElementById('timer');
var startButtonEl= docuemnt.getElementById('startbutton');
var questionPosition= 0;
var currentQuestion = questionArray[questionPosition];
var timeInterval;


// DECLARE countdown in number

// DECLARE questions by array list of objects



//function 'startGame' 

    //hide start screen
    

    //display the first question

// `<h2>//Question</h2>
//             <h3 id="showQuestion">Test</h3>
//         </div>
//         <div class="answers">
//             <h2>//Answers</h2>
//             <button class="buttons" id="answer1" data-answer = "0"></button>
//             <button class="buttons" id="answer2" data-answer = "1"></button>
//             <button class="buttons" id="answer3"></button>
//             <button class="buttons" id="answer4"></button>
//         </div>
//     </div>   
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
    })

} 
function endGame() {
    clearInterval(timeInterval);
}

//An array of questions for the quiz game
var questionArray = [
    {
        id: 1,
        question: "What data type has the value of true or false in javascript?",
        answer: ["String", "Number", "Boolean", "Pizza"],
        correctAnswer: "Boolean" 
    },
        
    {
        id: 2,
        question: "The contents of a function should be wrapped in what?",
        answer: ["parenthasis", "Square brackets", "Pizza", "Curly brackets"],
        correctAnswer: "Curly brackets"
    },
        
    {
        //question
        //answer
        //correct answer
    },
];

function showQuestions (questionPosition) {

    //Creating Elements for template literal
    var questionEl = document.getElementById("showQuestion");
    var firstAnswerEl = docuemnt.getElementById("answer1");
    var secondAnswerEl = document.getElementById("answer2");
    var thirdAnswerEL = document.getElementById("answer3");
    var fourthAnswerEl = document.getElementById("answer4");

    //Show the question for template literal
    questionEl.textContent = questionArray[questionPosition].question;

    //Show answer options for template literal
    firstAnswerEl.textContent = "1. " + questionArray[questionPosition].answers[0];
    secondAnswerEl.textContent = "2. " + questionArray[questionPosition].answers[1];
    thirdAnswerEL.textContent = "3. " + questionArray[questionPosition].answer[2];
    fourthAnswerEl.textContent = "4. " + questionArray[questionPosition].answer[3];


}
//Function 'answerQuestion'

    // If the answer is wrong 
        
        //THEN we need to subtract from 'countdown' 

//display the next question

// displayCurrentQuestion();

//Display Current question 
// function displayCurrentQuestion

//function recordHighScore