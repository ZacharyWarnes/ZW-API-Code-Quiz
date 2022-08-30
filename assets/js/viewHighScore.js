var highScoresEl = document.getElementById('highScores');

//This function will create the template literal for the highscores table
function highScoreTable() {
    highScoresEl.innerHTML= `
    <h2>High Scores</h2>
    <div class="tableStyle">
    <table id="scoresTable">
        <tr>
            <th>User</th>
            <th>Score</th>
        </tr>
    </table>
    </div>
    <br>
    <br>
    <div> <button class= "buttons" id= "clearHighScore>Clear Table</button>
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

} 

