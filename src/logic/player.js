const PlayerMove = class {
  constructor() {
    this.player_move = "x";
  }

  Turn() {
    if (this.player_move === "x") {
      this.player_move = "o";
    } else {
      this.player_move = "x";
    }
  }
}

module.exports = PlayerMove;
