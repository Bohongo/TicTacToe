const Board = new Object();
Board.winCheck = function(boardValues, letter) {
    if (boardValues[0] == letter && boardValues[1] == letter && boardValues[2] == letter) {
        return true;
    }
    return false;
}

module.exports = Board;