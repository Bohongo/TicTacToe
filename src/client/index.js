var id = 0;
$('.square').click(function() {
id = $(this).attr('id');
  fetch('/api/tictactoe/'+ id).then(function(res){
    return res.json();
  }).then(function(data){
      document.getElementById(id).innerHTML = data.Player.boardValues[id - 1];
  })
});
