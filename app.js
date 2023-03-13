const express = require('express');
const bodyParser = require('body-parser');
const gameRoutes = require('./routes/game');
const turnRoutes = require('./routes/turn');
const indexRoutes = require('./routes/index')
const Player = require('./src/player.js')
const app = express();
const port = 3000;

// Set up view engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


// Set up routes
app.use('/', indexRoutes);
app.use('/game', gameRoutes);
app.use('/turn', turnRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});


module.exports = app;
