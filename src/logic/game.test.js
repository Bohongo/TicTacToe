const Game = require('./game');

it("should increment X by 1", () => {
  let xCheck = new Game();
  xCheck.IncrementScore("X");
  expect(xCheck.PlayerXScore).toBe(1);
});

it("should increment O by 3", () => {
  let oCheck = new Game();
  oCheck.IncrementScore("O");
  oCheck.IncrementScore("O");
  oCheck.IncrementScore("O");
  expect(oCheck.PlayerOScore).toBe(3);
});
it("it should increment x by one", () => {
  let endGameX = new Game();
  endGameX.EndGame("X");
  expect(endGameX.PlayerXScore).toBe(1);
});
it("should not increment x or y", () => {
  let endGameX = new Game();
  endGameX.EndGame("draw");
  expect(endGameX.PlayerXScore && endGameX.PlayerOScore).toBe(0);
});
