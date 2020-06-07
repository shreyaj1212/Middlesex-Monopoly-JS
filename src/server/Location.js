class Location{
	constructor(nom,type) {
		this.name = nom;
		this.type = type;
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
}