const Logic = new Object();

Logic.boardValues = ['', '', '', '', '', '', '', '', ''];
Logic.player_move = "X";
Logic.turnCounter = 0;
Logic.gameResult = "";
Logic.playerXscore = 0;
Logic.playerOscore = 0;

Logic.winCheck = function(letter) {
  if (this.rowCheck(letter)) {
    this.gameResult = this.player_move;
    return true;
  }
  if (this.columnCheck(letter)) {
    this.gameResult = this.player_move;
    return true;
  }
  if (this.crossCheck(letter)) {
    this.gameResult = this.player_move;
    return true;
  }
  if (this.turnCounter == 9) {
    this.gameResult = "draw";
    return true;
  }
  return false;
};

Logic.rowCheck = function(letter) {
  if (this.boardValues[0] == letter && this.boardValues[1] == letter && this.boardValues[2] == letter) {
    return true;
  }
  if (this.boardValues[3] == letter && this.boardValues[4] == letter && this.boardValues[5] == letter) {
    return true;
  }
  if (this.boardValues[6] == letter && this.boardValues[7] == letter && this.boardValues[8] == letter) {
    return true;
  }
  return false;
};

Logic.columnCheck = function(letter) {
  if (this.boardValues[0] == letter && this.boardValues[3] == letter && this.boardValues[6] == letter) {
    return true;
  }
  if (this.boardValues[1] == letter && this.boardValues[4] == letter && this.boardValues[7] == letter) {
    return true;
  }
  if (this.boardValues[2] == letter && this.boardValues[5] == letter && this.boardValues[8] == letter) {
    return true;
  }
  return false;
};

Logic.incrementScore = function() {
  if (this.gameResult == "X") {
    this.playerXscore++;
  }
  if (this.gameResult == "O") {
    this.playerOscore++;
  }
}

Logic.crossCheck = function(letter) {
  if (this.boardValues[0] == letter && this.boardValues[4] == letter && this.boardValues[8] == letter) {
    return true;
  }
  if (this.boardValues[2] == letter && this.boardValues[4] == letter && this.boardValues[6] == letter) {
    return true;
  }
  return false;
};

Logic.checkValidMove = function(position) {
  if (this.boardValues[position - 1] === '') {
    return true;
  }
  return false;
};

Logic.addMove = function(position) {
  this.boardValues[position - 1] = this.player_move;
};

Logic.move = function(position) {
  if (this.gameResult === "") {
    if (this.checkValidMove(position)) {
      this.addMove(position);
      this.turnCounter++;
      if (this.winCheck(this.player_move)) {
        this.incrementScore();
        return this.gameResult;
      } else {
        this.Turn();
      }
    }
  }
};

Logic.Turn = function() {
  if (this.player_move === "X") {
    this.player_move = "O";
  } else {
    this.player_move = "X";
  }
};

Logic.getPlayer = function() {
  return this.player_move;
};

Logic.resetScores = function() {
  this.playerXscore = 0;
  this.playerOscore = 0;
}

Logic.resetBoard = function() {
  this.boardValues = ['', '', '', '', '', '', '', '', ''];
  this.player_move = "X";
  this.turnCounter = 0;
  this.gameResult = "";
};

module.exports = Logic;