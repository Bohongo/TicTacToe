
const add = require("./player");

it("should return o", () =>{
  let addd = new add();
  addd.Turn();
  expect(addd.player_move).toBe("o");
});
it("should return x", () =>{
  let addd = new add();
  addd.Turn();
  addd.Turn();
  expect(addd.player_move).toBe("x");
});