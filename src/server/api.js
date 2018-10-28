const express = require("express");
const router = express.Router();
const Logic = require("../logic/gameLogic");
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/TicTacToe';


router.get('/leaderboards/', (req, res) => {
  const results = [];
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors

    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM player ORDER BY winCount desc;');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      var leaderboard = {
        Leader: results
      };
      res.status(200).send(leaderboard);
    });
  });
});


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
