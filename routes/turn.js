const express = require('express');
const Player = require('../src/player');
const router = express.Router();
const Round = require('../src/round');

router.post('/', (req, res) => {
  const playerChoice = req.body.choice;
  const round = new Round();
  const computerChoice = round.computerMove();
  const result = round.playRound(playerChoice, computerChoice);
  res.render('turn', { playerChoice, result, computerChoice });
});




module.exports = router;
