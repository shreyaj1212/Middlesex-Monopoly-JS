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
}

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

// interface Monopoly{
// 	constructor(locationsIncluded) {
// 		this.locationsIncluded = locationsIncluded;
// 		this.isMonopoly = false;
// 	}
// 	public void updateMonopolyStatus();
// 	public void updateRents();
// }

class Color { //implements Monopoly{
	constructor(name) {
		this.name = name;
		this.propertiesIncluded = [];
		this.isMonopoly = false;
	}

  getProperties() {
    return this.propertiesIncluded;
  }

	getName() {
		return this.name;
	}

	// constructor(name) {
	// 	this.name = name;
	// 	this.propertiesIncluded = [];
	// 	this.isMonopoly = false;
	// }

	addProperty(property) {
		this.propertiesIncluded.push(property);
	}

	/*
	 * returns true if a house can be added
	 * to Property p of this Color
	 * house can be added if the number of houses are evenly
	 * distributed amongst all of the properties included in
	 * this monopoly
	 */
	houseCanBeAdded(p) {
		for(var i=0;i<this.propertiesIncluded.length;i++) {
			var temp = propertiesIncluded[i];
			if(temp.getNumHouses()==p.getNumHouses()||temp.getNumHouses()==p.getNumHouses()+1) {
				return true;
			}
		}
		return false;
	}

	haveSameOwners(p1,p2){
		return p1.getOwner().equals(p2.getOwner())
	}

	updateMonopolyStatus() {
		var prevStat = this.isMonopoly;
		for(var i=0;i<propertiesIncluded.length;i++) {
			if(!propertiesIncluded[i].isOwned()){
				this.isMonopoly = false;
				return;
			}
			for(var j=i;j<propertiesIncluded.length;j++) {
				if(!haveSameOwners(propertiesIncluded[i],propertiesIncluded[j])) {
					this.isMonopoly=false;
					return;
				}
			}
		}
		this.isMonopoly=true;
		if(!prevStat && this.isMonopoly) {
			doubleRents();
		}
	}

	doubleRents() {
		for(var i = 0;i<propertiesIncluded.length;i++) {
			if(p.getNumHouses()==0){
				propertiesIncluded[i].setRent(2*p.getRent());
			}
		}
	}
}

/*
 * FORTUNE
 */
class Fortune {
  constructor(string,wealthImpact) {
    this.string=string;
    this.wealthImpact = wealthImpact;
  }

  getString() {
    return this.string;
  }

  toString() {
    return this.string;
  }

  applyWealthImpact(person) {
    person.updateWealth(wealthImpact);
  }

  getWealthImpact() {
    return this.wealthImpact;
  }
}
/*
 * CHANCE
 */
class Chance extends Location{
  constructor(position) {
    super("Chance",position);
    var f1 = new Fortune( "Oh no! Everyone in your dorm got sick, so now you are too! Lose $50",-50);
    var f2 = new Fortune("Oh no! It snowed but Mr. Beare didn't call a snow day! Lose $50",-50);
    var f3 = new Fortune("It snowed and Mr. Beare called a snow day! Gain $50",50);
    var f4 = new Fortune("It's sunny and you play spikeball on the Circle! Gain $50",50);
    this.fortuneList = [f1,f2,f3,f4];
    this.NUM_CHANCE_FORTUNES = 4;
  }

  generateRandomFortune() {
    var fortuneNum = Math.random()*this.NUM_CHANCE_FORTUNES;
    console.log(this.fortuneList[0]);
    return (this.fortuneList[fortuneNum]);
  }

  /*
   * STILL NEED TO IMPLEMENT HOW TO UPDATE THE WEALTH
   */
  executeFortune(player){
    var fortune = this.generateRandomFortune();
    // player.updateWealth(fortune.wealthImpact);
    return fortune;
  }
}

/*
 * PLAYER
 */
class Player{
	constructor(name) {
		this.name = name;
		this.wealth = 1500;
		this.inww = false;
		this.ownables = {};
		this.pos = 0;
	}

	/*
	 * adds x to wealth; x can be negative
	 * or positive
	 */
	updateWealth(x) {
		if(this.wealth+x<0) return "insufficient funds";
		else this.wealth=this.wealth+x;
	}

	/*
	 * precondition: ownable is of type Ownable
	 */
	buyOwnable(ownable) {
		var price = ownable.getPrice();
		updateWealth(-1*price);
		ownables.push(ownable);
		ownable.setOwner(this);
		var c = ownable.getMonopoly();
		c.updateMonopolyStatus();
	}

	getPosition(){
		return this.pos;
	}

	modPositionByBoardLength() {
		pos = pos%40;
	}

	/*
	 * will move the player to posiiton x
	 * on the board
	 */
	addToPosition(x) {
		this.pos=this.pos+x;
	}

	/*
	 * send to Writing Workshop
	 */
	sendToJail() {
		this.inww= true;
		pos = Constants.WRITING_WORKSHOP_POSITION;
	}

	releaseFromJail() {
		this.inww = false;
	}

  getWealth() {
    return this.wealth;
  }
}


/*
 * COMMUNITY CHEST
 */
class CommunityChest extends Location{
  constructor(position) {
    super("Community Chest", position);
    var f1 = {string: "Ay Caramba! You missed assembly. Lose $50",wealthImpact:-50};
    var f2 = {string: "Oh no! You accidentally slept in! Lose $50",wealthImpact:-50};
    var f3 = {string: "You gave a great tour today! Gain $50",wealthImpact:50};
    var f4 = {string: "You went to Open Table and served your community! Gain $50",wealthImpact:50};
    this.fortuneList = [f1,f2,f3,f4];
  }

  generateRandomFortune() {
    var fortuneNum = Math.random()*NUM_CHANCE_FORTUNES;
    return fortuneList[fortuneNum];
  }

  /*
   * applies the fortune to the player
   */
  executeFortune(player){
    var fortune = generateRandomFortune();
    fortune.applyWealthImpact(player);
  }
}

/*
 * RAILROAD
 */
 class RailRoad {//extends Ownable{
   //onstructor(nom,price,color,owner,rents,pos
   constructor(name,position) {
     this.name = name;
     this.position = position;
     this.rent = 25;
     this.price = 200;
   }

   getRent(diceRoll){
     return rent;
   }

   setRent(x) {
     this.rent =x;
   }
 }

 /*
  * RAILROAD MONOPOLY
  */
  class RailRoadMonopoly {// implements Monopoly{
    constructor(propertiesIncluded) {
      this.propertiesIncluded = propertiesIncluded;
    }

    updateRents() {
      for(i=0;i<propertiesIncluded.length;i++) {
        var p = propertiesIncluded[i];
        var pOwner = p.getOwner();
        var count = 0;
        for(j=0;j<propertiesIncluded.length;j++) {
          var p2 = propertiesIncluded[j];
          if(p2.getOwner().equals(pOwner)){
            count=count+1;
          }
        }
        if(count==1) {
          p.setRent(FIRST_RR_RENT);
        }
        else if(count==2) {
          p.setRent(SECOND_RR_RENT);
        }
        else if(count==3) {
          p.setRent(THIRD_RR_RENT);
        }
        else if(count==4) {
          p.setRent(FOURTH_RR_RENT);
        }
      }
    }
  }

/*
 * TAX
 */
 class Tax extends Location{
   constructor(name, tax_amt,position) {
     super(name, position);
     this.taxAmt = tax_amt;
   }

   /*
    * applies the tax to the player
    */
   applyTax(player) {
     player.updateWealth(-1*taxAmt);
   }
 }

/*
 * UTILITY
 */
 class Utility {//extends Ownable{
   constructor(name,position,rent) {
     this.price = 150;
     this.name = name;
     this.position = position;
     this.rent= rent;
     this.owner = null;
   }

   setOwner(owner) {
     this.owner = owner;
   }

   getRent(diceRoll){
     return rent*diceRoll;
   }

   setRent(x) {
     this.rent = x;
   }
 }

/*
 * UTILITY MONOPOLY
 */
 class UtilityMonopoly {//implements Monopoly{
 	constructor(propertiesIncluded) {
 		this.propertiesIncluded = propertiesIncluded;
 	}

 	updateRents() {
 		if(utilitiesHaveSameOwner()) {
 			propertiesIncluded[0].setRent(10);
 			propertiesIncluded[1].setRent(10);
 		}
 		else {
 			propertiesIncluded[0].setRent(4);
 			propertiesIncluded[1].setRent(4);
 		}
 	}

 	utilitiesHaveSameOwner() {
 		return propertiesIncluded[0].getOwner().equals(properties[1].getOwner());
 	}
 }

// CREATING THE BOARD
// property: constructor(name,price,poh,rents,color,pos
// railroad:  constructor(name,position)
var board = [];
var colors = [];
colors.push(new Color("Purple"));
colors.push(new Color("Light Blue"));
colors.push(new Color("Pink"));
colors.push(new Color("Orange"));
colors.push(new Color("Red"));
colors.push(new Color("Yellow"));
colors.push(new Color("Green"));
colors.push(new Color("Blue"));

board.push(new Location("Go!",0)); //0
board.push(new Property("Spive Lair",60,50,[2,10,30,90,160,250], colors[0],1)); //1
board.push(new CommunityChest(2));//2
board.push(new Property("Peer Tutoring Room",60,50,[4,20,60,180,320,450],colors[0],3));
board.push(new Tax("Textbook Tax",100,4));//4
board.push(new RailRoad("Bateman's Pond",5)); //5
board.push(new Property("Smokestack",100,50,[6,30,90,270,400,550],colors[1],6)); //6
board.push(new Chance(7)); //7
board.push(new Property("Rockstar Rabb's Recording Room",100,50,[6,30,90,270,400,550],colors[1],8));
board.push(new Property("Recital Hall",120,50,[8,40,100,300,450,600],colors[1],9)); //9
board.push(new Location("Writing Workshop",10));
board.push(new Property("Pillai's Programming Palace",140,100,[10,50,150,450,625,750],colors[2],11));
board.push(new Utility("D.J. Beare's Dominion",12,4));
board.push(new Property("The Rotunda",140,100,[10,50,150,450,625,750],colors[2],13));
board.push(new Property("The Observatory",160,100,[12,60,180,500,700,900],colors[2],14));
board.push(new RailRoad("Estabrook Woods",15)); //15
board.push(new Property("The Cage",180,100,[14,70,200,550,750,950],colors[3],16));
board.push(new CommunityChest(17));
board.push(new Property("The Dance Studio",180,100,[14,70,200,550,750,950],colors[3],18));
board.push(new Property("Fitness Center",200,100,[16,80,220,600,800,1000],colors[3],19));
board.push(new Location("Acorn Lot",20));
board.push(new Property("Tech Center",220,150,[18,90,250,700,875,1050],colors[4],21));
board.push(new Chance(22));
board.push(new Property("Terry Room",220,150,[18,90,250,700,875,1050],colors[4],23));
board.push(new Property("Third Floor of Eliot",240,150,[20,100,300,750,925,1100],colors[4],24));
board.push(new RailRoad("Turf Fields",25)); //25
board.push(new Property("Health Center",260,150,[22,110,330,800,975,1150],colors[5],26));
board.push(new Property("Stufac",240,150,[22,110,330,800,975,1150],colors[5],27));
board.push(new Utility("Deans' Office",28,4));
board.push(new Property("Dining Hall",240,150,[24,120,360,850,1025,1200],colors[5],29));
board.push(new Location("Go To Writing Workshop",30));
board.push(new Property("Kaye Theater",280,200,[26,130,390,900,1100,1275],colors[6],31));
board.push(new Property("Ishibashi Gallery",280,200,[26,130,390,900,1100,1275],colors[6],32));
board.push(new Chance(33));
board.push(new Property("BAP Conference Room",300,200,[28,150,450,1000,1200,1400],colors[6],34));
board.push(new RailRoad("Soccer Fields",35)); //35
board.push(new CommunityChest(36));
board.push(new Property("Chapel Bells",350,200,[35,175,500,1100,1300,1500],colors[7],37));
board.push(new Property("Chapel Podium",400,200,[40,200,600,1400,1700,2000],colors[7],39));

// TESTING
var purple = new Color("Purple");
var property = new Property("Spive Lair",60,50, [2,50,120,439,1029],purple,1);
console.log(property.getName());
purple.addProperty(property);

var player = new Player("Shreya");
var chance1 = new Chance(6);
console.log(chance1.executeFortune(player));
console.log(player.getWealth());
player.updateWealth(-30);
console.log(player.getWealth());
player.updateWealth(50);
console.log(player.getWealth());
