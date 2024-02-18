document.addEventListener("DOMContentLoaded", function() {
    var apiKey = "YOUR_API_KEY";
    var apiUrl = "https://api.football-data.org/v4/matches";

    fetch(apiUrl, {
        headers: {
            'X-Auth-Token': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        displayScores(data);
    })
    .catch(error => {
        console.log(error);
    });

    function displayScores(data) {
        var scoresElement = document.getElementById("scores");
        var matches = data.matches;

        for (var i = 0; i < matches.length; i++) {
            var match = matches[i];
            var homeTeam = match.homeTeam.name;
            var awayTeam = match.awayTeam.name;
            var score = match.score.fullTime.homeTeam + " - " + match.score.fullTime.awayTeam;

            var matchElement = document.createElement("div");
            matchElement.classList.add("match");
            matchElement.innerHTML = `<p>${homeTeam} vs ${awayTeam}: ${score}</p>`;
            scoresElement.appendChild(matchElement);
        }
    }
});