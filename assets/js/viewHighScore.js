var highScoresEl = document.getElementById('highScores');
var scoreButtonEl= document.getElementById('scoreButton');




//This function will create the template literal for the highscores table
function highScoreTable() {
    highScores = JSON.parse(localStorage.getItem("highScores"));
    highScoreInitials = JSON.parse(localStorage.getItem("highScoreInitials"));
    console.log(highScores, highScoreInitials);
    highScoresEl.innerHTML= `
    <h2>High Scores</h2>
    <div>
    <table id="scoresTable" class="tableStyle">
        <tr>
            <th>User:</th>
            <th>Score:</th>
        </tr>
    </table>
    <br>
    <div>
       <button class= "buttons" id="clearHighScore">Clear Table</button>
    </div>
    </div>
    `;

// This for loop will iterate through the different user entries from local storage that we have saved in our empty arrays
for (i=0; i<highScores.length; i++) {
    var tableRow= document.createElement("tr");
    tableRow.innerHTML = `
    <td>${highScoreInitials[i]}</td>
    <td>${highScores[i]}</td>
    `;
scoresTable.appendChild(tableRow);
}
//creating a variable to target the clear high scores button in my template literal
var clearTableEl= document.getElementById("clearHighScore");
clearTableEl.addEventListener("click", clearTable);

} 
// function clears the contents of the high scores page when the clear table button is pushed
function clearTable() {
    highScoresEl.innerHTML= "";
}

scoreButtonEl.addEventListener("click", highScoreTable);
