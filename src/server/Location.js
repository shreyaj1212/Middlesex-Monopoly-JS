/**
 * @author Shreya Jain
 */
const Constants = require('../shared/constants');

class Location{
	constructor(nom,type,position) {
		this.name = nom;
		this.type = type;
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
		return this.position == Constants.GO_TO_WW_POS;
	}

	isTax() {
		return this.position == Constants.TEXTBOOK_TAX_POS || this.position == Constants.KARMA_TAX_POS;
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
