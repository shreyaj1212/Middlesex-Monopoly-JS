const Constants = require('../shared/constants');

class Player{
	constructor(name) {
		this.name = name;
		this.wealth = Constants.STARTING_WEALTH;
		this.inww = false;
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

	getPosition(){
		return this.pos;
	}

	modPositionByBoardLength() {
		pos = pos%Constants.BOARD_LENGTH;
	}

	addToPosition(x) {
		this.pos=this.pos+x;
	}

	sendToJail() {
		this.inww= true;
		pos = Constants.WRITING_WORKSHOP_POSITION;
	}

	releaseFromJail() {
		this.inww = false;
	}
}
