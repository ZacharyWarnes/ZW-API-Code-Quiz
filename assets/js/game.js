// DECLARE element links for HTML
var timerEL = document.getElementById('timer');
var startButtonEl= docuemnt.getElementById('startbutton');
var questionPosition= 0;
var currentQuestion = questions[questionPosition];
var timeLeft = 0;

// DECLARE countdown in number

// DECLARE questions by array list of objects

var questions = [
    {
        // question:
        // answer:
        // correct answer:
    },
        
    {
        //question
        //answer
        //correct answer
    },
        
    {
        //question
        //answer
        //correct answer
    },
];

//function 'startGame' 

    //hide start screen
    

    //display the first question

    //set the starting value of 'countdown'

    //start the timer
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
        timeLeft --;
        timerEL.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            endGame();
        }
    })

} 
        //IF countdown === 0 THEN endGame()

//Function 'answerQuestion'

    // If the answer is wrong 
        
        //THEN we need to subtract from 'countdown' 

//display the next question

// displayCurrentQuestion();

//Display Current question 
// function displayCurrentQuestion
