/**
 * @author Shreya Jain
 */
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

  move(numSpaces){
    player.addToPosition(diceRoll);
    if(player.getPosition()>=Constants.BOARD_LENGTH) {
			player.updateWealth(Constants.PASS_GO_WEALTH);
			player.modPositionByBoardLength();
		}
    var curLoc = Constants.BOARD[player.getPosition()];
  }

  /*
   *
   */
  askUserToBuy(socket, ownable) {
    io.to(socket.id).emit('would you like to buy ', ownable.getName(),'?');
  }

  /*
   * userWantsToBuy is a boolean
   * this method will have user purchase the Property
   * that they are currently located at
   * this method will only be called if the player is located at
   * an unowned ownable and wants to buy it
   */
  buy(userWantsToBuy,player) {
    if(userWantsToBuy) {
      player.buyOwnable(Constants.BOARD[player.getPosition()]);
    }
  }

  /*
   * takes a turn for the player
   */
  // takeTurn(player) {
  //   var diceRoll = rollDice();
  //   move(diceRoll);
	// 	if(!curLoc.isOwnable()) {
	// 		if(curLoc.isChanceOrCommChest()) {
	// 			curLoc.executeFortune(); // need to execute this method
	// 		}
	// 		else if(curLoc.isTax()) { // Tax
	// 			curLoc.applyTax(this);
	// 		}
	// 		else if(curLoc.isGoToWW()){ // Go To Writing Workshop Place
	// 			player.sendToJail();
	// 		}
	// 	}
	// 	else{
	// 		if(curLoc.isOwned()) {
	// 			player.updateWealth(-1*curLoc.getRent(diceRoll));
	// 		}
	// 		else{
	// 			var userWantsToBuy = askUserToBuy(player);
  //       buy(userWantsToBuy,player);
	// 		}
	// 	}
  // }

  /*
   * I don't think we'll need these methods but
   * I will leave the definitions in right now
   * just so that I can come back to it later
   */
  update() {

  }

  /*
   * I don't think we'll need these methods but
   * I will leave the definitions in right now
   * just so that I can come back to it later
   */
  createUpdate() {

  }

  /*
   * this handleInput will roll the dice
   * and make the player move. It will then send a
   * message to the server to ask the user if they
   * want to buy the property
   */
  handleInput(socket){
    var player = this.players[socket.id];
    if(player) {
      var diceRoll = rollDice();
      move(diceRoll);
      if(!curLoc.isOwnable()) { // if it's not an ownable
        if(curLoc.isChanceOrCommChest()) {
          curLoc.executeFortune(player);
        }
        else if(curLoc.isTax()) { // Tax
          curLoc.applyTax(player);
        }
        else if(curLoc.isGoToWW()){ // Go To Writing Workshop Place
          player.sendToJail();
        }
        return true;
      }
      else{ // if curLoc is ownable
        if(curLoc.isOwned()) { // if it's owned, pay rent
          player.updateWealth(-1*curLoc.getRent(diceRoll));
          return true;
        }
        else{ // otherwise, ask user if they would like to buy the property
          var userWantsToBuy = askUserToBuy(player,curLoc);
          return false;
        }
      }
    }
  }

  /*
   * will buy or not buy the property
   * that the user is currently on
   * based on the user's INPUT
   *
   * this method is only ever called if the user
   * is on a property location
   */
  handleInput(socket, userWantsToBuy) {
    if (this.players[socket.id]){
      buy(userWantsToBuy,player);
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
