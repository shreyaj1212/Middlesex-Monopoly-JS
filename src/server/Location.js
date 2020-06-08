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

	isGoToWW() {
		return this.position == Constants.WRITING_WORKSHOP_POSITION	;
	}

	isTax() {
		return this.type.equals("Textbook Tax") || this.type.equals("Karma Tax");
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
