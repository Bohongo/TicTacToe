const express = require("express");
const app = express();
const script = require("../logic/player");


app.get("/", (req, res) => {
  res.status(200).send();
});

module.exports = app;
