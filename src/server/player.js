/**
 * @author Shreya Jain
 */
// const Constants = require('../shared/constants');
//
// class Player{
// 	constructor(name) {
// 		this.name = name;
// 		this.wealth = Constants.STARTING_WEALTH;
// 		this.inww = false;
// 		this.ownables = {};
// 		this.pos = Constants.STARTING_POS;
// 	}
//
// 	/*
// 	 * adds x to wealth; x can be negative
// 	 * or positive
// 	 */
// 	updateWealth(x) {
// 		if(this.wealth+x<0) return Constants.INSUFFICIENT_FUNDS;
// 		else this.wealth=this.wealth+x;
// 	}
//
// 	/*
// 	 * precondition: ownable is of type Ownable
// 	 */
// 	buyOwnable(ownable) {
// 		var price = ownable.getPrice();
// 		updateWealth(-1*price);
// 		ownables.push(ownable);
// 		ownable.setOwner(this);
// 		var c = ownable.getMonopoly();
// 		c.updateMonopolyStatus();
// 	}
//
// 	getPosition(){
// 		return this.pos;
// 	}
//
// 	modPositionByBoardLength() {
// 		pos = pos%Constants.BOARD_LENGTH;
// 	}
//
// 	/*
// 	 * will move the player to posiiton x
// 	 * on the board
// 	 */
// 	addToPosition(x) {
// 		this.pos=this.pos+x;
// 	}
//
// 	/*
// 	 * send to Writing Workshop
// 	 */
// 	sendToJail() {
// 		this.inww= true;
// 		pos = Constants.WRITING_WORKSHOP_POSITION;
// 	}
//
// 	releaseFromJail() {
// 		this.inww = false;
// 	}
// }
