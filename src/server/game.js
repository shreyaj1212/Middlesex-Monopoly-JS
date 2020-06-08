const Constants = require('../shared/constants');
const Player = require('./player');

class Game{
  constructor() {
    this.sockets = {};
    this.players = {};
    this.lastUpdateTime = Date.now();
    this.shouldSendUpdate = false;
    setInterval(this.update.bind(this), 1000 / 60);
  }

  /*
   * will add a player from the game
   */
  addPlayer(socket, username) {
    this.sockets[socket.id] = socket;
    this.players[socket.id] = new Player(socket.id, username);
  }

  /*
   * will remove a player from the game
   */
  removePlayer(socket) {
    delete this.sockets[socket.id];
    delete this.players[socket.id];
  }

  /*
   * takes a turn for the player
   */
  takeTurn(player) {
    player.addToPosition(rollDice());
		if(player.getPosition()>=Constants.BOARD_LENGTH) {
			player.updateWealth(Constants.PASS_GO_WEALTH);
			player.modPositionByBoardLength();
		}
		var curLoc = Constants.BOARD[player.getPosition()]; // need to define BOARD in constants.js
		if(!curLoc.isOwnable()) {
			if(curLoc.isChanceOrCommChest()) {
				curLoc.executeFortune(); // need to execute this method
			}
			else if(curLoc.isTax()) { // Tax
				curLoc.applyTax(this);
			}
			else if(curLoc.isGoToWW()){ // Go To Writing Workshop Place
				player.sendToJail();
			}
		}
		else{
			if(curLoc.isOwned()) {
				player.updateWealth(-1*curLoc.getCurrentRent());
			}
			else{
				// ask user if they would like to buy this property
					// if the user says yes, then execute the transaction
			}
		}
  }

  // handlePurchaseInput(socket,yahOrNah) {
  //   if (this.players[socket.id]) {
  //     this.players[socket.id].setDirection(dir);
  //   }
  // }

  /*
   * generates a random number from 1 to 12
   * for the player to move
   */
  rollDice() {
    return Math.random()*Constants.MAX_DICE_ROLL+1;
  }
}

module.exports = Game;
