const express = require('express');
const router = express.Router();

router.get('/game', (req, res) => {
    res.render('game');
  });
  
router.post('/game', (req, res) => {
    const playerName = req.body.player;
    res.render('game', { playerName: playerName });
  });
  
module.exports = router;

