const Logic = require("./gameLogic");

it("should return true for first row of x's", () => {
    Logic.boardValues = ['X', 'X', 'X', '', '', '', '', '', ''];
    expect(Logic.winCheck('X')).toBe(true);
});

it("should return true for second row of o's", () => {
    Logic.boardValues = ['', '', '', 'O', 'O', 'O', '', 'X', 'X'];
    expect(Logic.winCheck('O')).toBe(true);
});

it("should return true for third row of o's", () => {
    Logic.boardValues = ['', '', '', 'O', '', 'O', 'O', 'O', 'O'];
    expect(Logic.winCheck('O')).toBe(true);
});

it("should return true for first column of x's", () => {
    Logic.boardValues = ['X', '', '', 'X', '', '', 'X', 'O', 'O'];
    expect(Logic.winCheck('X')).toBe(true);
});

it("should return true for second column of x's", () => {
    Logic.boardValues = ['', 'X', '', '', 'X', '', '', 'X', 'O'];
    expect(Logic.winCheck('X')).toBe(true);
});

it("should return true for third column of x's", () => {
    Logic.boardValues = ['', '', 'X', '', '', 'X', '', '', 'X']
    expect(Logic.winCheck('X')).toBe(true);
});

it("should return true for downward slope of x's", () => {
    Logic.boardValues = ['X', '', '', '', 'X', '', '', '', 'X'];
    expect(Logic.winCheck('X')).toBe(true);
});

it("should return true for upward slope of x's", () => {
    Logic.boardValues = ['', '', 'X', '', 'X', '', 'X', '', ''];
    expect(Logic.winCheck('X')).toBe(true);
});
it("Should return true because the whole array is set to N", () => {
    expect(Logic.checkValidMove(1)).toBe(true);
});
it("Should return X because first one to do is X", () => {
    Logic.addMove(1);
    expect(Logic.boardValues[0]).toBe('X');
});
it("Should return a valid move", () => {
    Logic.resetBoard();
    Logic.boardValues = ['', '', '', '', '', '', '', '', ''];
    Logic.move(1);
    expect(Logic.boardValues[0]).toBe('X');
});
it("Should be a invalid move with X still in the same spot", () => {
    Logic.boardValues = ['X', '', '', '', '', '', '', '', ''];
    Logic.move(0);
    Logic.move(0);
    expect(Logic.boardValues[0]).toBe('X');
});
it("should return o", () => {
    Logic.Turn();
    Logic.Turn();
    expect(Logic.player_move).toBe("O");
});
it("should return x", () => {
    Logic.Turn();
    Logic.Turn();
    Logic.Turn();
    expect(Logic.player_move).toBe("X");
});
it("should return an empty board", () => {
    Logic.move(0);
    Logic.move(1);
    Logic.move(2);
    Logic.move(3);
    Logic.resetBoard();
    expect(Logic.boardValues).toEqual(['', '', '', '', '', '', '', '', '']);
});
it("should return x", () => {
    Logic.move(0);
    Logic.resetBoard();
    expect(Logic.player_move).toBe("X");
});
it("should return 0", () => {
    Logic.move(0);
    Logic.move(1);
    Logic.move(2);
    Logic.resetBoard();
    expect(Logic.turnCounter).toBe(0);
});

it("Should return draw", () => {
    Logic.resetBoard();
    Logic.turnCounter = 8;
    expect(Logic.move(1)).toBe("draw");
});

it("Should return O because O is the winner", () => {
    Logic.resetBoard();
    Logic.move(1);
    Logic.move(4);
    Logic.move(2);
    Logic.move(5);
    Logic.move(8);
    expect(Logic.move(6)).toBe('O');
});

it("Should return playerOScore 1", () => {
    Logic.resetScores();
    Logic.resetBoard();
    Logic.move(1);
    Logic.move(4);
    Logic.move(2);
    Logic.move(5);
    Logic.move(8);
    Logic.move(6);
    expect(Logic.playerOscore).toBe(1);
});