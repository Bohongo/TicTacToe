const Game = class {
  constructor() {
    this.PlayerXScore = 0;
    this.PlayerOScore = 0;
  }

  IncrementScore(Player) {
    if (Player === 'X') {
      this.PlayerXScore++;
    } else {
      this.PlayerOScore++;
    }
  };
  EndGame(Player){
    if(Player === 'Draw'){
      //HÉR ÞARF AÐ BREYTA INNERHTML

    }
    this.IncrementScore(Player);
  }
}

module.exports = Game;
