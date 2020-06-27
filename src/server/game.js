/**
 * @author Shreya Jain
 */
const Constants = require('./constants');
const Player = require('./player');
const MonopolyColor = require('./MonopolyColor');
const Location = require('./location');
const Property = require('./Property');
const CommunityChest = require('./CommunityChest');
const Chance = require('./Chance');
const RailRoad = require('./RailRoad');
const Utility = require('./Utility');
const UtilityMonopoly = require('./UtilityMonopoly');
const RailRoadMonopoly = require('./RailRoadMonopoly');
const Tax = require('./Tax');

class Game{
  constructor() {
    this.sockets = {};
    this.players = {};
    this.lastUpdateTime = Date.now();
    this.shouldSendUpdate = false;
    setInterval(this.update.bind(this), 1000 / 60);
    // CREATING THE BOARD
    this.colors = [];
    this.board = [];

    this.colors.push(new MonopolyColor("Purple"));
    this.colors.push(new MonopolyColor("Light Blue"));
    this.colors.push(new MonopolyColor("Pink"));
    this.colors.push(new MonopolyColor("Orange"));
    this.colors.push(new MonopolyColor("Red"));
    this.colors.push(new MonopolyColor("Yellow"));
    this.colors.push(new MonopolyColor("Green"));
    this.colors.push(new MonopolyColor("Blue"));

    this.board.push(new Location("Go!",0)); //0
    this.board.push(new Property("Spive Lair",60,50,[2,10,30,90,160,250], this.colors[0],1)); //1
    this.board.push(new CommunityChest(2));//2
    this.board.push(new Property("Peer Tutoring Room",60,50,[4,20,60,180,320,450],this.colors[0],3));
    this.board.push(new Tax("Textbook Tax",100,4));//4
    this.board.push(new RailRoad("Bateman's Pond",5)); //5
    this.board.push(new Property("Smokestack",100,50,[6,30,90,270,400,550],this.colors[1],6)); //6
    this.board.push(new Chance(7)); //7
    this.board.push(new Property("Rockstar Rabb's Recording Room",100,50,[6,30,90,270,400,550],this.colors[1],8));
    this.board.push(new Property("Recital Hall",120,50,[8,40,100,300,450,600],this.colors[1],9)); //9
    this.board.push(new Location("Writing Workshop",10));
    this.board.push(new Property("Pillai's Programming Palace",140,100,[10,50,150,450,625,750],this.colors[2],11));
    this.board.push(new Utility("D.J. Beare's Dominion",12,4));
    this.board.push(new Property("The Rotunda",140,100,[10,50,150,450,625,750],this.colors[2],13));
    this.board.push(new Property("The Observatory",160,100,[12,60,180,500,700,900],this.colors[2],14));
    this.board.push(new RailRoad("Estabrook Woods",15)); //15
    this.board.push(new Property("The Cage",180,100,[14,70,200,550,750,950],this.colors[3],16));
    this.board.push(new CommunityChest(17));
    this.board.push(new Property("The Dance Studio",180,100,[14,70,200,550,750,950],this.colors[3],18));
    this.board.push(new Property("Fitness Center",200,100,[16,80,220,600,800,1000],this.colors[3],19));
    this.board.push(new Location("Acorn Lot",20));
    this.board.push(new Property("Tech Center",220,150,[18,90,250,700,875,1050],this.colors[4],21));
    this.board.push(new Chance(22));
    this.board.push(new Property("Terry Room",220,150,[18,90,250,700,875,1050],this.colors[4],23));
    this.board.push(new Property("Third Floor of Eliot",240,150,[20,100,300,750,925,1100],this.colors[4],24));
    this.board.push(new RailRoad("Turf Fields",25)); //25
    this.board.push(new Property("Health Center",260,150,[22,110,330,800,975,1150],this.colors[5],26));
    this.board.push(new Property("Stufac",240,150,[22,110,330,800,975,1150],this.colors[5],27));
    this.board.push(new Utility("Deans' Office",28,4));
    this.board.push(new Property("Dining Hall",240,150,[24,120,360,850,1025,1200],this.colors[5],29));
    this.board.push(new Location("Go To Writing Workshop",30));
    this.board.push(new Property("Kaye Theater",280,200,[26,130,390,900,1100,1275],this.colors[6],31));
    this.board.push(new Property("Ishibashi Gallery",280,200,[26,130,390,900,1100,1275],this.colors[6],32));
    this.board.push(new Chance(33));
    this.board.push(new Property("BAP Conference Room",300,200,[28,150,450,1000,1200,1400],this.colors[6],34));
    this.board.push(new RailRoad("Soccer Fields",35)); //35
    this.board.push(new CommunityChest(36));
    this.board.push(new Property("Chapel Bells",350,200,[35,175,500,1100,1300,1500],this.colors[7],37));
    this.board.push(new Property("Chapel Podium",400,200,[40,200,600,1400,1700,2000],this.colors[7],39));
  }

  setPlayerToPlaying(player) {
    player.setToPlay();
    if(allPlayersArePlaying()){
      startGame();
    }
  }

  allPlayersArePlaying(){
    for(var i=0;i<this.players.length;i++) {
      if(!this.players[i].isThisPlayerPlaying()) return false;
    }
    return true;
  }

  startGame() {
    this.players[0].setImage('../../public/assets/hat.jpg');
    this.players[1].setImage('../../public/assets/dog.png');
    playTheGame();
  }

  playTheGame() {
    var count = 0;
    while(allPlayersAlive()) {
      if(count>0) {
        count = count%this.players.length;
      }
      var player = this.players[count];
      var numspaces = rollDice();
      move(player, numspaces);
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
      count++;
    }
    console.log("Game over");
  }

  allPlayersAlive() {
    var result = true;
    for(var i =0;i<this.players.length;i++) {
      if(this.players[i].getWealth()<0){
        return false;
      }
    }
    return result;
  }

  wealthGreaterThanZero(player) {
    return player.getWealth()>0;
  }

  getBoard() {
    return this.board;
  }

  /*
   * adds a player from the game
   */
  addPlayer(socket, username) {
    this.sockets[socket.id] = socket;
    this.players[socket.id] = new Player(socket.id, username);
    console.log("added " + socket.id + " as " + username);
  }

  /*
   * removes a player from the game
   */
  removePlayer(socket) {
    delete this.sockets[socket.id];
    delete this.players[socket.id];
  }

  move(player,numSpaces){
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
    io.to(socket.id).emit(Constants.ASK_TO_BUY);
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
      move(player,diceRoll);
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
