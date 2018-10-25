const Game = require('./game');

it("should increment X by 1", () => {
  let xCheck = new Game();
  xCheck.IncrementScore("X");
  expect(xCheck.PlayerXScore).toBe(1);
});

it("should increment O by 1", () => {
  let oCheck = new Game();
  oCheck.IncrementScore("O");
  oCheck.IncrementScore("O");
  oCheck.IncrementScore("O");
  expect(oCheck.PlayerOScore).toBe(3);
});