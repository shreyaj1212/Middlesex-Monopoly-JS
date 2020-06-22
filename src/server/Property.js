/**
 * @author Shreya Jain
 */
// const Constants = require('../shared/constants');
const Constants = require('constants');

const Ownable = require('Ownable');
const Player = require('Player');
const Location = require('location');

class Property extends Ownable{
	constructor(name,price,poh,rents,color,pos) {
    super(name,price,color,null,rents,pos);
    this.priceOfHouse = poh;
		this.numHouses = 0;
		this.numHotels = 0;
		this.curRent = rents[0];
	}

	getName() {
		return this.name;
	}

	getNumHouses(){
		return numHouses;
	}

	getNumHotels(){
		return numHotels;
	}

	getRent(diceRoll){
		return rent;
	}

	getRent() {
		return curRent;
	}

	addHouse() {
		if(this.color.houseCanBeAdded(this)){
			if(numHouses<=4) {
				numHouses=numHouses+1;
				this.owner.updateWealth(-1*priceOfHouse);
				updateRent();
			}
			else {
				// you cannot add another house; you must add a hotel
			}
		}
		else{
			// you must add enough homes at your other properties first
		}
	}

	updateRent() {
		if(!this.color.isMonopoly()) {
			curRent = this.rents[0];
		}
		else{
			if(numHouses==0) {
				curRent = this.rents[0]*2;
			}
			else if(numHouses>=1&&numHouses<5) {
				curRent = this.rents[numHouses];
			}
			else if(numHotels>=1) {
				curRent = rents[5];
			}
		}
	}
}

module.exports = Property;
