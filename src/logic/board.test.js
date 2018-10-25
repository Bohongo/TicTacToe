const Board = require("./board");

it("should return true for first row of x's", () => {
    const Board2 = new Board();
    Board2.boardValues =['X', 'X', 'X', 'N', 'N', 'N', 'N', 'N', 'N'];
    expect(Board2.winCheck('X')).toBe(true);
});

it("should return true for second row of o's", () => {
    const Board2 = new Board();
    Board2.boardValues =['N', 'N', 'N', 'O', 'O', 'O', 'N', 'X', 'X'];
    expect(Board2.winCheck('O')).toBe(true);
});

it("should return true for third row of o's", () => {
    const Board2 = new Board();
    Board2.boardValues =['N', 'N', 'N', 'O', 'N', 'O', 'O', 'O', 'O'];
    expect(Board2.winCheck('O')).toBe(true);
});

it("should return true for first column of x's", () => {
    const Board2 = new Board();
    Board2.boardValues =['X', 'N', 'N', 'X', 'N', 'N', 'X', 'O', 'O'];
    expect(Board2.winCheck('X')).toBe(true);
});

it("should return true for second column of x's", () => {
    const Board2 = new Board();
    Board2.boardValues =['N', 'X', 'N', 'N', 'X', 'N', 'N', 'X', 'O'];
    expect(Board2.winCheck('X')).toBe(true);
});

it("should return true for third column of x's", () => {
    const Board2 = new Board();
    Board2.boardValues = ['N', 'N', 'X', 'N', 'N', 'X', 'N', 'N', 'X']
    expect(Board2.winCheck('X')).toBe(true);
});

it("should return true for downward slope of x's", () => {
    const Board2 = new Board();
    Board2.boardValues = ['X', 'N', 'N', 'N', 'X', 'N', 'N', 'N', 'X'];
    expect(Board2.winCheck('X')).toBe(true);
});

it("should return true for upward slope of x's", () => {
    const Board2 = new Board();
    Board2.boardValues =['N', 'N', 'X', 'N', 'X', 'N', 'X', 'N', 'N'];
    expect(Board2.winCheck('X')).toBe(true);
});
it("Should return true because the whole array is set to N", () => {
  const Board2 = new Board();
  expect(Board2.checkValidMove(1)).toBe(true);
});
it("Should return X because first one to do is X", () =>{
  const Board2 = new Board();
  Board2.addMove(1);
  expect(Board2.boardValues[1]).toBe('X');
});

it("Should return a valid move", () =>{
    const Board2 = new Board();
    Board2.boardValues =['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'];
    Board2.move(0);
    expect(Board2.boardValues[0]).toBe('X');
});

it("Should be a invalid move with X still in the same spot", () =>{
    const Board2 = new Board();
    Board2.boardValues =['X', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'];
    Board2.move(0);
    Board2.move(0);
    expect(Board2.boardValues[0]).toBe('X');
})