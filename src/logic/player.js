const PlayerMove = class {
  constructor() {
    this.player_move = "X";
  }

  Turn() {
    if (this.player_move === "X") {
      this.player_move = "O";
    } else {
      this.player_move = "X";
    }
  }
  getPlayer(){
    return this.player_move;
  }
}

module.exports = PlayerMove;
