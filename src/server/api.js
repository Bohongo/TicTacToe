const express = require("express");
const router = express.Router();
const app = express();
const makeMove = require("../logic/board.js");

app.get("/", (req, res) => {
  res.status(200).send();
})

router.get("/", (req, res) => {
  res.status(405).send({ error: "GET method not allowed, try OPTIONS." });
});

router.options("/", (req, res) => {
  const options = {
    options: { get: ["/api/tictactoe", "/api/tictactoe/{NAME}"] }
  };
  res.status(200).send(options);
});

router.get("/tictactoe/:box", (req, res) => {
  res.status(200).send({ Player: makeMove.PlayerMove.getPlayer() });
});

module.exports = router;
module.exports = app;
