/**
 * @author Shreya Jain
 */
// const Constants = require('../shared/constants');
// const shortid = require('shortid');
const Location = require('./location')

const Constants = require('constants');

// const Player = require('player');
// const Monopoly = require('Monopoly');
//
class Ownable extends Location {
	constructor(nom,price,color,owner,rents,pos) {
    super(nom, pos);
		// this.type = type;
		this.price = price;
		this.color = color;
		this.owner = owner;
		// this.currentRent = currentRent;
		this.futureRent = rents;
	}

	/*
	 * returns name of ownable
	 */
	getName(){
		return this.name;
	}

	/*
	 * returns owner
	 */
	getOwner(){
		return this.owner;
	}

	/*
	 * returns price of ownable
	 */
	getPrice() {
		return this.price;
	}

	/*
	 * returns currentRent
	 */
	getCurrentRent() {
		return this.currentRent;
	}

	/*
	 * return the monopoly that this property is a part of
	 */
	getMonopoly(){
		return this.color;
	}

	/*
	 * changes the owner
	 */
	setOwner(newOwner) {
		this.owner = newOwner;
	}

	toString() {
		return this.name;
	}
}

module.exports = Ownable;
