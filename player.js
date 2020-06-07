const Constants = require('../constants');

class Player{
	constructor(nom) {
		this.name = nom;
		this.wealth = Constants.STARTING_WEALTH;
		this.injail = false;
		this.ownables = {};
		this.pos = Constants.STARTING_POS;
	}

	updateWealth(x) {
		if(this.wealth+x<0) return Constants.INSUFFICIENT_FUNDS;
		else this.wealth=this.wealth+x;
	}

	buyOwnable(ownable) {
		var price = ownable.getPrice();
		updateWealth(-1*price);
		ownables.push(ownable);
		ownable.setOwner(this);
		var c = ownable.getMonopoly();
		c.updateMonopolyStatus();
	}

	move(x) {
		pos+=x;
		if(pos>=Constants.BOARD_LENGTH) {
			updateWealth(Constants.PASS_GO_WEALTH);
			pos = pos%Constants.BOARD_LENGTH;
		}
		var curLoc = Constants.BOARD[pos]; // need to define BOARD in constants.js
		if(curLoc.isChanceOrCommChest()) {
			curLoc.executeFortune(); // need to define this
		}
		else if (curLoc.isOwnable()) {
			
		}
	}
}