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

	getMonopoly(){
		return this.color;
	}

	setOwner(newOwner) {
		this.owner = newOwner;
	}
}