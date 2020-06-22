/**
 * @author Shreya Jain
 */
// const Constants = require('../shared/constants');
//
const Constants = require('constants');
// const Location = require('location');
// const Ownable = require('Ownable');
// const Property = require('Property');
// const Color = rquire('color');

class Player{
	constructor(name) {
		this.name = name;
		this.wealth = 1500;
		this.inww = false;
		this.ownables = {};
		this.pos = 0;
	}

	/*
	 * adds x to wealth; x can be negative
	 * or positive
	 */
	updateWealth(x) {
		if(this.wealth+x<0) return "insufficient funds";
		else this.wealth=this.wealth+x;
	}

	/*
	 * precondition: ownable is of type Ownable
	 */
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
		pos = pos%40;
	}

	/*
	 * will move the player to posiiton x
	 * on the board
	 */
	addToPosition(x) {
		this.pos=this.pos+x;
	}

	/*
	 * send to Writing Workshop
	 */
	sendToJail() {
		this.inww= true;
		pos = Constants.WRITING_WORKSHOP_POSITION;
	}

	releaseFromJail() {
		this.inww = false;
	}

  getWealth() {
    return this.wealth;
  }
}

module.exports = Player;
