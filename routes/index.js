const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index');
});
router.post('/index', (req, res) => {
    const action = req.body.action;
    if (action === 'restart') {
      res.redirect('/');
    } else {
      res.sendStatus(400); 
    }
  });
  

module.exports = router;