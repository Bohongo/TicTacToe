const express = require("express");
const router = express.Router();
const Logic = require("../logic/gameLogic");


router.get("/", (req, res) => {
  res.status(405).send({
    error: "GET method not allowed, try OPTIONS."
  });
});

router.options("/", (req, res) => {
  const options = {
    options: {
      get: ["/api/tictactoe", "/api/tictactoe/{NAME}"]
    }
  };
  res.status(200).send(options);
});

router.get("/tictactoe/:box", (req, res) => {
  var x = {
    Player: Logic
  };
  Logic.move(req.params.box);
  res.status(200).send(x);
});

router.get("/reset", (req, res) => {
  res.status(200).send({
    reset: Logic.resetBoard()
  });
});


module.exports = router;
//module.exports = app;