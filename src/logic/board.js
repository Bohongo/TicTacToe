const instance = require("./player.js");

const Board = class {
  constructor(){
    this.boardValues =['N','N','N','N','N','N','N','N','N'];
    this.PlayerMove = new instance();
  }

    winCheck(letter) {
        if (this.rowCheck(letter)) {
            return true;
        }
        if (this.columnCheck(letter)) {
            return true;
        }
        if (this.crossCheck(letter)) {
            return true;
        }
        return false;
    }

    rowCheck(letter) {
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
    }

    columnCheck(letter) {
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
    }

    crossCheck(letter) {
        if (this.boardValues[0] == letter && this.boardValues[4] == letter && this.boardValues[8] == letter) {
            return true;
        }
        if (this.boardValues[2] == letter && this.boardValues[4] == letter && this.boardValues[6] == letter) {
            return true;
        }
        return false;
    }
    checkValidMove(position){
      if(this.boardValues[position-1] === "N"){
        return true;
      }
      return false;
    };
    addMove(position){
      this.boardValues[position] = this.PlayerMove.getPlayer();
    }
}

module.exports = Board;
