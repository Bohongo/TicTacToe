const Board = require("./board");

it("should return true", () => {
    expect(Board.winCheck(['X', 'X', 'X', 'N', 'N', 'N', 'N', 'N', 'N'], 'X')).toBe(true);
});