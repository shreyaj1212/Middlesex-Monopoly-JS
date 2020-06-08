const Constants = require('../shared/constants');

class Ownable extends Location{
	constructor(nom,type,price,color,owner,currentRent,futureRent) {
		this.name = nom;
		this.type = type;
		this.price = price;
		this.color = color;
		this.owner = owner;
		this.currentRent = currentRent;
		this.futureRent = futureRent;
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
}
