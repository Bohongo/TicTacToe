console.log("CONNECTED");
document.getElementById('board').addEventListener('click', func);


function func(e) {
  var id = e.target.id;
  console.log(e);
  console.log('id: ' +id);
  fetch('/api/tictactoe/'+ id).then(function(res){
    console.log(res);
    return res.json();
  }).then(function(data){
    console.log(data);
      document.getElementById(id).innerHTML = data.Player.boardValues[id - 1];
  })
};
