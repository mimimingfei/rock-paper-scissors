const express = require('express');
const Player = require('../src/player');
const router = express.Router();
const Round = require('../src/round');

router.post('/turn', (req, res) => {
  const playerChoice = req.body.choice;
  const round = new Round();
  const { result, computerChoice } = round.playRound(playerChoice);
  res.render('turn', { playerChoice, result, computerChoice });
});




module.exports = router;
