const playerInstance = require("./player.js");
const gameInstance = require("./game.js");
const Board = class {
  constructor(){
    this.boardValues =['N','N','N','N','N','N','N','N','N'];
    this.PlayerMove = new playerInstance();
    this.Game = new gameInstance();
    this.turnCounter = 0;
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
      if(this.boardValues[position] === "N"){
        return true;
      }
      return false;
    };
    addMove(position){
      this.boardValues[position] = this.PlayerMove.getPlayer();
    }
    move(position){
        if(this.checkValidMove(position)){
            this.addMove(position);
            this.turnCounter++;
            if(this.winCheck(this.PlayerMove.getPlayer)){
                this.Game.EndGame(this.PlayerMove.getPlayer);
            }else{
                this.PlayerMove.Turn();
            } 
        }else{
            console.log("Invalid, box already taken");
        }        
    }
}

module.exports = Board;
