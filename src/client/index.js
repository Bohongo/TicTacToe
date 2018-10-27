document.getElementById('resetGame').addEventListener('click', reset);

var id = 0;
$('.square').click(function() {
  id = $(this).attr('id');
  fetch('/api/tictactoe/' + id).then(function(res) {
    return res.json();
  }).then(function(data) {
    console.log(data);
    document.getElementById(id).innerHTML = data.Player.boardValues[id - 1];
    if(data.Player.gameResult != ''){
        alert(data.Player.player_move + " Win!");
    }
  })
});


function reset(e) {
  fetch('/api/reset/').then(function(res) {
    for (var i = 1; i <= 9; i++) {
      document.getElementById(i).innerHTML = '';
    }
  })
}
