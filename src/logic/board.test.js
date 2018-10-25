const Board = require("./board");

it("should return true for first row of x's", () => {
    const Board2 = new Board();
    expect(Board2.winCheck(['X', 'X', 'X', 'N', 'N', 'N', 'N', 'N', 'N'], 'X')).toBe(true);
});

it("should return true for second row of o's", () => {
    const Board2 = new Board();
    expect(Board2.winCheck(['N', 'N', 'N', 'O', 'O', 'O', 'N', 'X', 'X'], 'O')).toBe(true);
});

it("should return true for third row of o's", () => {
    const Board2 = new Board();
    expect(Board2.winCheck(['N', 'N', 'N', 'O', 'N', 'O', 'O', 'O', 'O'], 'O')).toBe(true);
});

it("should return true for first column of x's", () => {
    const Board2 = new Board();
    expect(Board2.winCheck(['X', 'N', 'N', 'X', 'N', 'N', 'X', 'O', 'O'], 'X')).toBe(true);
});

it("should return true for second column of x's", () => {
    const Board2 = new Board();
    expect(Board2.winCheck(['N', 'X', 'N', 'N', 'X', 'N', 'N', 'X', 'O'], 'X')).toBe(true);
});

it("should return true for third column of x's", () => {
    const Board2 = new Board();
    expect(Board2.winCheck(['N', 'N', 'X', 'N', 'N', 'X', 'N', 'N', 'X'], 'X')).toBe(true);
});

it("should return true for downward slope of x's", () => {
    const Board2 = new Board();
    expect(Board2.winCheck(['X', 'N', 'N', 'N', 'X', 'N', 'N', 'N', 'X'], 'X')).toBe(true);
});