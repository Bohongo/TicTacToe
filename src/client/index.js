console.log("CONNECTED");
document.getElementById('board').addEventListener('click', move);


function move(e) {
  var id = e.target.id;
  console.log(e);
  console.log('id: ' +id);
  fetch('/api/tictactoe/'+ id).then(function(res){
    console.log(res);
    return res.json();
  }).then(function(data){
    conole.log(data);
    if(data.true == "-1"){
      alert("Box already taken");
    }
    else{
      document.getElementById('id').innerHTML = data.PlayerMove.player_move;
    }
  })
};
