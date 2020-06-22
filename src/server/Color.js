/**
 * @author Shreya Jain
 */

 const Player = require('./player');
 const Property = require('./Property');

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
module.exports = Color;
