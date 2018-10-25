const Board = require("./board");

it("should return true for first row of x's", () => {
    expect(Board.winCheck(['X', 'X', 'X', 'N', 'N', 'N', 'N', 'N', 'N'], 'X')).toBe(true);
});

it("should return true for second row of o's", () => {
    expect(Board.winCheck(['N', 'N', 'N', 'O', 'O', 'O', 'N', 'X', 'X'], 'O')).toBe(true);
});

it("should return true for third row of o's", () => {
    expect(Board.winCheck(['N', 'N', 'N', 'O', 'N', 'O', 'O', 'O', 'O'], 'O')).toBe(true);
});

it("should return true for first column of x's", () => {
    expect(Board.winCheck(['X', 'N', 'N', 'X', 'N', 'N', 'X', 'O', 'O'], 'X')).toBe(true);
});