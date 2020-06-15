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
   * adds a player from the game
   */
  addPlayer(socket, username) {
    this.sockets[socket.id] = socket;
    this.players[socket.id] = new Player(socket.id, username);
  }

  /*
   * removes a player from the game
   */
  removePlayer(socket) {
    delete this.sockets[socket.id];
    delete this.players[socket.id];
  }

  /*
   * takes a turn for the player
   */
  takeTurn(player) {
    var diceRoll = rollDice();
    player.addToPosition(diceRoll);
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
				player.updateWealth(-1*curLoc.getRent(diceRoll));
			}
			else{
				handlePurchaseInput(curLoc);
			}
		}
  }

  play() {
    
  }

  handlePurchaseInput(socket, yaOrNa,player) {
    if (this.players[socket.id]){
      if(yaOrNa) {
        player.buyOwnable(p);
      }
    }
  }

  /*
   * generates a random number from 1 to 12
   * for the player to move
   */
  rollDice() {
    return Math.random()*Constants.MAX_DICE_ROLL+1;
  }
}

module.exports = Game;
