var highScoresEl = document.getElementById('highScores');
var highScores = [];
var highScoreInitials = [];

//This function will record the users high score and add to local storage
function recordHighScore(userScore) {
    var initials = document.getElementById("scorerInitials").value;
//This bit sets the entered values to strings and then pushes them to and empty array for scores and user initials to be used in the highscores page
    localStorage.setItem("userScore",JSON.stringify(userScore));
    localStorage.setItem("initials", JSON.stringify(initials));
    highScores.push(userScore);
    highScoreInitials.push(initials);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    localStorage.setItem("highScoreInitials", JSON.stringify(highScoreInitials));

    showHighScores();

function showHighScores();



}