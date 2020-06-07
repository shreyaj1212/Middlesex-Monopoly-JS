class Property extends Ownable{
	constructor(name,priceOfHouse,rents,color) {
		this.name = name;
		this.numHouses = 0;
		this.numHotels = 0;
		this.priceOfHouse = priceOfHouse;
		this.rents = rents;
		this.color = color;
		this.owner = null;
		this.curRent = rents[0];
	}

	getNumHouses(){
		return numHouses;
	}

	getNumHotels(){
		return numHotels;
	}

	addHouse() {
		if(this.color.houseCanBeAdded(this)){
			numHouses=numHouses+1;
			this.owner.updateWealth(-1*priceOfHouse);
			updateRent();
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