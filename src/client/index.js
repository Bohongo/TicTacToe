document.getElementById('resetGame').addEventListener('click', reset);
var id = 0;
$('.square').click(function() {
  id = $(this).attr('id');
  console.log(id);
  fetch('/api/tictactoe/' + id).then(function(res) {
    return res.json();
  }).then(function(data) {
    $('#playerTitle').text("Player " + data.Player.player_move + ", it's your move");
    $('#playerOscore').text(data.Player.playerOscore);
    $('#playerXscore').text(data.Player.playerXscore);
    document.getElementById(id).innerHTML = data.Player.boardValues[id - 1];
    checkWin(data);
  })
});

function checkWin(data) {
  if(data.Player.gameResult == 'X' || data.Player.gameResult == 'O'){
      $('#playerTitle').text("Player " + data.Player.player_move + " Wins!");
  }
  if(data.Player.gameResult == 'draw') {
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
