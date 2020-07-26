const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const socketio = require('socket.io');

const Constants = require('./constants');
const Game = require('./game');
const webpackConfig = require('../../webpack.dev.js');

// Setup an Express server
const app = express();
app.use(express.static('public'));

if (process.env.NODE_ENV === 'development') {
  // Setup Webpack for development
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler));
} else {
  // Static serve the dist/ folder in production
  app.use(express.static('dist'));
}

// Listen on port
const port = process.env.PORT || 3000;
const server = app.listen(port);
console.log(`Server listening on port ${port}`);

// Setup socket.io
const io = socketio(server);
// const wannaBuy = document.getElementById('wanna-buy');
// const go = document.getElementById('box-0');

// Listen for socket.io connections
io.on('connection', socket => {
  console.log('Player connected!', socket.id);
  socket.on(Constants.MSG_TYPES.JOIN_GAME, joinGame);
  socket.on(Constants.MSG_TYPES.ROLL_DICE_INPUT, handleRollInput);
  socket.on(Constants.MSG_TYPES.START_GAME, playTheGame);
  socket.on(Constants.MSG_TYPES.BUY_PROPERTY_INPUT, handleBuyPropertyInput);
  socket.on('disconnect', onDisconnect);
});

// Setup the Game
const game = new Game();
console.log("game created");

function joinGame(username, color) {
  game.addPlayer(this, username, color);
}

// function askUserToBuy(socket) {
// }

function playTheGame() {
  game.startGame();
}

function handleRollInput() {
  var x = game.handleInput(this);
  if(!x) {
    askUserToBuy(this);
  }
}

function handleBuyPropertyInput(userWantsToBuy) {
  game.handleInput(this,userWantsToBuy);
}

function onDisconnect() {
  game.removePlayer(this);
}
