/**
 * @author Shreya Jain
 */
// const Constants = require('../shared/constants');
const Constants = require('constants');

class Location{
	constructor(nom,position) {
		this.name = nom;
		this.position = position;
	}

	getPosition(){
		return position;
	}

	/*
	 * returns true if Location is the
	 * "Go To Writing Workshop" Location
	 */
	isGoToWW() {
		return this.position == 30;
	}

	isTax() {
		return this.position == 2 || this.position == 38;
	}

	isChanceOrCommChest() {
		return this.type.equals("Chance") || this.type.equals("CommChest");
	}

	isUtility() {
		return this.type.equals("Utility");
	}

	isRailRoad(){
		return this.type.equals("RailRoad");
	}

	isOwnable(){
		return this.type.equals("RailRoad")||this.type.equals("Property")||this.type.equals("Utility");
	}

	getName(){
		return this.name;
	}
}

module.exports = Location;
