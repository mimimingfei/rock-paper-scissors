const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('game', { playerName: "" });
  });
  
router.post('/', (req, res) => {
    const playerName = req.body.player;
    res.render('game', { playerName: playerName });
  });
  
module.exports = router;

