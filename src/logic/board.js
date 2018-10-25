const Board = new Object();
Board.winCheck = function(boardValues, letter) {
    if (boardValues[0] == letter && boardValues[1] == letter && boardValues[2] == letter) {
        return true;
    }
    if (boardValues[3] == letter && boardValues[4] == letter && boardValues[5] == letter) {
        return true;
    }
    if (boardValues[6] == letter && boardValues[7] == letter && boardValues[8] == letter) {
        return true;
    }
    return false;
}

module.exports = Board;