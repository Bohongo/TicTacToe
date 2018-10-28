const _ = require('lodash');
displayLeaderboard();
document.getElementById('resetGame').addEventListener('click', reset);
document.getElementById('resetScores').addEventListener('click', resetscores);

var id = 0;
$('.square').click(function() {
    id = $(this).attr('id');
    fetch('/api/tictactoe/' + id).then(function(res) {
        return res.json();
    }).then(function(data) {
        $('#playerTitle').text("Player " + data.Player.player_move + ", it's your move");
        $('#playerOscore').text(data.Player.playerOscore);
        $('#playerXscore').text(data.Player.playerXscore);
        for (var i = 0; i < data.Player.boardValues.length; i++) {
            document.getElementById(i + 1).innerHTML = data.Player.boardValues[i];
        }
        //document.getElementById(id).innerHTML = data.Player.boardValues[id - 1];
        checkWin(data);
    })
});

function displayLeaderboard() {
  fetch('/api/leaderboards/').then(function(res) {
    return res.json();
  }).then(function(data) {
    //Appenda gögnum hér í table
    for(var i = 0; i<5; i++) {
        var row = document.getElementById('leaders').insertRow(i);
        var name = row.insertCell(0);
        var gameCount = row.insertCell(1);
        var winCount = row.insertCell(2);
        var winPercentage = row.insertCell(3);
        name.innerHTML = data.Leader[i].name;
        gameCount.innerHTML = data.Leader[i].totalgames;
        winCount.innerHTML = data.Leader[i].wincount;
        winPercentage.innerHTML = ((data.Leader[i].wincount/data.Leader[i].totalgames)*100).toFixed(2);
    }
});
}

function checkWin(data) {
    if (data.Player.gameResult == 'X' || data.Player.gameResult == 'O') {
        $('#playerTitle').text("Player " + data.Player.player_move + " Wins!");
    }
    if (data.Player.gameResult == 'draw') {
        $('#playerTitle').text("Draw!");
    }
}

function reset(e) {
    $('#playerTitle').text("Player X, it's your move");
    fetch('/api/reset/').then(function(res) {
        for (var i = 1; i <= 9; i++) {
            document.getElementById(i).innerHTML = '';
        }
    })
}

function resetscores(e) {
    fetch('/api/resetscores/').then(function(res) {
        console.log(res);
        $('#playerXscore').text("0");
        $('#playerOscore').text("0");
    })
}
