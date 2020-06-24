/**
 * @author Shreya Jain
 */
// const Constants = require('../shared/constants');
//
const Constants = require('./constants');

const Ownable = require('./Ownable');
const Player = require('./player');

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

module.exports=Utility;
